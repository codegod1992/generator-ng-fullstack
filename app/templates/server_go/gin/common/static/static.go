package static

import (
	"os"

	"github.com/gin-gonic/gin"
)

func Init(r *gin.RouterGroup) {
	r.Static("/node_modules", "./node_modules")
	r.Static("/jspm_packages", "./jspm_packages")

	if env := os.Getenv("GO_ENV"); env == "" {
		r.Static("/client/dev", "./client/dev")
	} else {
		r.Static("/client/dist", "./client/dev")
	}
}
