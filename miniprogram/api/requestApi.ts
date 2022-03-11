const baseUrl = 'https://api-hmugo-web.itheima.net'
export const requestApi = (params: any) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      success(res) {
        console.log(res.data)
        resolve(res.data);
      },
      fail: function (err) {
        console.log(err)
        reject(err);
      },
    })
  })
}
export const listApi = {
  getList: (params: any) => {
    return requestApi({
      url: baseUrl + '/api/public/v1/home/swiperdata',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      ...params
    })
  }
}