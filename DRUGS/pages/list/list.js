Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_shoucang: 0,
    goods_info: {
      goods_id: 1,
      goods_title: "鹿茸",
      goods_price: '360',
      goods_yunfei: 0,
      goods_kucun: 100,
      goods_xiaoliang: 489,
      content: '鹿茸，是指梅花鹿或马鹿的雄鹿未骨化而带茸毛的幼角，乃名贵中药材。鹿茸中含有磷脂、糖脂、胶脂、激素、脂肪酸、氨基酸、蛋白质及钙、磷、镁、钠等成分，其中氨基酸成分占总成分的一半以上。古代医家认为，鹿之精气全在于角，而茸为角之嫩芽，气体全而未发泄，故补阳益血之力最盛。明代李时珍在《本草纲目》上称鹿茸“善于补肾壮阳，生精益血，补髓健骨”'
    },
    goods_img: [{
        'img': '../image/fenlei/a.png'
      },
      {
        'img': '../image/fenlei/b.png'
      },
      {
        'img': '../image/fenlei/c.png'
      },
      {
        'img': '../image/fenlei/d.png'
      },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    pjDataList: [{
        headpic: '../image/fenlei/f.jpg',
        author: '赖狗',
        add_time: '2018-06-01',
        content: '好评好评，真实太好了!'
      },
      {
        headpic: '../image/fenlei/h.jpg',
        author: '小刘',
        add_time: '2018-06-01',
        content: '好评好评，真实太好了!'
      }
    ], //评价数据
  },


  previewImage: function (e) {
    var current = e.target.dataset.src;
    var href = this.data.imghref;
    var goodsimg = this.data.goods_img;
    var imglist = [];
    for (var i = 0; i < goodsimg.length; i++) {
      imglist[i] = href + goodsimg[i].img
    }
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: imglist // 需要预览的图片http链接列表  
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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