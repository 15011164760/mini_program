// Components/Tabs/tabs.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    getDa:{
      type:String,
      value:''
    },
    listData:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    curentClick(e:any){
      let currentIndex=e.currentTarget.dataset.index;
      this.triggerEvent('changeTab',{currentIndex})
    }
  }
})
