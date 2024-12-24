<template>
  <t-dialog :header="data.name" :footer="false" width="40%" v-model:visible="dialogVisible">
    <t-descriptions>
      <t-descriptions-item label="设备编码">{{ data.code }}</t-descriptions-item>
      <t-descriptions-item label="负责人">{{ data.owner }}</t-descriptions-item>
      <t-descriptions-item label="设备名称">{{ data.name }}</t-descriptions-item>
      <t-descriptions-item label="通道数">{{ data.channel }}</t-descriptions-item>
      <t-descriptions-item label="制造商">{{ data.manufacturer }}</t-descriptions-item>
      <t-descriptions-item label="设备类型">{{ data.type }}</t-descriptions-item>
      <t-descriptions-item label="品牌">{{ data.model }}</t-descriptions-item>
      <t-descriptions-item label="所属平台">{{ data.platform }}</t-descriptions-item>
      <t-descriptions-item label="固件版本">{{ data.firmware }}</t-descriptions-item>
      <t-descriptions-item label="父级编码">{{ data.parent }}</t-descriptions-item>
      <t-descriptions-item label="位置">{{ data.address }}</t-descriptions-item>
      <t-descriptions-item label="摄像头类型">{{ data.ptz_type }}</t-descriptions-item>
      <t-descriptions-item label="经度">{{ data.longitude }}</t-descriptions-item>
      <t-descriptions-item label="纬度">{{ data.latitude }}</t-descriptions-item>
      <t-descriptions-item label="IP地址">{{ data.ip }}</t-descriptions-item>
      <t-descriptions-item label="所属行政区">{{ data.civil }}</t-descriptions-item>
      <t-descriptions-item label="设备状态">{{ data.status }}</t-descriptions-item>
      <t-descriptions-item label="是否在线">{{ data.online }}</t-descriptions-item>
      <t-descriptions-item label="RTSP地址">{{ data.rtsp_url }}</t-descriptions-item>
      <t-descriptions-item label="HTTP地址">{{ data.play_url }}</t-descriptions-item>
    </t-descriptions>
    <div class="text-center mt-3">
      <t-button>设备同步</t-button>
    </div>
  </t-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useDeviceStore } from '@/store'
import { MessagePlugin } from 'tdesign-vue-next'

const deviceStore = useDeviceStore()

const dialogVisible = ref(false)

const data = ref({})
const openDialog = async (value) => {
  try {
    const result = await deviceStore.deviceDetail({ code: value.code })
    data.value = result.data
  } catch (error) {
    MessagePlugin.error(error.message)
  }
  dialogVisible.value = true
}

defineExpose({ openDialog })
</script>

<style scoped></style>
