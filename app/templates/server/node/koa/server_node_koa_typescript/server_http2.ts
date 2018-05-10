/// <reference path="../typings/index.d.ts" />

"use strict";

const PORT = process.env.PORT || 3333;

import * as fs from "fs";
import * as os from "os";
import * as http2 from "spdy";
import * as Koa from "koa";
import * as routerCb from "koa-router";
import * as RoutesConfig from "./config/routes.conf";
import * as DBConfig from "./config/db.conf";
import * as Routes from "./routes/index";

const router = routerCb();

const app = new Koa();

RoutesConfig.init(app, router);
DBConfig.init();
Routes.init(app, router);

const opts = {
  key: fs.readFileSync(__dirname + "/cert/server.key"),
  cert: fs.readFileSync(__dirname + "/cert/server.crt")
}

http2.createServer(opts, app.callback())
     .listen(PORT, () => {
       console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
       console.log(`enviroment: ${process.env.NODE_ENV}`);
     });
