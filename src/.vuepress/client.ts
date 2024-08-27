import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import { defineAsyncComponent } from 'vue';

// 为项目主页的特性添加闪光效果。
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
// 将博主头像裁剪为圆形。
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";
// 为页面图标添加鼠标悬停的跳动效果。
import "vuepress-theme-hope/presets/bounce-icon.scss";
// 为所有 hr 元素添加驾驶的车图标
import "vuepress-theme-hope/presets/hr-driving-car.scss";

// 自定义组件
const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyIcon', MyIcon);
  },
  setup: () => {
    // 透明导航
    setupTransparentNavbar({ type: "blog-homepage" });
    // 下雪效果
    setupSnowFall({count:50,maxSize:12});
  },

  rootComponents: [
    MyIcon
  ]
});