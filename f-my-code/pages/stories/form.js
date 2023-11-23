// pages/stories/form.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    formData: {

    }
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
    this.resetForm()
    
    const page = this

    const id = wx.getStorageSync('editedId')

    if (id){
      console.log('ok i found the id -> update')
      wx.request({
        url: `http://localhost:3000/api/v1/stories/${id}`,
        success(res){
          page.setData({
            formData: res.data,
            editedId: id 
          })
          wx.removeStorageSync('editedId')
        }
      })

    } else{
      console.log('oh no')
    }


    
  },

  resetForm() {
    this.setData({formData:{}})
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

  save(e) {
    console.log(e)
    const story = e.detail.value

    const stories = wx.getStorageSync('stories')
    console.log(stories)
    const page = this

    if (this.data.editedId !== undefined && this.data.editedId !== null){
      wx.request({
        url: `http://localhost:3000/api/v1/stories/${page.data.editedId}`,
        method: 'PUT',
        data: {story: story},
        success(res){
          console.log('update successful', res)
          wx.switchTab({
            url: '/pages/stories/index',
          })
        }
      })
    } else{
      stories.push(story)
    }
    


  }
})