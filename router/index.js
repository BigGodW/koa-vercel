import Router from 'koa-router'
import user from './user.js'
const router = new Router()
router.use('/user',user.routes(),user.allowedMethods())
router.get('/',ctx=>{
    ctx.body = 'app-builds, 修改verce.json配置 入口文件'
})

router.post('/',ctx=>{
    const data = ctx.request.body
    ctx.body = data
})

export default router