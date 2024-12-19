<template>
  <t-header>
    <t-head-menu theme="dark">
      <!-- Logo -->
      <template #logo>
        <img :src="LogoImage" class="w-[210px] ml-[12px]" alt="Logo" />
      </template>

      <!-- 操作栏 -->
      <template #operations>
        <t-space class="t-demo-menu--dark" :size="4">
          <!-- 通知 -->
          <t-popup show-arrow expand-animation placement="bottom-right">
            <!-- 通知红点 -->
            <t-badge shape="circle" count="2" size="small" :offset="[4, 4]">
              <t-button variant="text" shape="square">
                <template #icon><t-icon name="notification" /></template>
              </t-button>
            </t-badge>

            <!-- 通知内容 -->
            <template #content>
              <t-card title="告警通知" :bordered="false" header-bordered :style="{ width: '400px' }">
                <template #content> 暂无消息 </template>
                <template #actions>
                  <a href="javascript:void(0)" @click="clickHandler">清除</a>
                </template>
              </t-card>
            </template>
          </t-popup>

          <!-- 账号 -->
          <t-dropdown :min-column-width="220">
            <t-button variant="text">
              <template #icon><t-icon name="user-transmit" /></template>
              超级管理员
            </t-button>
            <!-- 头像信息 -->
            <template #panelTopContent>
              <div class="w-full flex flex-col items-center justify-center bg-gray-100 py-3">
                <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg" size="48px" />
                <h1 class="mt-1 text-gray-500">18964780700</h1>
              </div>
            </template>
            <!-- 下拉菜单 -->
            <t-dropdown-menu>
              <!-- 个人信息 -->
              <t-dropdown-item value="1" class="pl-15 py-2">
                <template #prefixIcon>
                  <UserIcon />
                </template>
                个人信息
              </t-dropdown-item>

              <!-- 修改密码 -->
              <t-dropdown-item value="2" class="pl-15 py-2">
                <template #prefixIcon>
                  <ToolsIcon />
                </template>
                修改密码
              </t-dropdown-item>

              <!-- 退出登录 -->
              <t-dropdown-item value="3" class="pl-15 py-2" @click="logout">
                <template #prefixIcon>
                  <LogoutIcon />
                </template>
                退出登录
              </t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown>
        </t-space>
      </template>
    </t-head-menu>
  </t-header>
</template>

<script setup>
import LogoImage from '@/assets/images/logo.png'
import { UserIcon, ToolsIcon, LogoutIcon } from 'tdesign-icons-vue-next'
import { MessagePlugin } from 'tdesign-vue-next'

const logout = () => {
  MessagePlugin.error('退出登录')
}
</script>

<style scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}
.t-demo-menu--dark {
  .t-button {
    color: #fff;
    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
