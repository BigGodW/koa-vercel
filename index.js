import Koa from "koa";
import router from "./router/index.js";
import koaStatic from "koa-static";
import prisma from './db/prisma.js'
const app = new Koa();
app.context.prisma = prisma
// 请求体
import {koaBody} from 'koa-body'
app.use(koaBody({}))
// 静态资源配置
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(koaStatic(__dirname + "/public"));

// 挂载路由
app.use(router.routes(), router.allowedMethods());

app.listen(3008, () => {
  console.log("3008项目启动");
});
