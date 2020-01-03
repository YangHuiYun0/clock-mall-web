<template>
<!-- 退货原因设置列表 -->
  <div>
    <h4>退货原因设置</h4>
    <el-card>
      <div style="text-align:right">
        <!-- 新增品牌 -->
        <el-button  style="margin-bottom:15px" size="small"
                type="primary"  @click="addCause()">增加退货原因</el-button>
      </div>
      <el-table :data="causeData" v-loading="dataListLoading" ref="eltable" border>
        <el-table-column label="序号"  type="index"  width="50" align="center">
        </el-table-column>
        <el-table-column label="原因类型" align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column label="排序" width="100" align="center">
          <template slot-scope="scope">{{scope.row.sort }}</template>
        </el-table-column>
        <el-table-column label="是否可用" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              @change="handleStatusChange(scope.$index,scope.row)"
              :active-value="1"
              :inactive-value="0">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="添加时间" width="180" align="center">
          <template slot-scope="scope">{{ formatTime(scope.row.createTime)}}</template>
        </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="addCause(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="total, prev, pager, next"
        :current-page=page
        :total=totalList
        :page-size=pageSize
        @current-change="currentChangeHandle">
      </el-pagination>
    </el-card>
     <el-dialog
      title="添加退货原因"
      :visible.sync="dialogVisible" width="30%">
      <el-form :model="returnReason" :rules="rules"
               ref="reasonForm" label-width="150px">
        <el-form-item label="原因类型：" prop="name">
          <el-input v-model="returnReason.name" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="排序：" prop="sort">
          <el-input v-model="returnReason.sort" class="input-width" 
          show-word-limit maxlength=2  clearable></el-input>
        </el-form-item>
        <el-form-item label="是否启用：">
          <el-switch v-model="returnReason.status" :active-value="1" :inactive-value="0"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="cancel">取 消</el-button>
        <el-button type="success" @click="submitForm" :loading="submitLoading" >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { formatTime } from "../../utils/time";
export default {
  data(){
    const sortRequire = (rule, value, callback) => {
      if (!String(this.returnReason.sort).match(/^\+?[1-9]\d*$/)) {
        callback(new Error('请输入大于0的整数'));
      }else{
        callback();
      }
    }
    return{
      page:0,
      totalList:0,
      pageSize:12,
      dataListLoading:false,
      dialogVisible:false,
      submitLoading:false,
      causeData:[],
      returnReason:{
        id:'',
        name:'',
        sort:'',
        status:1,
      },
      rules:{
        name:[
          {required: true, message: '请输入退货原因', trigger: 'blur'},
        ],
        sort:[
          {required: true, message: '请输入排序', trigger: 'blur'},
          {required: true, trigger: 'change', validator: sortRequire }
        ],
      },
    }
  },
  mounted(){
    // this.getDataList('init');
  },
  methods:{
    currentChangeHandle(val){
      this.page = val;
    },
    formatTime(timestmap) {
      return formatTime(timestmap, 'YY-MM-DD hh:mm:ss');
    },
    getDataList(type){
      if(type === 'init'){
        this.page = 0;
      }
      this.dataListLoading = true;
      const that = this;
      getCauseList({
        page:that.page,
        size:that.pageSize,
      }).then(res=>{
        if(res && res.code === 200){
          that.orderData = res.data.rows;
          that.totalList = res.data.total;
        }else{
          that.$message.error(res.msg);
        }
        that.dataListLoading = false;
      }).catch(err=>{
        that.dataListLoading = false;
      })
    },
    // 修改是否可用状态
    handleStatusChange(index,row){

    },
    //删除原因
    handleDelete(index, row){
       const that = this;
      this.$confirm(`确定对「 ${row.name} 」进行「 删除 」操作?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delCause(id).then(res=>{
          if(res && res.code === 200){
            that.$message.success(`删除退货原因 ${row.name} 成功`);
            that.causeData.splice(index, 1);
            that.totalList--;
          }else{
            that.$message.error(res.msg)
          }
        })
      }).catch(()=>{});
    },
    // 增加-修改退货原因
    addCause(index, row){
      if(row){
        this.returnReason = row;
      }
      this.dialogVisible = true;
    },
    //关闭弹窗
    cancel(){
      dialogVisible = false;
      this.returnReason = {};
    },
    // 保存弹窗内容
    submitForm(){
      const that = this;
      that.$refs.returnReason.validate(valid => {
        if (!valid) {
          this.$message.error('请填写完整再保存');
          return false;
        }
        that.submitLoading = true;
        const submitFun = that.returnReason.id ? editCause : addCause;
        submitFun(that.returnReason.id,that.returnReason).then(res=>{
          console.log('res:',res);
          if(res && res.code === 200){
            that.$message.success(that.returnReason.id ? '修改成功' : '保存成功');
            that.dialogVisible = false;
          }else{
            that.$message.error(res.msg)
          }
          that.submitLoading = false;
        }).catch(err=>{
          that.$message.error(err)
          that.submitLoading = false;
        })
      });
    },
  }
}
</script>

<style>

</style>
