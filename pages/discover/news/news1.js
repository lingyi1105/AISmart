// pages/discover/list/news1.js
const config = require("../../../http/config.js");
var wxp = require("../../../utils/wxParse/wxParse.js")


Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("---页面加载携带参数option:",options)
    this.getArticleById(options)
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
    //this.getArticleById();
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

  getArticleById: function (param) {
    var that = this;
    wx.request({
      url: config.GetArticleById,
      data: {
        disId: param.disId
      },
      method: "GET",
      success: function(res) {
        console.log("---文章获取结果：",res)
        if(res.data.code == 200) {
          wxp.wxParse('wz','html',res.data.data.url, that, 5)
        }
      }
    })
  }



})