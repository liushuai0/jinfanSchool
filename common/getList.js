const host = 'http://49.232.155.91:8080/Urecruit/'
 
function request (url, data = {}) {
  uni.showLoading({
    title: '加载中' // 数据请求前loading
  })
  return new Promise((resolve, reject) => {
    uni.request({
      url: host + url, 
      method: "GET",
      data: data,
      headers: {
        'content-type': 'application/json' 
      },
      success: function (res) {
        uni.hideLoading()
        resolve(res.data)
      },
      fail: function (res) {
        uni.hideLoading()
        // reject(false)
      }
    })
  })
}
 
function get (obj) {
  return request(obj.url, obj.data)
}
 
function post (obj) {
  return request(obj.url, obj.data)
}
 
export default {
  request,
  get,
  host

}