import Koa from 'koa'
import router from './router/index.js'
const app = new Koa()
app.use(router.routes(),router.allowedMethods())


app.listen(3008, () => {
    console.log('3008项目启动')
});