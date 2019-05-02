Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },
  /**
   * 组件的初始数据
   */
  data: {
    taskList: [
      {
        logoColor: 'red',
        logoName: '报销',
        title: '丁竹的报销申请',
        position: '丁竹/研发组',
        description: '金额：20.12 原因：',
        date: '10月31日 11:39'
      },
      {
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoColor: '',
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoColor: '#dd45dd',
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoColor: '',
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoColor: '#dd45dd',
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoColor: '',
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoColor: '#dd45dd',
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoColor: '',
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoColor: '#dd45dd',
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoColor: '',
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      },
      {
        logoColor: '#dd45dd',
        logoName: '出差',
        title: '丁竹的出差申请',
        position: '丁竹/研发组',
        description: '',
        date: '10月29日 18:23'
      }
    ],
    nomore: false
  },
  /**
   * 自定义方法
   */
  methods: {
    /**
     * 滚动条事件
     */
    _onScroll: function (e) {
      //console.log(e);
    },
    /**
     * 下拉刷新监听函数
     */
    _onPullDownRefresh: function () {
      setTimeout(() => {
        const taskList = [
          {
            logoColor: 'red',
            logoName: '报销',
            title: '丁竹的报销申请',
            position: '丁竹/研发组',
            description: '金额：20.12 原因：',
            date: '10月31日 11:39'
          },
          {
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoColor: '',
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoColor: '#dd45dd',
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoColor: '',
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoColor: '#dd45dd',
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoColor: '',
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoColor: '#dd45dd',
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoColor: '',
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoColor: '#dd45dd',
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoColor: '',
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          },
          {
            logoColor: '#dd45dd',
            logoName: '出差',
            title: '丁竹的出差申请',
            position: '丁竹/研发组',
            description: '',
            date: '10月29日 18:23'
          }
        ];
        this.setData({
          taskList: taskList,
          refreshing: false,
        });
      }, 500);
    },
    /**
     * 加载更多监听函数
     */
    _onLoadmore: function () {
      setTimeout(() => {
        this.setData({ nomore: true });
      }, 500);
    },
  }
})