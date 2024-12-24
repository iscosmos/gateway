<template>
  <t-card :bordered="false" header-bordered class="min-h-full">
    <!-- 卡片标题 -->
    <template #title> 设备列表 </template>

    <!-- 表格操作工具条 -->
    <t-space>
      <t-select placeholder="请选择所属平台" v-model="platformCode" :options="devicePlatformCode" @change="changeDevicePlatformCode"> </t-select>

      <t-input placeholder="设备名称/制造商/设备类型" class="min-w-[230px]" v-model="name" clearable>
        <template #prefixIcon>
          <search-icon />
        </template>
      </t-input>

      <t-button @click="filter">过滤</t-button>
    </t-space>

    <!-- 表格 -->
    <t-table row-key="code" :data="data" :columns="columns" :pagination="pagination" @page-change="onPageChange" class="mt-4">
      <!-- 状态 -->
      <template #online="{ row, index }">
        <t-tag v-if="row.online == 0" theme="warning" variant="light">离线</t-tag>
        <t-tag v-else-if="row.online == 1" theme="success" variant="light">在线</t-tag>
      </template>

      <!-- 设备类型 -->
      <template #type="{ row, index }">
        <t-tag theme="primary" variant="light">{{ row.type }}</t-tag>
      </template>

      <!-- 操作按钮 -->
      <template #operate="{ row, col }">
        <t-space size="0">
          <!-- 详情按钮 -->
          <t-link theme="primary">详情</t-link>
          <t-divider layout="vertical" />
          <!-- 编辑按钮 -->
          <t-link theme="primary">播放</t-link>
          <t-divider layout="vertical" />
          <!-- 删除按钮 -->
          <t-popconfirm theme="danger" content="确认删除吗">
            <t-link theme="primary">删除</t-link>
          </t-popconfirm>
        </t-space>
      </template>
    </t-table>
  </t-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { SearchIcon } from 'tdesign-icons-vue-next'
import { useDeviceStore } from '@/store'

const deviceStore = useDeviceStore()

// 筛选条件
const platformCode = ref('')
const name = ref('')

// 过滤
const filter = async () => {
  console.log(`==>${platformCode.value} ${name.value}`)

  await fetchTableData({
    current: pagination.value.current || pagination.value.defaultCurrent,
    pageSize: pagination.value.pageSize || pagination.value.defaultPageSize,
  })
}

// 表格分页
const onPageChange = async (pageInfo) => {
  // 根据分页信息远程加载表格数据
  await fetchTableData(pageInfo)
}

// 查询表格数据
const fetchTableData = async (pageInfo) => {
  try {
    loading.value = true

    const { current, pageSize } = pageInfo
    const result = await deviceStore.listDevices({
      page: current,
      pageSize: pageSize,
      platformCode: platformCode.value,
      name: name.value,
    })
    console.log(result)

    if (result.list != null) {
      data.value = [...result.list]
      pagination.value.total = result.total
    } else {
      data.value = []
      pagination.value.total = 0
    }
  } catch (error) {
    MessagePlugin.error(error.message)
  }
  loading.value = false
}

// 表格定义
const data = ref([])
const loading = ref(false)
const pagination = ref({ defaultCurrent: 1, defaultPageSize: 10, total: 0 })
const columns = ref([
  { colKey: 'code', title: '设备编码' },
  { colKey: 'name', title: '设备名称' },
  { colKey: 'status', title: '设备状态' },
  { colKey: 'type', title: '设备类型' },
  { colKey: 'manufacturer', title: '制造商' },
  { colKey: 'platform', title: '所属平台' },
  { colKey: 'operate', title: '操作', width: 210 },
])

// 初始化查询
onMounted(async () => {
  await fetchTableData({
    current: pagination.value.current || pagination.value.defaultCurrent,
    pageSize: pagination.value.pageSize || pagination.value.defaultPageSize,
  })
})

// 查询平台
const devicePlatformCode = ref([])
onMounted(async () => {
  try {
    const result = await deviceStore.listPlatformCode()
    console.log(result)
    result.list.forEach((item) => {
      devicePlatformCode.value.push({ label: `${item.name}(${item.code})`, value: item.code })
    })
  } catch (error) {
    MessagePlugin.error(error.message)
  }
})
</script>

<style scoped></style>
