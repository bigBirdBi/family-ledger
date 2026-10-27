import { addMonths, monthLabel } from '../../utils/date'

Component({
  properties: {
    month: { type: String, value: '' },
  },
  data: {
    label: '',
  },
  observers: {
    month(value: string) {
      this.setData({ label: value ? monthLabel(value) : '' })
    },
  },
  methods: {
    onPrev() {
      this.triggerEvent('change', { month: addMonths(this.properties.month, -1) })
    },
    onNext() {
      this.triggerEvent('change', { month: addMonths(this.properties.month, 1) })
    },
  },
})
