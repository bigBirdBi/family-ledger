Page({
  data: {
    nickname: '',
    hasAvatar: false,
    inviteCode: '',
    submitting: false,
  },
  onChooseAvatar() {
    this.setData({ hasAvatar: true })
  },
  onNickname(e: WechatMiniprogram.Input) {
    this.setData({ nickname: (e.detail.value || '').trim() })
  },
  onInvite(e: WechatMiniprogram.Input) {
    this.setData({ inviteCode: (e.detail.value || '').replace(/\D/g, '').slice(0, 6) })
  },
  onCreate() {
    if (this.data.submitting) return
    wx.showToast({ title: '创建家庭将在下一阶段开通', icon: 'none' })
  },
  onJoin() {
    if (this.data.submitting) return
    wx.showToast({ title: '加入家庭将在下一阶段开通', icon: 'none' })
  },
})
