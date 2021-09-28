const config = require("../../http/config");

// pages/discover/discover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [],

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
    console.log('----onShow')
    this.getDiscoverList();
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
    console.log('----上拉')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getDiscoverList: function () {
    var that = this;

    var url = config.GetDiscoverList;
    console.log("---请求发现列表",url)

    wx.request({
      url: url,
      data: {
        page: 0,
        size: 100,
        userId: 0
      },
      method: "GET",
      success: function (res) {
        console.log("---发现列表：",res)  //服务器请求回来的格式详细见：discoverlist.json
        if(res.data.code == 200) {
          that.setData({
            articleList: res.data.data
          })
        }
      }
    })

  }




})