// pages/stories/index.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    name: 'James',
    // stories: [
    //   {title: 'fuckin hell'},
    //   {title: 'fuckin hell mate'},
    //   {title: 'fuckin hell bro'}
    // ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {
    const page = this
    wx.request({
      url: 'http://localhost:3000/api/v1/stories',
      method: 'GET',
      success(res){
        page.setData({
          stories: res.data.stories
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },

  goToStory(e) {
    console.log('function go to story e', e)
    wx.navigateTo({
      url: `/pages/stories/show?id=${e.currentTarget.dataset.id}`,
    })
  }
})