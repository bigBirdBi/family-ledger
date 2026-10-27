import { CLOUD_ENV_ID } from './config/env'

App({
  globalData: {},
  onLaunch() {
    if (!wx.cloud) {
      console.error(JSON.stringify({ code: 'INTERNAL', reason: 'cloud-sdk-missing' }))
      return
    }
    try {
      wx.cloud.init({
        env: CLOUD_ENV_ID,
        traceUser: true,
      })
    } catch (error) {
      console.warn(JSON.stringify({ code: 'INTERNAL', reason: 'cloud-init-failed', detail: String(error) }))
    }
  },
})
