// component/pro/product.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 页面传过来的数据叫showArr，那么接受的时候也要叫showArr
    showArr:{
      // type指定接受的数据类型
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  // 新品展示的数组
 showArr:[
      {imgSrc: "../../pages/image/icon/avatar1.png", imgTxt: "卡布奇诺"},
      {imgSrc: "../../pages/image/icon/avatar1.png", imgTxt: "白咖啡"},
      {imgSrc: "../../pages/image/icon/avatar1.png", imgTxt: "摩卡咖啡"},
      {imgSrc: "../../pages/image/icon/avatar1.png", imgTxt: "爱尔兰咖啡"},
      {imgSrc: "../../pages/image/icon/avatar1.png", imgTxt: "甜品咖啡"},
      {imgSrc: "../../pages/image/icon/avatar1.pngg", imgTxt: "意大利咖啡"},
      {imgSrc: "../../pages/image/icon/avatar1.png", imgTxt: "拿铁咖啡"},
      {imgSrc: "../../pages/image/icon/avatar1.png", imgTxt: "中式咖啡"}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
