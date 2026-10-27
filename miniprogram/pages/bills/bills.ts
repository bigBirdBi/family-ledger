import { shanghaiMonth } from '../../utils/date'

Page({
  data: {
    month: '',
    keyword: '',
    loading: false,
    error: '',
    finished: true,
    bills: [] as Array<Record<string, string>>,
  },
  onShow() {
    if (!this.data.month) {
      this.setData({ month: shanghaiMonth() })
    }
  },
  onMonthChange(e: WechatMiniprogram.CustomEvent<{ month: string }>) {
    this.setData({ month: e.detail.month, finished: true })
  },
  onSearch(e: WechatMiniprogram.CustomEvent<{ value: string }>) {
    this.setData({ keyword: (e.detail.value || '').trim() })
  },
  onRetry() {
    this.setData({ error: '' })
  },
})
