import { shanghaiMonth } from '../../utils/date'

Page({
  data: {
    month: '',
    error: '',
    categories: [] as Array<{ label: string; percent: number }>,
    members: [] as Array<{ name: string; amountText: string }>,
    trend: [] as Array<{ month: string; height: number }>,
    budgetSet: false,
    budgetPercent: 0,
  },
  onShow() {
    if (!this.data.month) {
      this.setData({ month: shanghaiMonth() })
    }
  },
  onMonthChange(e: WechatMiniprogram.CustomEvent<{ month: string }>) {
    this.setData({ month: e.detail.month })
  },
  onRetry() {
    this.setData({ error: '' })
  },
})
