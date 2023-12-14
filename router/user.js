import Router from 'koa-router'

const user = new Router()

user.get('/',async ctx=>{
    const users = await ctx.prisma.user.findMany({})
    ctx.body = users
})


export default user