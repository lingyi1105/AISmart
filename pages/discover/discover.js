// pages/discover/discover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  information: function () {
    console.log("---请求发现列表")

    var url = "api/miniapp/discoveryList"
    url = getApp().globalData.baseURL + url;
    console.log(url)

    wx.request({
      url: url,
      data: {
        page: 0,
        size: 100,
        userId: wx.getStorage("Oldusernew").userId
      },
      method: "GET",
      success: function (res) {
        console.log("发现列表")
        console.log(res)
        if(res.data.code == 200) {
          
        }
      }
    })

  }




})