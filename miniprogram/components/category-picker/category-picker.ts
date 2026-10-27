import { CATEGORY_IDS, CATEGORY_LABELS, CategoryId } from '../../constants/categories'

Component({
  properties: {
    value: { type: String, value: 'food' },
  },
  data: {
    items: CATEGORY_IDS.map((id) => ({ id, label: CATEGORY_LABELS[id] })),
  },
  methods: {
    onSelect(e: WechatMiniprogram.TouchEvent) {
      const id = e.currentTarget.dataset.id as CategoryId
      this.triggerEvent('change', { value: id })
    },
  },
})
