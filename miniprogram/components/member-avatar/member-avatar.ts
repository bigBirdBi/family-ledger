Component({
  properties: {
    src: { type: String, value: '' },
    name: { type: String, value: '' },
    size: { type: Number, value: 72 },
  },
  data: {
    letter: '家',
  },
  observers: {
    name(value: string) {
      const text = (value || '家').trim()
      this.setData({ letter: text.slice(0, 1) })
    },
  },
})
