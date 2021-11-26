// pages/home.js

const aaa = require("../../http/util");

const ble_sdk = requirePlugin("蓝牙体脂秤sdk")
const elink_plugin = requirePlugin("ElinkThings蓝牙SDK").AiLink
//测试插件
let score = elink_plugin.getBrushAllScore(120, 90, 30, 60)
console.log(`---测试刷牙得分：${score}`)

// import util from "../../http/util"


Page({

  /**
   * 页面的初始数据
   */
  data: {
    connectBtnText: "点击开启蓝牙"
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
    console.log(getApp().globalData.baseURL)

    console.log("====:" + aaa.GetDiscoverList);

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

  }
})