var apiReq = require('../../utils/request.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reqData:{
      type: 1,
      page: 1,
      _channel_id: "03"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    apiReq.req("satinApi", this.data.reqData, function (res) {
        console.log(res);
      if (res.statusCode == 200) {
        //成功
        wx.showToast({
          title: '成功',
        })
      } else {

      }

    })
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

  }
})