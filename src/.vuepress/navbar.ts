import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: '分类',
    icon: 'fenlei',
    children: [
      { text: '全部', icon: 'quanbu', link: '/article/' },
      { text: '分类', icon: 'category', link: '/category/' },
      { text: '标签', icon: 'tag', link: '/tag/' },
      { text: '时间轴', icon: 'time', link: '/timeline/' },
    ],
  }
]);
