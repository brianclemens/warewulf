package mkdir

import (
	"fmt"
	"os"
	"path"

	"github.com/hpcng/warewulf/internal/pkg/config"
	"github.com/hpcng/warewulf/internal/pkg/node"
	"github.com/hpcng/warewulf/internal/pkg/overlay"
	"github.com/hpcng/warewulf/internal/pkg/util"
	"github.com/hpcng/warewulf/internal/pkg/wwlog"
	"github.com/spf13/cobra"
)

func CobraRunE(cmd *cobra.Command, args []string) error {
	var overlaySourceDir string
	//	mode := uint32(strconv.ParseUint(PermMode, 8, 32))

	if SystemOverlay == true {
		overlaySourceDir = config.SystemOverlaySource(args[0])
	} else {
		overlaySourceDir = config.RuntimeOverlaySource(args[0])
	}

	if util.IsDir(overlaySourceDir) == false {
		wwlog.Printf(wwlog.ERROR, "Overlay does not exist: %s\n", args[0])
		os.Exit(1)
	}

	overlayDir := path.Join(overlaySourceDir, args[1])

	wwlog.Printf(wwlog.DEBUG, "Will create directory in overlay: %s:%s\n", args[0], overlayDir)

	err := os.MkdirAll(overlayDir, os.FileMode(PermMode))
	if err != nil {
		wwlog.Printf(wwlog.ERROR, "Could not create directory: %s\n", path.Dir(overlayDir))
		os.Exit(1)
	}

	fmt.Printf("Created directory within overlay: %s:%s\n", args[0], args[1])

	if NoOverlayUpdate == false {
		n, err := node.New()
		if err != nil {
			wwlog.Printf(wwlog.ERROR, "Could not open node configuration: %s\n", err)
			os.Exit(1)
		}

		nodes, err := n.FindAllNodes()
		if err != nil {
			wwlog.Printf(wwlog.ERROR, "Cloud not get nodeList: %s\n", err)
			os.Exit(1)
		}

		var updateNodes []node.NodeInfo

		for _, node := range nodes {
			if SystemOverlay == true && node.SystemOverlay.Get() == args[0] {
				updateNodes = append(updateNodes, node)
			} else if node.RuntimeOverlay.Get() == args[0] {
				updateNodes = append(updateNodes, node)
			}
		}

		if SystemOverlay == true {
			wwlog.Printf(wwlog.INFO, "Updating System Overlays...\n")
			return overlay.BuildSystemOverlay(updateNodes)
		} else {
			wwlog.Printf(wwlog.INFO, "Updating Runtime Overlays...\n")
			return overlay.BuildRuntimeOverlay(updateNodes)
		}
	}

	return nil
}
