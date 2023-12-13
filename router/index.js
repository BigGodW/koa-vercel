import Router from 'koa-router'

const router = new Router()
router.get('/',ctx=>{
    ctx.body = 'hello koa-body'
})
router.get('/user',ctx=>{
    ctx.body = 'user'
})
router.post('/',ctx=>{
    const data = ctx.request.body
    ctx.body = data
})

export default router