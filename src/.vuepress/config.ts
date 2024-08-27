import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";
import { baiduAnalyticsPlugin } from '@vuepress/plugin-baidu-analytics'


import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);
const SrcPath = path.resolve(__dirname, '../');

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Yinn",
  description: "Yinn-一个小废物的博客",

  theme,


  plugins:[
    // 百度统计插件
    baiduAnalyticsPlugin({
      // 配置项
      id: "8aa9f9ebf561dcf7d938929e2786f54f"
    }),
  ],

  alias: {
    '@components': path.resolve(__dirname, 'components'),
    '@src': SrcPath,
    
    // 设置别名 覆盖默认首页
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
