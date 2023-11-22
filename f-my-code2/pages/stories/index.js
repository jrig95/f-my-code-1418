// pages/stories/index.js
Page({

  /**
   * Page initial data
   */
  data: {
   stories: [
     {title: 'lol cool'},
     {title: 'hows your day'},
     {title: 'Im so hungry'},
   ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    console.log(options.data.stories)
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