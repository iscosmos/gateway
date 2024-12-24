import request from '@/utils/request'

// 平台编码列表
export const listPlatformCodeReq = () => request.get('/device/platforms')

// 设备列表
export const listDevicesReq = (data) => request.get('/device/all', { params: data })
