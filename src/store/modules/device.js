import { defineStore } from 'pinia'
import { listDevicesReq } from '@/api/device'

export const useDeviceStore = defineStore('Device', () => {
  // 设备列表
  const listDevices = async (data) => {
    const result = await listDevicesReq(data)
    if (result.code != 0) {
      return Promise.reject(new Error(result.msg))
    } else {
      return result.data
    }
  }

  return {
    listDevices,
  }
})
