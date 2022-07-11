// pages/menu/menu.js
// 导入fetch.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    "menuBanner": [
      "../image/fenlei/2.jpg",
      "../image/fenlei/3.jpg",
      "../image/fenlei/4.jpg"
    ],
    // 列表数据
    "menulist": [
      {
        "id": 0,
        "title": "养生花茶",
        "subArr": [
          {
            "imgSrc": "../image/fenlei/5.png",
            "imgDesc": "润通茶"
          },
          {
            "imgSrc": "../image/fenlei/7、.jpg",
            "imgDesc": "洛神花茶"
          },
          {
            "imgSrc": "../image/fenlei/8.jpg",
            "imgDesc": "菊花茶"
          },
          {
            "imgSrc": "../image/fenlei/9.jpg",
            "imgDesc": "玫瑰花茶"
          }
        ]
      },

      {
        "id": 1,
        "title": "保健食品",
        "subArr": [
          {
            "imgSrc": "../image/fenlei/6.png",
            "imgDesc": "褪黑素"
          },
          {
            "imgSrc": "../image/fenlei/15.png",
            "imgDesc": "金银花露"
          },


        ]
      },

      {
        "id": 2,
        "title": "常用药品",
        "subArr": [
          {
            "imgSrc": "../image/fenlei/1.jpg",
            "imgDesc": "维c颗粒"
          },
          {
            "imgSrc": "../image/fenlei/7.png",
            "imgDesc": "999感冒灵"
          },
          {
            "imgSrc": "../image/fenlei/10.png",
            "imgDesc": "莲花清瘟胶囊"
          },
          {
            "imgSrc": "../image/fenlei/11.png",
            "imgDesc": "夫西地酸软膏"
          },
          {
            "imgSrc": "../image/fenlei/12.jpg",
            "imgDesc": "布洛芬胶囊"
          },
          {
            "imgSrc": "../image/fenlei/13.jpg",
            "imgDesc": "六味地黄丸"
          },
          {
            "imgSrc": "../image/fenlei/14.png",
            "imgDesc": "牛黄解毒片"
          }
        ]
      },

      {
        "id": 3,
        "title": "中西药品",
        "subArr": [
          {
            "imgSrc": "../image/fenlei/16.png",
            "imgDesc": "枇杷糖"
          },
          {
            "imgSrc":  "../image/fenlei/23.png",
            "imgDesc": "银芩胶囊"
          },
          {
            "imgSrc":  "../image/fenlei/24.png",
            "imgDesc": "桔梗止咳片"
          }
        ]
      },
      {
        "id": 4,
        "title": "消毒用品",
        "subArr": [
          {
            "imgSrc":  "../image/fenlei/17.jpg",
            "imgDesc": "免洗消毒凝胶"
          },
          {
            "imgSrc":  "../image/fenlei/18.jpg",
            "imgDesc": "酒精消毒液"
          }
        ]
      },
      {
        "id": 5,
        "title": "儿童专区",
        "subArr": [
          {
            "imgSrc":  "../image/fenlei/19.jpg",
            "imgDesc": "健胃消食片"
          },
          {
            "imgSrc":  "../image/fenlei/20.png",
            "imgDesc": "小儿七星茶"
          },
          {
            "imgSrc":  "../image/fenlei/21.jpg",
            "imgDesc": "乳酸菌素片"
          },
          {
            "imgSrc":  "../image/fenlei/21.jpg",
            "imgDesc": "儿童退热贴"
          }
        ]
      }


    ],
     "currentnum": 0,
  "leftActive": 0,
  "rightId": "box0",
  "__webviewId__": 13
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },
// 轮播图切换的时候执行
  swiperchange(e){
     // 获取轮播图对应的当前项
    //  console.log();
    this.setData({
      currentnum: e.detail.current
    })
  },

  // 点击左侧的时候执行的方法
  changeLeft(e){
// 改变leftActive

// 获取到点击项的下标
console.log(e.currentTarget.dataset.myindex);
var myindex = e.currentTarget.dataset.myindex
// 把获取到的下标赋值给leftActive
this.setData({
  leftActive:myindex,
  // 还要关掉rightId
  rightId:'box'+myindex
})
  }
})