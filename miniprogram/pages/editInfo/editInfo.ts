// pages/aboutMe/aboutMe.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person: {
      name: 'yangdongxu', 
      age: 12
    },
    activeIndex:0,
    listData:[
      {
        id:0,
        name:'yang',
        active:true
      },
      {
        id:1,
        name:'yang1',
        active:false
      },
      {
        id:2,
        name:'yang2',
        active:false
      },
      {
        id:3,
        name:'yang3',
        active:false
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
  changeDataTab(e:any){
     console.log(e);
     let currentIndex=e.detail.currentIndex;

     this.data.listData.forEach((item,index)=>item.active=currentIndex==index?true:false)
     this.setData({
       listData:this.data.listData,
       activeIndex:currentIndex
     })
  }
})