// pages/myStatus/myStatus.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    activeType: 'one',
    resList: [
      {
        id: 0,
        name: '张三',
        date: '2.12',
        address:'北京',
        job:'模特',
        satus: '未入选',
        statusType:'0',
        tags: ["礼仪", "歌手","礼仪", "歌手","礼仪", "歌手","礼仪", "歌手","礼仪", "歌手"],
        price: 'Y100/半天',
        logoUrl: 'https://pic2.zhimg.com/80/v2-e033acbeacba3cd43e4874b1fa34afc8_1440w.jpg?source=1940ef5c',
        desc: "北京酒吧好的去处，大家有时间过去玩吧。北京酒吧好的去处，大家有时间过去玩吧年糕水电费您看是打发水电费您看是打发你说的水电费女士的看法你说的士大fdsad夫撒地方年号的说法三分大赛是D发送到发送到发生"
      },
      {
        id: 1,
        name: 'yang1',
        date: '2.12',
        address:'北京',
        job:'模特',
        satus: '已选中',
        statusType:'1',
        tags: ["礼仪", "歌手"],
        price: 'Y100/半天',
        logoUrl: 'https://t7.baidu.com/it/u=1362366007,2277133945&fm=193&f=GIF',
        desc: "北京酒吧好的去处，大家有时间过去玩吧。北京酒吧好的去处，大家有时间过去玩吧。"
      },
    ],
    tabList: [
      {
        id: 0,
        type: 'one',
        name: '已报名',
        emptyDesc: '文案:已报名',
        active: true
      },
      {
        id: 1,
        type: 'two',
        name: '已定你',
        emptyDesc: '文案:已定你',
        active: false
      },
      {
        id: 2,
        type: 'three',
        name: '已完成',
        emptyDesc: '文案:已完成',
        active: false
      },
      {
        id: 3,
        type: 'four',
        name: '已收藏',
        emptyDesc: '文案：已收藏',
        active: false
      },
    ]
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
  changeDataTab(e: any) {
    console.log(e);
    let currentIndex = e.detail.currentIndex;

    this.data.tabList.forEach((item, index) => item.active = currentIndex == index ? true : false)
    this.setData({
      tabList: this.data.tabList,
      activeIndex: currentIndex
    })
  }
})