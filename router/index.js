import Router from 'koa-router'

const router = new Router()
router.get('/',ctx=>{
    ctx.body = 'hello app.js'
})
router.get('/user',async ctx=>{
    ctx.body = await ctx.prisma.user.findMany()
    
})
router.post('/user',async ctx=>{
    const res = await ctx.prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice@prisma.io',
          posts: {
            create: { title: 'Hello World' },
          },
          profile: {
            create: { bio: 'I like turtles' },
          },
        },
      })
    
    ctx.body = {message:'添加用户成功',res}

})
router.post('/',ctx=>{
    const data = ctx.request.body
    ctx.body = data
})

export default router