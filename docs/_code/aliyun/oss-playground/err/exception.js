const { HttpException } = require('./http-exception')

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        // 开发环境 不是HttpException
        const isHttpException = error instanceof HttpException
        const isDev = global.config.environment === 'dev'

        if (isDev && !isHttpException) {
            throw error //开发环境下且不是http错误，则抛出
        }
        //http错误以返回值返回到前台
        if (isHttpException) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        }
        else {
            ctx.body = {
                msg: 'we made a mistake O(∩_∩)O~~',
                error_code: 999,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }
    }
}

module.exports = catchError