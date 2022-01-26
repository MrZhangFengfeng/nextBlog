const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["antd-mobile"]);
const isProd = process.env.NODE_ENV === "production";
/**
 * @type {import('next').NextConfig}
 */
module.exports = withTM(
  withImages({
    // 你项目中其他的 Next.js 配置
    env: {
      customKey: "my-value", // return <h1>The value of customKey is: {process.env.customKey}</h1>
    },
    basePath: "",
    assetPrefix: isProd ? "https://cdn.mydomain.com" : "",
    compress: true, // 默认开启使用gzip压缩内容和资源文件
    /**
     * webpack拓展， 会在客户端和服务端分别执行一次 可以通过 isServer 来执行特定操作
     * @param {string} buildId  The build id, used as a unique identifier between builds
     * @param {string} dev   Indicates if the compilation will be done in development
     * @param {string} isServer   It's true for server-side compilation, and false for client-side compilation
     */
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Important: return the modified config
      return config;
    },
    images: {
      domains: ["images3.c-ctrip.com", "r.photo.store.qq.com"],
    },
    // 页面还是abandoned  但是内容展示的是/posts/list
    async rewrites() {
      return [
        {
          source: "/abandoned",
          destination: "/posts/list",
        },
      ];
    },
    // 304重定向
    async redirects() {
      return [
        {
          source: "/about",
          destination: "/posts/list",
          permanent: true,
        },
      ];
    },
    async headers() {
      return [
        {
          source: "/posts/list",
          headers: [
            {
              key: "x-custom-header",
              value: "my custom header value",
            },
            {
              key: "x-another-custom-header",
              value: "my other custom header value",
            },
          ],
        },
      ];
    },
  })
);
