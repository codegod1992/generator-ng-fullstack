package main

import (
	"fmt"
	"github.com/<%= username %>/<%= appName %>/server/routes"
	"github.com/labstack/echo"
)

const port string = ":3333"

func main() {
	fmt.Printf("Running at %v\n", port)

	e := echo.New()

	routes.Init(e)

	e.Start(port)
}
