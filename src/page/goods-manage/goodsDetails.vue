<template>
<!-- 商品详情 -->
  <div>
    <Breadcrumb :level-list="breadCrumbList"></Breadcrumb>
    <el-form :model="dataForm" :rules="rules" ref="dataForm" label-width="140px">
      <el-form-item label="商品名称" prop="goodsName">
        <el-input v-model="dataForm.goodsName" placeholder="请输入商品名称" show-word-limit maxlength=12
                  clearable></el-input>
      </el-form-item>
      <el-form-item >
        <el-radio v-model="dataForm.status" label='1' >上架</el-radio>
        <el-radio v-model="dataForm.status" label='0'>下架</el-radio>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      breadCrumbList: [{ title: '商品列表', path: '/goodsList' }, { title: '商品详情' }],
      dataForm:{
        goodsName:'',
        status:1
      },
    }
  },
}
</script>

<style>

</style>
