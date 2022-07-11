// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数据
    bannerUrl: [{
        imgUrl: "../image/banner/banner1.jpg"
      },
      {
        imgUrl: "../image/banner/banner2.jpg"
      },
      {
        imgUrl: "../image/banner/banner3.jpg"
      },
      {
        imgUrl: "../image/banner/banner4.jpg"
      }
    ],
    // 表示轮播图当前项
    currentActive: 0,
    // 横向滚动的数组
    storyArr: [{
        src: "../image/repin/999感冒灵颗粒.PNG",
        text: '999感冒灵颗粒',
        price: '￥12',
        xl: '销量99'
      },
      {
        src: "../image/repin/京都念慈庵琵琶糖.png",
        text: '京都念慈庵琵琶糖',
        price: '￥12.8',
        xl: '销量98'
      },
      {
        src: "../image/repin/夫西地酸乳膏.PNG",
        text: '夫西地酸乳膏',
        price: '￥17',
        xl: '销量16'
      },
      {
        src: "../image/repin/布洛芬缓释胶囊.jpeg",
        text: '布洛芬缓释胶囊',
        price: '￥39.8',
        xl: '销量69'
      },
      {
        src: "../image/repin/金嗓子喉片.jpg",
        text: '金嗓子喉片',
        price: '￥8.89',
        xl: '销量16'
      },
      {
        src: "../image/repin/金银花露.PNG",
        text: '金银花露',
        price: '￥2.92',
        xl: '销量19'
      },
      {
        src: "../image/repin/阿司匹林肠溶片.PNG",
        text: '阿司匹林肠溶片',
        price: '￥23.77',
        xl: '销量49'
      },
      {
        src: "../image/repin/阿莫西林胶囊.jpg",
        text: '阿莫西林胶囊',
        price: '￥12.75',
        xl: '销量59'
      }
    ],
    showArr: [{
        imgSrc: "../image/tuijian/六味地黄丸.jpg",
        imgTxt: "六味地黄丸",
        imgPrice: "￥26.9",
        imgXl: "销量26"
      },
      {
        imgSrc: "../image/tuijian/双飞人（￥49）.PNG",
        imgTxt: "双飞人",
        imgPrice: "￥49",
        imgXl: "销量33"
      },
      {
        imgSrc: "../image/tuijian/复方桔梗止咳片（￥6.8）.PNG",
        imgTxt: "复方桔梗止咳片",
        imgPrice: "￥6.8",
        imgXl: "销量12"
      },
      {
        imgSrc: "../image/tuijian/复方氨酚烷胺片（￥24）.PNG",
        imgTxt: "复方氨酚烷胺片",
        imgPrice: "￥24",
        imgXl: "销量24"
      },
      {
        imgSrc: "../image/tuijian/小儿七星茶（￥22.8）.PNG",
        imgTxt: "小儿七星茶",
        imgPrice: "￥22.8",
        imgXl: "销量82"
      },
      {
        imgSrc: "../image/tuijian/汤臣倍健褪黑素片.PNG",
        imgTxt: "汤臣倍健褪黑素片",
        imgPrice: "￥38.8",
        imgXl: "销量52"
      },
      {
        imgSrc: "../image/tuijian/润通茶.PNG",
        imgTxt: "润通茶",
        imgPrice: "￥16.8",
        imgXl: "销量72"
      },
      {
        imgSrc: "../image/tuijian/牛黄解毒片.PNG",
        imgTxt: "牛黄解毒片",
        imgPrice: "￥4.9",
        imgXl: "销量23"
      }
      ,
      {
        imgSrc: "../image/tuijian/维c银翘颗粒.jpg",
        imgTxt: "维c银翘颗粒",
        imgPrice: "￥4.5",
        imgXl: "销量63"
      }
      ,
      {
        imgSrc: "../image/tuijian/花露水（￥17）.PNG",
        imgTxt: "花露水",
        imgPrice: "￥17",
        imgXl: "销量43"
      }
      ,
      {
        imgSrc: "../image/tuijian/莲花清瘟胶囊.PNG",
        imgTxt: "莲花清瘟胶囊",
        imgPrice: "￥21.9",
        imgXl: "销量44"
      }
      ,
      {
        imgSrc: "../image/tuijian/银苓胶囊（￥66）.PNG",
        imgTxt: "银苓胶囊",
        imgPrice: "￥66",
        imgXl: "销量13"
      }
    ],
    iconArr: [{
        src: "../image/icon2/中药_traditional-chinese-medicine.png",
        text: '中药'
      },
      {
        src: "../image/icon2/内分泌_endocrine.png",
        text: '内分泌'
      },
      {
        src: "../image/icon2/医疗档案_medical-files.png",
        text: '医疗档案'
      },
      {
        src: "../image/icon2/处方_prescription.png",
        text: '处方'
      },
      {
        src: "../image/icon2/大脑_brain.png",
        text: '脑科'
      },
      {
        src: "../image/icon2/心脏_heart.png",
        text: '心脏科'
      },
      {
        src: "../image/icon2/牙齿_teeth.png",
        text: '牙科'
      },
      {
        src: "../image/icon2/眼睛_eyes.png",
        text: '眼科'
      }
    ],

     
    bindViewTap() {
      wx.navigateTo({
        url: 'test?id=1'
      })      
      navigateTo({
        url: 'test?id=2'
      })
    },  
  },

  // 轮播图切换的时候执行
  changeImg(e) {
    // 获取到轮播图的当前项下标
    console.log(e.detail.current);
    this.setData({
      currentActive: e.detail.current
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