<template>
  <div>
    <h4 id="page-title">我的首页</h4>
    <el-card>
      <div class="row">
        <el-row>
          <el-col :span="12" v-for="(item, index) in dataList" :key="index">
             <div class="data-item">
              <div class="icon-title"
                :class="`icon-title title${item.type}`">
                <i :class="{
                  'el-icon-user-solid':item.type === 1,
                  'el-icon-s-goods':item.type === 2,
                  'el-icon-shopping-cart-full':item.type === 3,
                  'el-icon-s-data':item.type === 4,
                }" ></i> 
              </div>
              <div class="value">
                <h1 class="count">{{item.dataNum}}</h1>
                <p>{{item.dataName}}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dataList:[
        {type:1,dataNum:1334,dataName:'用户总数'},
        {type:2,dataNum:2334,dataName:'商品总数'},
        {type:3,dataNum:3334,dataName:'订单总数'},
        {type:4,dataNum:4334,dataName:'浏览量'},
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
  .row{
    padding: -15px 0;
  }
  .data-item{
    margin: 0 15px 20px;
    border: 1px solid #f1f2f7;
    height: 101px;
    display: flex;
    .icon-title{
      background: #6ccac9;
      width: 35%;
      padding: 15px 15px;
      border-radius: 4px 0px 0px 4px;
      color: #fff;
      font-size: 54px;
      text-align: center;
    } 
    .title1{
      background: #6ccac9;
    }
    .title2{
      background: #ff6c60;
    }
    .title3{
      background: #f8d347;
    }
    .title4{
      background: #6ccac9;
    }
    .value{
      text-align: center;
      width: 63%;
      margin-top: 14px;
      .count{
        margin: 0;
        padding: 0;
        color: #c6cad6;
      }
      p{
        margin: 0;
        padding: 0;
        color: #c6cad6;
      }
    }
  }
</style>>

