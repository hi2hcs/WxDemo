Page({

  /**
   * 页面的初始数据
   */
  data: {
    avtar: "../res/image/my_icon_qrcode.png",
    // avtar: "../res/image/my_img_head.png",

    name: "小程序小程序小程序小程序小程序小程序",
    level: "普通会员",
    shopcardnum: 2,
    couponsnum: 1,
    pointsnum: 10,
    items: [{
      name: "地址管理",
      id: 1
    }, {
      name: "门店列表",
      id: 2
    }, {
      name: "门店消费记录",
      id: 3
    }, {
      name: "我的会员卡",
      id: 4
    }, {
      name: "会员权益",
      id: 5
    }, {
      name: "设置",
      id: 6
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  clickShopcard: function() {
    console.log("clickShopcard");
  },
  clickCoupuns: function() {
    console.log("clickCoupuns");
  },
  clickPoints: function() {
    console.log("clickPoints");
  },
  clickitem: function(e) {
    console.log(e.currentTarget.dataset.id);
  }
})