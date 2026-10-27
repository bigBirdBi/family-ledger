Component({
  properties: {
    title: { type: String, value: '' },
    note: { type: String, value: '' },
    date: { type: String, value: '' },
    amountText: { type: String, value: '' },
    type: { type: String, value: 'expense' },
    payerName: { type: String, value: '' },
  },
  methods: {
    onTap() {
      this.triggerEvent('tap')
    },
  },
})
