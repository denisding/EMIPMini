//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    // 未读数存储
    toDoCount: {
      ownTask: 12,
      shareTask: 0,
      approvedTask: 0,
      myApplicationTask: 0,
    },
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({
      success: function (res) {
        // she
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });

    /**
     * 设置未读数
     */
    wx.setTabBarBadge({
      index: 1,
      text: (this.data.toDoCount.ownTask + this.data.toDoCount.shareTask).toString()
    });
  },

  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})
