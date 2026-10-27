import { shanghaiToday } from '../../utils/date'
import { MAX_NOTE_LENGTH } from '../../constants/limits'

Page({
  data: {
    type: 'expense',
    amount: '',
    categoryId: 'food',
    occurredOn: '',
    note: '',
    submitting: false,
    maxNote: MAX_NOTE_LENGTH,
  },
  onLoad() {
    this.setData({ occurredOn: shanghaiToday() })
  },
  onType(e: WechatMiniprogram.TouchEvent) {
    this.setData({ type: e.currentTarget.dataset.type as string })
  },
  onAmount(e: WechatMiniprogram.CustomEvent<{ value: string }>) {
    this.setData({ amount: e.detail.value })
  },
  onCategory(e: WechatMiniprogram.CustomEvent<{ value: string }>) {
    this.setData({ categoryId: e.detail.value })
  },
  onNote(e: WechatMiniprogram.Input) {
    this.setData({ note: (e.detail.value || '').slice(0, MAX_NOTE_LENGTH) })
  },
  onSave() {
    if (this.data.submitting) return
    wx.showToast({ title: '记账接口将在后续里程碑接通', icon: 'none' })
  },
})
