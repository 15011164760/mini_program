// pages/baseInfo/baseInfo.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myHeight: '',
    sexActive: 'woman',
    items: [
      { value: 'man', name: '男' },
      { value: 'woman', name: '女', checked: true },
    ],
    region: [],
    date: '',
    tagsList: [
      {
        active: true,
        name: '大叔',
        value: '1',

      },
      {
        active: false,
        name: '萝莉',
        value: '2'
      },
      {
        active: false,
        name: '女声',
        value: '3'
      },
      {
        active: false,
        name: '男神',
        value: '4'
      },
      {
        active: false,
        name: '女神',
        value: '5'
      },
      {
        active: false,
        name: '篮球',
        value: '6'
      },
    ],
    designList: [
      {
        active: true,
        name: '2-4(婴儿)',
        value: '1',

      },
      {
        active: false,
        name: '3-6(婴儿)',
        value: '2'
      },
      {
        active: false,
        name: '6-10(低年)',
        value: '3'
      },
      {
        active: false,
        name: '10-20(低年)',
        value: '4'
      },
    ],
    specialtyList: [
      {
        active: true,
        name: '唱歌',
        value: '1',

      },
      {
        active: false,
        name: '钢琴',
        value: '2'
      },
      {
        active: false,
        name: '书法',
        value: '3'
      },
      {
        active: false,
        name: '足球',
        value: '4'
      },
      {
        active: false,
        name: '添加',
        value: 'add'
      },
    ],
  },
  tagsEveryClick(e: any) {
    console.log(e.currentTarget.dataset);
    let item = e.currentTarget.dataset.item;
    let { type, index } = e.currentTarget.dataset;
    let active = `${type}[${index}].active`;
    // console.log(active);
    this.setData({
      [active]: !item.active
    })
    console.log(this.data.tagsList)
  },
  bindRegionChange: function (e: any) {
    console.log('picker发送选择改变，携带值为', e.detail)
    this.setData({
      region: e.detail.value
    })
  },
  bindDateChange: function (e: any) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  radioChange(e: any) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.data.sexActive = e.detail.value;
    const items = this.data.items;
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }
    this.setData({
      items
    })
  },
  bindinputChange(e: any) {
    let { value } = e.detail;
    this.setData({
      myHeight: value
    })
    console.log(e, this.data.myHeight);
  }
})