// pages/shop/shop.js
Page({
    intoPage(){
        wx.navigateTo({
          url: '../service/service'
        })
    },
  /**
   * 页面的初始数据
   */
  data: {  
    // shu:[],//数量
    sum:0,//结算数量
    selectAllStatus:true,//全选状态
     cartList:[
         {
            src:"../image/shop/shop1.jpg",
            text:"金嗓清音丸",
            price:"17.00",
            num:1,
            checked:false
     },
     {
        src:"../image/shop/gankang.jpg",
        text:"感康复方氨酚烷胺片",
        price:"16.00",
        num:1,
        checked:false
      },
      {
        src:"../image/shop/jianwei.jpg",
        text:"健胃消食片",
        price:"10.50",
        num:1,
        checked:false
      },
      {
        src:"../image/shop/xiaoer.jpg",
        text:"小儿七星茶颗粒",
        price:"15.80",
        num:1,
        checked:false
      }
    ]
  },
  selectList(e) {
    const index = e.currentTarget.dataset.index; //获取 data 传进来的index
    let cartList = this.data.cartList;   // 获取购物车列表
    const checked = cartList[index].checked; //获取当前商品的选中状态
    cartList[index].checked = !checked; // 改变状态
    this.setData({
        cartList: cartList
    });
    this.Settlement();      //重新获取总价
    },
//加
addnum(evt) {  //事件处理: 增加数量
    var num = evt.target.dataset.currentnum[0];  //获取当前数量
    var index = evt.target.dataset.currentnum[1];  //获取商品序号
    this.data.cartList[index].num = num + 1 //数量+1, 并更新data.checkList
    this.setData({  //更新一下改变后的数据
        cartList: [
        ...this.data.cartList
      ]
    })
  },
  cutnum(evt) {  //事件处理: 减少数量
    var num = evt.target.dataset.currentnum[0];
    var index = evt.target.dataset.currentnum[1];
    if (num != 0) {   //防止改成负数翻车
      this.data.cartList[index].num = num-1 
    }
    this.setData({
        cartList: [
        ...this.data.cartList
      ]
    })
  },
  //单选

// 全选
selectAll() {
    this.data.isChecked = !this.data.isChecked
    this.data.cartList.forEach(element => {
      return element.checked = this.data.isChecked
    });
    this.setData({
        cartList: this.data.cartList,
        isChecked: this.data.isChecked,
     
    })
    
    this.Settlement();
  },
  // 结算
  Settlement() {
    let tatalPrice = 0;
    this.data.cartList.forEach(r => {
      if (r.checked) {
        tatalPrice += r.num * r.price

      }
    
    })
    // console.log(tatalPrice)
    this.setData({
      tatalPrice
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.Settlement();
     wx.setNavigationBarTitle({
        title: '购物车',
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
     
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})