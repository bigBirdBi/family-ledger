import { parseYuanToCents, isValidAmountCents } from '../../utils/money'

Component({
  properties: {
    value: { type: String, value: '' },
  },
  data: {
    keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'del'],
  },
  methods: {
    onKey(e: WechatMiniprogram.TouchEvent) {
      const key = e.currentTarget.dataset.key as string
      let next = this.properties.value || ''
      if (key === 'del') {
        next = next.slice(0, -1)
      } else if (key === '.') {
        if (!next) next = '0.'
        else if (!next.includes('.')) next += '.'
      } else if (next === '0') {
        next = key
      } else {
        const [_, fraction = ''] = next.split('.')
        if (next.includes('.') && fraction.length >= 2) return
        next += key
      }
      const cents = parseYuanToCents(next.endsWith('.') ? next.slice(0, -1) : next)
      if (next && !next.endsWith('.') && cents !== null && !isValidAmountCents(cents)) {
        wx.showToast({ title: '金额超出范围', icon: 'none' })
        return
      }
      this.triggerEvent('change', { value: next })
    },
  },
})
