<template>
  <t-layout class="h-full">
    <!-- 顶部导航 -->
    <Header />
    <t-layout>
      <!-- 侧边导航 -->
      <Aside />
      <!-- 内容区域 -->
      <t-content class="px-6 py-4">
        <!-- 子路由出口 -->
        <RouterView />
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script setup>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
</script>

<style scoped></style>
