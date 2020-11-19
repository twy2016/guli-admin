<template>
  <div class="app-container">
    讲师列表
    <el-table
      v-loading="loading"
      :data="list"
      element-loading-text="数据加载中"
      border
      fit
      highlight-current-row>
      <el-table-column
        label="序号"
        width="70"
        align="center">
        <template slot-scope="scope">
          {{ (current - 1) * size + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="name" label="名称" width="80"/>

      <el-table-column label="头衔" width="80">
        <template slot-scope="scope">
          {{ scope.row.level===1?'高级讲师':'首席讲师' }}
        </template>
      </el-table-column>

      <el-table-column prop="intro" label="资历"/>

      <el-table-column prop="gmtCreate" label="添加时间" width="160"/>

      <el-table-column prop="sort" label="排序" width="60"/>

      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <router-link :to="'/edu/teacher/edit/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
          </router-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="getList"
      :current-page="current"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="size"
      style="padding: 30px 0; text-align: right;"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import teacher from '@/api/edu/teacher'

  export default {
    data() {
      return {
        current: 1,
        size: 20,
        total: 0,
        searchObj: {},
        list: null
      }
    },
    created() {
      this.getList()
    },
    methods: {
      handleSizeChange(size = 20) {
        this.size = size
        teacher.getPageList(this.current, this.size, this.searchObj)
          .then(response => {
            console.log(response)
            this.list = response.data.records
            this.total = response.data.total
          })
          .catch(error => {
            console.log(error)
          })
      },
      getList(current = 1) {
        this.current = current
        teacher.getPageList(this.current, this.size, this.searchObj)
          .then(response => {
            console.log(response)
            this.list = response.data.records
            this.total = response.data.total
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    loading: true
  }
</script>

<style scoped>

</style>
