<template>
  <t-aside :width="width">
    <t-menu theme="light" :collapsed="collapsed" @change="changeMenu">
      <t-menu-item value="Dashboard">
        <template #icon>
          <t-icon name="dashboard" />
        </template>
        仪表盘
      </t-menu-item>

      <t-submenu value="Device">
        <template #icon>
          <t-icon name="layers" />
        </template>
        <template #title>
          <span>设备管理</span>
        </template>
        <t-menu-item value="DeviceList"> 设备列表 </t-menu-item>
        <t-menu-item value="DeviceCategory"> 设备目录 </t-menu-item>
      </t-submenu>

      <t-submenu value="Platform">
        <template #icon>
          <t-icon name="template" />
        </template>
        <template #title>
          <span>平台管理</span>
        </template>
        <t-menu-item value="PlatformCascade"> 国标级联 </t-menu-item>
        <t-menu-item value="PlatformCurrent"> 本级管理 </t-menu-item>
      </t-submenu>

      <t-submenu value="Maintenance">
        <template #icon>
          <t-icon name="setting" />
        </template>
        <template #title>
          <span>运维选项</span>
        </template>
        <t-menu-item value="MaintenanceStream"> 流信息 </t-menu-item>
        <t-menu-item value="MaintenanceLog"> 日志管理 </t-menu-item>
      </t-submenu>
    </t-menu>
    <div class="collapsed-button" @click="changeCollapsed">
      <t-icon :name="collapsed ? 'chevron-right' : 'chevron-left'" size="24" color="#bebebe" class="relative -left-[22px] top-[10px]" />
    </div>
  </t-aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 侧边栏折叠
const width = ref('232px')
const collapsed = ref(false)
const changeCollapsed = () => {
  width.value = collapsed.value ? '232px' : '64px'
  collapsed.value = !collapsed.value
}

// 菜单切换
const router = useRouter()
const changeMenu = (value) => {
  router.push({ name: value })
}
</script>

<style scoped>
.collapsed-button {
  width: 0;
  height: 64px;
  position: absolute;
  top: calc(50% - 32px);
  right: -27px;
  z-index: 99;
  border: 9px solid transparent;
  border-left: 20px solid #ffffff;
  cursor: pointer;
  color: #ffffff;
  transition: right 0.1s ease-in-out, border 0.1s ease;
}
</style>
