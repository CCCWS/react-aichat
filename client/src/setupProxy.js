const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/cloudtypeServer", {
      target: "https://port-0-react-aichat-1maxx2algj8mzv5.sel3.cloudtype.app/",
      pathRewrite: {
        "^/cloudtypeServer": "",
      },
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/papago", {
      target: "https://openapi.naver.com/",
      pathRewrite: {
        "^/papago": "",
      },
      changeOrigin: true,
    })
  );
};
