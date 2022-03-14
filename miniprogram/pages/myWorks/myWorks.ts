// pages/myWorks/myWorks.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex:0,
    worksList:[
      {
        id:0,
        name:'作品名称01',
        url:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        type:'1'
      },
      {
        id:1,
        name:'作品名称02',
        url:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        type:'1'
      },
      {
        id:2,
        name:'作品名称03',
        url:'https://vd3.bdstatic.com/mda-nccctgq7b5k9v6xe/sc/cae_h264_delogo/1647162495745309354/mda-nccctgq7b5k9v6xe.mp4?v_from_s=hkapp-haokan-hbe&auth_key=1647238837-0-0-99ab96405073b637a30082c2d4c32247&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=3037725506&vid=8321042949505832744&abtest=100815_2-17451_1&klogid=3037725506',
        type:'1'
      },
    ],
    tabList: [
      {
        id: 0,
        type: 'one',
        name: '教育类',
        emptyDesc: '文案:已报名',
        active: true
      },
      {
        id: 1,
        type: 'two',
        name: '理财类',
        emptyDesc: '文案:已定你',
        active: false
      },
      {
        id: 2,
        type: 'three',
        name: '教师类',
        emptyDesc: '文案:已完成',
        active: false
      },
      {
        id: 3,
        type: 'four',
        name: '设计类',
        emptyDesc: '文案：已收藏',
        active: false
      },
      {
        id: 4,
        type: 'five',
        name: '摄影类',
        emptyDesc: '文案：已收藏',
        active: false
      },
    ]
  },
  changeDataTab(e: any) {
    console.log(e);
    let currentIndex = e.detail.currentIndex;
    this.data.tabList.forEach((item, index) => item.active = currentIndex == index ? true : false)
    this.setData({
      tabList: this.data.tabList,
      activeIndex: currentIndex
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

  }
})