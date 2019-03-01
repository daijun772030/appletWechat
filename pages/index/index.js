//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navImg: [//轮播图
      '../../images/laundry/banner1.jpg',
      '../../images/laundry/banner1_shouye.png',
      '../../images/laundry/banner2.jpg'
    ],
    noticeMessg:[//公告
      {id:1,title:'第一条公告',content:'这是一条长的公告，需要仔细的看看'},
      { id: 2, title: '第二条公告', content: '这是一条长的公告，需要仔细的看看' },
      { id: 3, title: '第三条公告', content: '这是一条长的公告，需要仔细的看看' },
      { id: 4, title: '第四条公告', content: '这是一条长的公告，需要仔细的看看' },
    ],
    navList:[//首页导航
      {img:'../../images/index/chenyi@2x.png',text:'洗衣到家'},
      {img:'../../images/index/saozhou@2x.png',text:'保洁到家'},
      { img: '../../images/index/shizhong@2x.png', text: '小时工到家' },
      { img: '../../images/index/chengshi@2x.png', text: '社区服务' }
    ],
    navList1: [//首页导航
      { img: '../../images/index/bossquan_icon_shouye@2x.png', text: 'boss圈' },
      { img: '../../images/index/xiyihaocai_icon_shouye@2x.png', text: '洗衣耗材' },
      { img: '../../images/index/xiyishebei_icon_shouye@2x.png', text: '洗衣设备' },
      { img: '../../images/index/tuwenjiaocheng_icon_shouye@2x.png', text: '图文教程' }
    ],
    quality:[//优质商家
      { img: '../../images/index/bossquan_icon_shouye@2x.png', text: 'boss圈洗衣店' },
      { img: '../../images/index/xiyihaocai_icon_shouye@2x.png', text: '洗衣耗材洗衣店' },
      { img: '../../images/index/xiyishebei_icon_shouye@2x.png', text: '洗衣设备洗衣店' },
      { img: '../../images/index/tuwenjiaocheng_icon_shouye@2x.png', text: '图文教程洗衣店' }
    ],
    navSate:{
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      circular:true,
      indicatorColor:'rgba(0,227,171,1)',
      indicatorActiveColor:'rgba(255,255,255,1);'
    },
    select:"综合排序",
    num:4, //店铺评分相应小星星
    one_1:'',
    two_1:''
  },



  //事件处理函数
  GOShopDetails:function() {
    wx.showModal({
      title:"温馨提示",
      content:'距离超过2km,配送费会根据距离进行适当增加，请谅解',
      cancelText:"再看看",
      cancelColor:"#000000",
      confirmText:"我知道了",
      confirmColor:"#00D4A0",
      success (res) {
        if(res.confirm) {
          wx.navigateTo({
            url: '/pages/shopDetails/shopDetails',
          })
        } else if (res.cancel) {
          console.log("取消按钮")
        }
      }
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tapName(event) {
    console.log(event)
  },
  onShow () {
    console.log(this.route)
  },
  onLoad: function (options) {
    var two = 5 - this.data.num;
    this.setData({
      one_1:this.data.num,
      two_1:5 - this.data.num
    })




    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
