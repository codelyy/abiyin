const { createProxyMiddleware } = require('http-proxy-middleware')


module.exports = (options) => {
    options.use(
        '/api',
        createProxyMiddleware({
            target: "/",
            changeOrigin: true,
            pathRewrite: {
                "^/api": ''
            }
        })
    )
}