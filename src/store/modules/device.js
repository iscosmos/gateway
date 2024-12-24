import { defineStore } from 'pinia'
import { listPlatformCodeReq, listDevicesReq, deviceDetailReq } from '@/api/device'

export const useDeviceStore = defineStore('Device', () => {
  // 平台编码列表
  // 设备列表
  const listPlatformCode = async () => {
    const result = await listPlatformCodeReq()
    if (result.code != 0) {
      return Promise.reject(new Error(result.msg))
    } else {
      return result.data
    }
  }

  // 设备列表
  const listDevices = async (data) => {
    const result = await listDevicesReq(data)
    if (result.code != 0) {
      return Promise.reject(new Error(result.msg))
    } else {
      return result.data
    }
  }

  // 设备详情
  const deviceDetail = async (data) => {
    const result = await deviceDetailReq(data)
    if (result.code != 0) {
      return Promise.reject(new Error(result.msg))
    } else {
      return result.data
    }
  }

  return {
    listPlatformCode,
    listDevices,
    deviceDetail,
  }
})
