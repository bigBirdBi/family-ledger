Component({
  properties: {
    visible: { type: Boolean, value: false },
    title: { type: String, value: '请确认' },
    content: { type: String, value: '' },
    confirmBtn: { type: String, value: '确认' },
    cancelBtn: { type: String, value: '取消' },
  },
  methods: {
    onConfirm() {
      this.triggerEvent('confirm')
    },
    onCancel() {
      this.triggerEvent('cancel')
    },
  },
})
