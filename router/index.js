import Router from 'koa-router'

const router = new Router()
router.get('/',ctx=>{
    ctx.body = 'prisma-'
})
router.get('/user',async ctx=>{
    ctx.body = await ctx.prisma.user.findMany()
    
})
router.post('/user',async ctx=>{
   const {email,name} = ctx.request.body
   const res = await ctx.prisma.user.create({
    data:{
        email,
        name
    }
   })
   ctx.body = res

})
router.post('/',ctx=>{
    const data = ctx.request.body
    ctx.body = data
})

export default router