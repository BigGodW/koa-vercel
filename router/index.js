import Router from 'koa-router'

const router = new Router()
router.get('/',ctx=>{
    ctx.body = 'hello koa-router'
})
router.get('/user',ctx=>{
    ctx.body = 'user'
})

export default router