const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/naver", {
      target: "https://openapi.naver.com",
      pathRewrite: {
        "^/naver": "",
      },
      changeOrigin: true,
    })
  );
};
