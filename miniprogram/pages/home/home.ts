import { shanghaiMonth } from '../../utils/date'
import { formatYuanFromCents } from '../../utils/money'

Page({
  data: {
    month: '',
    incomeText: formatYuanFromCents(0),
    expenseText: formatYuanFromCents(0),
    balanceText: formatYuanFromCents(0),
    budgetSet: false,
    budgetPercent: 0,
    loading: false,
    error: '',
    bills: [] as Array<Record<string, string>>,
  },
  onShow() {
    this.setData({ month: shanghaiMonth() })
  },
  onRecord() {
    wx.navigateTo({ url: '/pages/record/record' })
  },
  onRetry() {
    this.setData({ error: '' })
  },
})
