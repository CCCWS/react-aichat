const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/getServer", {
      target: "https://port-0-react-aichat-1maxx2algj8mzv5.sel3.cloudtype.app/",
      pathRewrite: {
        "^/getServer": "",
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

  app.use(
    createProxyMiddleware("/test", {
      target:
        "http://ec2-3-36-113-26.ap-northeast-2.compute.amazonaws.com:8000/",
      pathRewrite: {
        "^/test": "",
      },
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/naver", {
      target: "https://m.search.naver.com",
      pathRewrite: {
        "^/naver": "",
      },
      changeOrigin: true,
    })
  );
};
