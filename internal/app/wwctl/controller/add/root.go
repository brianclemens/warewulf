package add

import "github.com/spf13/cobra"

var (
	baseCmd = &cobra.Command{
		Use:   "add",
		Short: "Add",
		Long:  "Add",
		RunE:  CobraRunE,
		Args:  cobra.MinimumNArgs(1),
	}
	SetController string
)

func init() {

}

// GetRootCommand returns the root cobra.Command for the application.
func GetCommand() *cobra.Command {
	return baseCmd
}
