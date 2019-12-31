<template>
<!-- 商品详情 -->
  <div>
    <Breadcrumb :level-list="breadCrumbList"></Breadcrumb>
    <el-card>
      <el-form :model="dataForm" :rules="rules" ref="dataForm" label-width="140px">
        <el-form-item label="商品名称:" prop="goodsName">
          <el-input v-model="dataForm.goodsName" placeholder="请输入商品名称" show-word-limit maxlength=12
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="状态:">
          <el-radio v-model="dataForm.status" :label=1 >上架</el-radio>
          <el-radio v-model="dataForm.status" :label=0>下架</el-radio>
        </el-form-item>
        <el-form-item label="商品类别:" >
          <el-select v-model="dataForm.categoryCode" clearable placeholder="请选择商品类别" style="width:400px">
            <el-option
              v-for="item in goodsTypeList"
              :key="item.id"
              :label="item.categoryName"
              :value="item.categoryCode">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="简介描述:" prop="goodsDesc">
          <el-input v-model="dataForm.goodsDesc" placeholder="请输入商品简介描述" show-word-limit maxlength=50
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="商品展示价格:" prop="goodsPrice">
          <el-input v-model="dataForm.goodsPrice" placeholder="请输入商品价格" show-word-limit maxlength=50
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="库存数量:" prop="goodsInventory">
          <el-input v-model="dataForm.goodsInventory" placeholder="请输入商品库存" show-word-limit maxlength=50
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="商品图片:" prop="goodsUrl">
          <el-upload
              class="avatar-uploader"
              action ='auto'
              :show-file-list="false"
              :on-success="handlePlaySuccess"
              :before-upload="beforePlayUpload"
              :auto-upload="false">
              <img v-if="dataForm.goodsUrl" :src="dataForm.goodsUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span class="tips"> 建议尺寸</span>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      breadCrumbList: [{ title: '商品列表', path: '/goodsList' }, { title: '商品详情' }],
      dataForm:{
        goodsName:'',
        status:1,
        goodsUrl:'',
        goodsDesc:'',
        goodsPrice:'',
      },
    }
  },
  methods:{
    handlePlaySuccess(res, file) {
      this.dataForm.goodsUrl = res.file;
    },
    beforePlayUpload(file) {
      const isJPG = file.type === 'image/jpeg' ||  file.type === 'image/png' ;
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
      this.$message.error('上传头像图片只能是 JPG/png 格式!');
      }
      if (!isLt2M) {
      this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
      //上传到后端
    uploadImg(param){
      console.log("jjjj",param);
      this.beforePlayUpload(param.file);
      this.handlePlaySuccess();
      // this.imageToBase64(param);
    },

    imageToBase64 (param) {
      var reader = new FileReader()
      reader.readAsDataURL(param.file)
      reader.onload = () => {
        uploadBase64Img({
          context: reader.result
        }).then(res => {
          this.handlePlaySuccess(res);
        }, err => {
          console.log(err);
        }).catch(err => {
          console.log(err);
        });
      }
      reader.onerror = function (error) {
        console.log('Error: ', error);
      }
    },
  }
}
</script>

<style lang='scss' >
  .tip {
    color: #999999;
    font-size: 12px;
  }
  .el-upload {
    border:1px dashed #8c939d;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
