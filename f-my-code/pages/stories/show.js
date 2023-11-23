// pages/stories/show.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    // console.log('inside stories show', options)
    // const story = app.globalData.stories[parseInt(options.index)]
    // this.setData({
    //   story: story
    // })
    const page = this
    const id = options.id
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      method: 'GET',
      success(res){
        page.setData({
          story: res.data
        })
      }
    })

  },

  edit(e){
    wx.setStorageSync('editedId', this.data.story.id)
    console.log(this.data.story)
    wx.switchTab({
      url: '/pages/stories/form',
    })
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

  }
})