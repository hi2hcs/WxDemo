// const baseUrl = "http://www.uat.jushenghua.com/ec/los/";
const baseUrl = "https://www.apiopen.top/";



function req(url, reqParameters, callBack) {
  let urls = baseUrl + url;
  var time = (new Date()).valueOf();
  let afterReqParameters = reqParameters == null ? {} : reqParameters;

  var commonParaMaters = {
    _channel_id: "02",
    _client_version_no: "1.3.0",
    _deviceId: "0b050484-9e7d-4db8-9ee9-ee4b43e7998f",
    timestamp: time
  }
  var addCommonParamaters = Object.assign(commonParaMaters, afterReqParameters);//插入公共参数
  wx.showLoading({
    title: '加载中...',
  })
  wx.request({
    url: urls,
    method: 'POST',
    header: {
      // 'content-type': 'application/json; charset=UTF-8'//'GET'
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: addCommonParamaters,
    success: function (res) {
      wx.hideLoading();
      return typeof callBack == "function" && callBack(res);

    },
    fail: function (res) {
      wx.hideLoading();
      wx.showToast({
        title: "失败",
      })
      return typeof callBack == "function" && callBack(res);;
    }
  }
  )

}
module.exports = {
  req: req
}