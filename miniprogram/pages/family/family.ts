Page({
  data: {
    familyName: '',
    roleLabel: '',
    members: [] as Array<{ openid: string; name: string; src: string }>,
    confirmVisible: false,
    confirmTitle: '',
    confirmContent: '',
  },
  onInvite() {
    wx.showToast({ title: '邀请将在下一阶段开通', icon: 'none' })
  },
  onLeave() {
    this.setData({
      confirmVisible: true,
      confirmTitle: '退出家庭',
      confirmContent: '退出后将无法继续查看这本账本。管理员需先转让或解散。',
    })
  },
  onConfirm() {
    this.setData({ confirmVisible: false })
  },
  onCancel() {
    this.setData({ confirmVisible: false })
  },
})
