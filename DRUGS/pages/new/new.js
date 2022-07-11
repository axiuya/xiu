Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    dataList:[
      {
        goods_id:1,
        goods_title:'鹿茸',
        goods_img:'../image/fenlei/25.jpg',
        goods_xiaoliang:'489',
        goods_price:'360'
      },{
        goods_id:1,
        goods_title:'陈皮',
        goods_img:'../image/fenlei/26.jpg',
        goods_xiaoliang:'970',
        goods_price:'30'
      }, {
        goods_id: 1,
        goods_title: '人参',
        goods_img: '../image/fenlei/27.jpg',
        goods_xiaoliang: '486',
        goods_price: '289'
      }, {
        goods_id: 1,
        goods_title: '金银花',
        goods_img: '../image/fenlei/28.jpg',
        goods_xiaoliang: '1845',
        goods_price: '34'
      }, {
        goods_id: 1,
        goods_title: '枸杞',
        goods_img: '../image/fenlei/29.jpg',
        goods_xiaoliang: '2354',
        goods_price: '25.14'
      }
    ],
    bindViewTap() {
      wx.navigateTo({
        // url: 'id=1?'
        url: 'test?id=1'    
      })      
    },  
  }
})