import request from '@/utils/request'

// 设备列表
export const listDevicesReq = (data) => request.get('/device/all', { params: data })
