// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    stories: [
      {title: 'lol cool', body:'helllo everyon whats up'},
      {title: 'hows your day', body:'lets get some food'},
      {title: 'Im so hungry', body:'I am so hungry'},
    ]
  }
})
