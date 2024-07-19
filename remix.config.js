/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  // other configs...
  serverDependenciesToBundle: ["@remix-run/react", "@remix-run/node"],
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  serverModuleFormat: "cjs",
};
