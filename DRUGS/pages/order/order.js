// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      hasList:false,
      dingdan:[
          {
          text:"订单编号：",
          num:12341234,
          strin:"交易成功"
        }
    ],
    array:[
      {
        src:"../image/shop/shop1.jpg",
        text:"金嗓清丸",
        price:"17.00",
        num:"1",
        dele:"删除",
        wul:"查看物流",
        zaigou:"再次购买"
      },
      {
        src:"../image/shop/gankang.jpg",
        text:"感康复方氨酚烷胺片",
        price:"16.00",
        num:"1",
        dele:"删除",
        wul:"查看物流",
        zaigou:"再次购买"
      },
      {
        src:"../image/shop/jianwei.jpg",
        text:"健胃消食片",
        price:"10.50",
        num:"1",
        dele:"删除",
        wul:"查看物流",
        zaigou:"再次购买"
      },
      {
        src:"../image/shop/luer.jpg",
        text:"鹿茸",
        price:"95.00",
        num:"1",
        dele:"删除",
        wul:"查看物流",
        zaigou:"再次购买"
      },
      {
        src:"../image/shop/xiaoer.jpg",
        text:"小儿七星茶颗粒",
        price:"15.80",
        num:"1",
        dele:"删除",
        wul:"查看物流",
        zaigou:"再次购买"
      },
      {
        src:"../image/shop/yinqin.jpg",
        text:"银芩胶囊",
        price:"25.00",
        num:"1",
        dele:"删除",
        wul:"查看物流",
        zaigou:"再次购买"
      },
      {
        src:"../image/shop/zhike.jpg",
        text:"复方桔梗止咳片",
        price:"7.80",
        num:"1",
        dele:"删除",
        wul:"查看物流",
        zaigou:"再次购买"
      },
    ]
  },
  delete_Car(e){
    const index =e.currentTarget.dataset.index;
    let array =this.data.array;
    array.splice(index,1);
    this.setData({
        array:array
    });
    if (!array.length) {
        hasList:false
    }

  },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '全部订单',
    })
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
    this.setData({
        hasList:true
    })
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