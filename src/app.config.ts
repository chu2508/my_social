
const tabBar =  {
  custom: true,
  list: [
    {
      pagePath: "pages/home/index"
    },
    {
      pagePath: "pages/communication/index"
    },
    {
      pagePath: "pages/about/index"
    }
  ]
}
export default {
  pages: [
    "pages/about/index",
    "pages/home/index",
    "pages/i_likes/index",
    "pages/likes_me/index",
    "pages/communication/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: process.env.TARO_ENV !== 'h5' ? tabBar : undefined
};
