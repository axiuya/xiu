// pages/mine/mine.js
// var app = getApp()
Page({
  data: {
    // userInfo: {},
    // motto: 'Hello World',
    // orderItems
    orderItems: [
      {
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: '../image/person/待付款_wallet-one.png',
      },
      {
        typeId: 1,
        name: '待出库',
        url: 'bill',
        imageurl: '../image/person/待出库_ad-product.png',
      },
      {
        typeId: 2,
        name: '待收货',
        url: 'bill',
        imageurl: '../image/person/待收货_truck.png'
      },
      {
        typeId: 3,
        name: '全部订单',
        url: 'bill',
        imageurl: '../image/person/待评价_notes.png'
      },
      {
        typeId: 4,
        name: '退货/退款',
        url: 'bill',
        imageurl: '../image/person/退货_shopping-cart-del.png'
      }
    ],
    listItem:[
      {
        imageurl:'../image/person/问诊_general-branch.png',
        text:"我的问诊"
      },
      {
        imageurl:"../image/person/健康检测_heart-rate.png",
        text:"健康检测"
      },
      {
        imageurl:"../image/person/医院_hospital-four.png",
        text:"医院咨询"
      },
      {
        imageurl:"../image/person/我的预约_schedule.png",
        text:"我的预约"
      },
      {
        imageurl:"../image/person/处方_prescription.png",
        text:"我的处方"
      }
    ],
    personItem:[
      {
        imageurl:"../image/person/我的评价_edit-one.png",
        text:"我的评价"
      },
      {
        imageurl:"../image/person/收货地址_local-two.png",
        text:"收货地址"
      },
      {
        imageurl:"../image/person/用药提醒_remind.png",
        text:"用药提醒"
      },
      {
        imageurl:"../image/person/我的投诉_inbox-r.png",
        text:"我的投诉"
      },
      {
        imageurl:"../image/person/我的保单_file-protection.png",
        text:"我的保单"
      }
    ]
  },

  //事件处理函数
  toOrder: function () {
    wx.navigateTo({
      url: '../order/order'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })
    
      wx.setNavigationBarTitle({
        title: '个人中心',
      })
    
    
  }
})
