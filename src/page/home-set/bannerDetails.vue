<template>
<!-- 轮播页详情 -->
  <div>
      <el-card>
          <el-form :model="dataForm" :rules="rules" ref="dataForm" label-width="140px">
                <el-form-item label="轮播图名称" prop="bannerName">
                    <el-input v-model="dataForm.bannerName" placeholder="请输入轮播图名称" show-word-limit 
                    maxlength=12  clearable style="width:400px"></el-input>
                </el-form-item>
                <el-form-item label="排序" prop="sort">
                    <el-input v-model="dataForm.sort" placeholder="请输入排序" show-word-limit 
                    maxlength=9  clearable style="width:400px"></el-input>
                </el-form-item>
        </el-form>
      </el-card>
      
  </div>
</template>

<script>
export default {
    data(){
        const sortRequire = (rule, value, callback) => {
            if (!String(this.dataForm.sort).match(/^\+?[1-9]\d*$/)) {
                callback(new Error('请输入大于0的整数'));
            }else{
                callback();
            }
        }
       return{
           submitLoading:false,
           dataForm:{
               bannerName:'',
               bannerUrl:'',
               sort:'',
           },
           rules:{
               bannerName:[
                   { required: true, message: '请输入轮播图名称', trigger: 'blur' },
               ],
               sort:[
                   { required: true, message: '请输入轮播图排序', trigger: 'blur' },
                   { required: true, trigger: 'change', validator: sortRequire }
               ],
           },
           
       } 
    },
}

</script>
<style lang='scss' scoped>
</style>