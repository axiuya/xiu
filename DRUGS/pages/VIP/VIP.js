// pages/VIP/VIP.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listarr :[
    {
        bigtitle:"新用户专属",
        smallitle:"共45天",
        righttext:"免费领权益"
    }, 
    {
        bigtitle:"日卡",
        smallitle:"共1天",
        righttext:"1元领权益"
    },  
    {
      bigtitle:"月卡",
      smallitle:"共30天",
      righttext:"100元领权益"
    },
    {
      bigtitle:"季卡",
      smallitle:"共120天",
      righttext:"200元领权益"
    },
    {
      bigtitle:"年卡",
      smallitle:"共360天",
      righttext:"300元领权益"
    }
  ],
  },
  goyf(){
    wx.redirectTo({
      url: '../yf/yf',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: 'VIP',
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