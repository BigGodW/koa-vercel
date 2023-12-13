import Router from 'koa-router'

const router = new Router()
router.get('/',ctx=>{
    ctx.body = 'hello app.js'
})
router.get('/user',async ctx=>{
    ctx.body = await ctx.prisma.user.findMany()
    
})
router.post('/',ctx=>{
    const data = ctx.request.body
    ctx.body = data
})

export default router