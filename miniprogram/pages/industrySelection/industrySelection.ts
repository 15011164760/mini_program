// pages/industrySelection/industrySelection.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    industryList: [
      {
        name: '演员',
        active: true,
        value: '0',
        id: 0
      },
      {
        name: '模特',
        active: false,
        value: '1',
        id: 0
      },
      {
        name: '主持人', active: false,
        value: '2',
        id: 0
      },
      {
        name: '主播', active: false,
        value: '3',
        id: 0
      },
      {
        name: '礼仪', active: false,
        value: '4',
        id: 0
      },
      {
        name: '商演', active: false,
        value: '5',
        id: 0
      },
    ],
    tagList:[
      {
        name:'宣传片',active:false,
        value:'0'
      },
      {
        name:'理财类',active:false,
        value:'1'
      },
      {
        name:'群演',active:false,
        value:'2'
      },
      {
        name:'特约1',active:false,
        value:'3'
      },
      {
        name:'特约2',active:false,
        value:'4'
      },
      {
        name:'特约3',active:false,
        value:'5'
      },
      {
        name:'特约4',active:false,
        value:'6'
      },
    ]
  },
  chooseTagsFn(e:any){
    console.log(e.currentTarget.dataset.index);
    let activeIndex = e.currentTarget.dataset.index;
    this.data.tagList.forEach((item,index) => {
      if(activeIndex==index){
        item.active = !item.active 
      }
    });
    this.setData({
      tagList:  this.data.tagList
    })
  },
  tabsChange(e: any) {
    if (this.data.activeIndex == e.currentTarget.dataset.index) {
      return
    }
    console.log(e.currentTarget.dataset.index);
    this.data.activeIndex = e.currentTarget.dataset.index;
    let activeIndex = e.currentTarget.dataset.index;
    this.data.industryList.forEach((item, index) => {
      item.active = index == activeIndex ? true : false
    });
    this.setData({
      industryList: this.data.industryList
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