/*
 * @Author: Miya
 * @Date: 2020-06-06 12:20:47
 * @LastEditTime: 2020-08-11 19:32:46
 * @LastEditors: Please set LastEditors
 * @Description: Vuex State部分
 * @FilePath: /Single-Search/src/store/state.ts
 */

const state = {
  // 登录相关
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLC.caAFsUUgzA0bPJtKfkH-4Hk',
  // 用户相关
  // TODO: api.xxx.com/settings/user
  user: {
    // 用户ID
    id: 1,
    // 用户组
    status: 'admin',
    // 用户昵称
    name: 'Miya',
    // 用户性别
    sex: 'female',
    // 头像
    avatar: '',
    // 骚话.jpg
    introduce: 'test text',
  },
  // 控制状态
  status: {
    // 遮罩层
    mask: false,
    isInputing: false,
  },
  // 站点设置列表
  settings: {
    // TODO: api.xxx.com/settings/home
    home: {
      // 背景图片
      background: 'https://i.loli.net/2020/06/13/Tsa8uqY2gbjRndw.jpg',
      // TODO: 首页搜索栏图片
      search_logo: require('@/static/img/logo.svg'),
      // 是否开启毛玻璃效果
      blur_style: true,
      // 是否开启一言
      hitokoto: false,
      // 版权信息
      copyright: {
        author: 'Miya',
        website: 'https://github.com/imisty'
      },
      // 网站开始日期
      start_date: '2005-05-04'
    },
  },
  // 搜索引擎列表
  searchList: [
    {
      icon: 'google',
      text: '谷歌',
      header: 'https://www.google.com/search?q=',
      extra: '',
    },
    {
      icon: 'bing',
      text: '必应',
      header: 'https://cn.bing.com/search?q=',
      extra: '',
    },
    {
      icon: 'baidu',
      text: '百度',
      header: 'https://www.baidu.com/s?wd=',
      extra: '',
    },
    // {icon: 'google',text: 'google', header: 'https://www.google.com/search?q='},
    // {icon: 'google',text: 'google', header: 'https://www.google.com/search?q='},
    // {icon: 'google',text: 'google', header: 'https://www.google.com/search?q='},
  ],
  // 导航栏列表
  link: [
    {
      name: '工具',
      titleIconColor: '#29f',
      icon: 'gongju',
      items: [
        {
          icon: 'youtube',
          link: 'https://www.youtube.com',
          text: 'Youtube',
        },
        {
          icon: 'bilibili',
          link: 'https://www.bilibili.com',
          text: 'Bilibili',
        },
        {
          icon: 'acfun',
          link: 'https://www.acfun.com',
          text: 'ACFun',
        },
        {
          icon: 'youku',
          link: 'https://www.youku.com',
          text: 'Youku',
        },
      ],
    },
    {
      name: '开发',
      icon: 'zhongduan',
      titleIconColor: '#29f',
      items: [
        {
          icon: '',
          link: 'https://www.youtube.com',
          text: 'Youtube',
        },
        {
          icon: '',
          link: 'https://www.bilibili.com',
          text: 'Bilibili',
        },
        {
          icon: '',
          link: 'https://www.acfun.com',
          text: 'ACFun',
        },
        {
          icon: '',
          link: 'https://www.youku.com',
          text: 'Youku',
        },
      ],
    },
    {
      name: '影视动画',
      titleIconColor: '#29f',
      icon: 'fa fa-video-camera',
      items: [
        {
          icon: 'undefined',
          link: 'https://www.youtube.com',
          text: 'Youtube',
        },
        {
          icon: 'undefined',
          link: 'https://www.bilibili.com',
          text: 'Bilibili',
        },
        {
          icon: 'undefined',
          link: 'https://www.acfun.com',
          text: 'ACFun',
        },
        {
          icon: 'undefined',
          link: 'https://www.youku.com',
          text: 'Youku',
        },
      ],
    },
    {
      name: '搜索引擎',
      icon: 'fa fa-search',
      titleIconColor: '#29f',
      items: [
        {
          icon: 'undefined',
          link: 'https://www.youtube.com',
          text: 'Youtube',
        },
        {
          icon: 'undefined',
          link: 'https://www.bilibili.com',
          text: 'Bilibili',
        },
        {
          icon: 'undefined',
          link: 'https://www.acfun.com',
          text: 'ACFun',
        },
        {
          icon: 'undefined',
          link: 'https://www.youku.com',
          text: 'Youku',
        },
      ],
    },
    {
      name: '社交',
      titleIconColor: '#29f',
      icon: 'fa fa-commenting-o',
      items: [
        {
          icon: 'undefined',
          link: 'https://www.youtube.com',
          text: 'Youtube',
        },
        {
          icon: 'undefined',
          link: 'https://www.bilibili.com',
          text: 'Bilibili',
        },
        {
          icon: 'undefined',
          link: 'https://www.acfun.com',
          text: 'ACFun',
        },
        {
          icon: 'undefined',
          link: 'https://www.youku.com',
          text: 'Youku',
        },
      ],
    },
    {
      name: '剁手',
      icon: 'fa fa-shopping-cart',
      titleIconColor: '#29f',
      items: [
        {
          icon: 'undefined',
          link: 'https://www.youtube.com',
          text: 'Youtube',
        },
        {
          icon: 'undefined',
          link: 'https://www.bilibili.com',
          text: 'Bilibili',
        },
        {
          icon: 'undefined',
          link: 'https://www.acfun.com',
          text: 'ACFun',
        },
        {
          icon: 'undefined',
          link: 'https://www.youku.com',
          text: 'Youku',
        },
      ],
    },
    {
      name: '设计视觉',
      titleIconColor: '#29f',
      icon: 'caijian',
      items: [
        {
          icon: 'undefined',
          link: 'https://palettegenerator.colorion.co/',
          text: 'Color Palette Generator',
        },
        {
          icon: 'undefined',
          link: 'https://www.youtube.com',
          text: 'Youtube',
        },
        {
          icon: 'undefined',
          link: 'https://www.bilibili.com',
          text: 'Bilibili',
        },
        {
          icon: 'undefined',
          link: 'https://www.acfun.com',
          text: 'ACFun',
        },
        {
          icon: 'undefined',
          link: 'https://www.youku.com',
          text: 'Youku',
        },
      ],
    },
    {
      name: '邮箱',
      icon: 'xinfeng',
      titleIconColor: '#29f',
      items: [
        {
          icon: 'undefined',
          link: 'https://www.youtube.com',
          text: 'Youtube',
        },
        {
          icon: 'undefined',
          link: 'https://www.bilibili.com',
          text: 'Bilibili',
        },
        {
          icon: 'undefined',
          link: 'https://www.acfun.com',
          text: 'ACFun',
        },
        {
          icon: 'undefined',
          link: 'https://www.youku.com',
          text: 'Youku',
        },
      ],
    },
  ],
};

export { state };
