import type { UserConfig } from 'valaxy'
import type { ThemeUserConfig } from 'valaxy-theme-yun'

/**
 * User Config
 * do not use export const
 */
const config: UserConfig<ThemeUserConfig> = {
  lang: 'zh-CN',
  title: 'Yang1206的博客',
  author: {
    name: 'Yang1206',
    avatar: 'https://s2.loli.net/2022/05/12/gxRJwmb1ClQPoGe.jpg',
  },
  description: 'test',
  social: [
    // {
    //   name: 'RSS',
    //   link: '/atom.xml',
    //   icon: 'i-ri-rss-line',
    //   color: 'orange',
    // },
    {
      name: 'QQ 群 361147371',
      link: 'https://jq.qq.com/?_wv=1027&k=bgSqIT7g',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/yang1206',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://m.weibo.cn/profile/5643787896',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=132380201',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/24152676',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    
    {
      name: 'E-Mail',
      link: 'mailto:yang15188280673@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Xbox Live',
      link: 'Yang1206',
      icon: 'i-ri-xbox-line',
      color: '#8E71C1',
    },
  ],

  search: {
    algolia: {
      enable: true,
      appId: 'CJXXAGRCYN',
      apiKey: 'ae1966d2aeab22bf9335679f45d2cd9a',
      indexName: 'my-hexo-blog',
    },
  },

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: 'Yang1206的博客',
    },

    pages: [
      // {
      //   name: '我的小伙伴们',
      //   url: '/links/',
      //   icon: 'i-ri-genderless-line',
      //   color: 'dodgerblue',
      // },
      // {
      //   name: '喜欢的女孩子',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },
    ],

    footer: {
      // since: 2016,
      // beian: {
      //   enable: true,
      //   icp: '苏ICP备17038157号',
      // },
    },
  },

  unocss: {
    safelist: [
      'i-ri-home-line',
    ],
  },
}

/**
 * add your icon to safelist
 * if your theme is not yun, so you can add it by yourself
 */
config.themeConfig?.pages?.forEach((item) => {
  config.unocss?.safelist?.push(item?.icon)
})

export default config
