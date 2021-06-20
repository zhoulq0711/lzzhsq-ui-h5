<template>
  <div class="box">
      <van-steps :active="active" active-color='#6AA8F5'>
        <van-step>填写暂(居)住信息</van-step>
        <van-step>个人信息</van-step>
        <van-step>提交证明材料</van-step>
        </van-steps>
        <div class="title_nav">
            <i></i>
            提交证明材料
            <em>（*号为必填项）</em>
        </div>
         <div class="upload_pic">
            <div class="h2"><h2>上传车辆照片<em>*</em><i class="sm">查看说明</i></h2><div class="num">{{num}}/2</div></div>
            <div class="upbox">
                <van-uploader v-model="fileList" multiple :max-count="1" upload-text="上传车辆照片"/>
                <van-uploader v-model="fileList1" multiple :max-count="1" upload-text="上传车辆照片"/>
            </div>
        </div>
         <div class="upload_pic">
            <div class="h2"><h2>上传车辆照片<em>*</em><i class="sm">查看说明</i></h2><div class="num">{{num1}}/2</div></div>
            <div class="upbox">
                <van-uploader v-model="fileList2" multiple :max-count="1" upload-text="上传车辆照片"/>
                <van-uploader v-model="fileList3" multiple :max-count="1" upload-text="上传车辆照片"/>
            </div>
        </div>
         <div class="upload_pic">
            <div class="h2"><h2>上传车辆照片<em>*</em><i class="sm">查看说明</i></h2><div class="num">{{num2}}/1</div></div>
            <div class="upbox">
                <van-uploader v-model="fileList4" multiple :max-count="1" upload-text="上传车辆照片"/>
            </div>
        </div>
         <div style="margin: 16px">
          <van-button block type="info" native-type="submit">确认</van-button>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            active:2,
            fileList:[],
            fileList1:[],
            fileList2:[],
            fileList3:[],
            fileList4:[],
            num:0,
            num1:0,
            num2:0
        }
    },
      watch:{
    fileList(val,oldval){
       if(val.length == 0){
          this.num--
       }else{
          this.num++
       }
    },
    fileList1(val,oldval){
      if(val.length == 0){
          this.num--
       }else{
          this.num++
       }
    },
    fileList2(val,oldval){
      if(val.length == 0){
          this.num1--
       }else{
          this.num1++
       }
    },
    fileList3(val,oldval){
      if(val.length == 0){
          this.num1--
       }else{
          this.num1++
       }
    }
  },
}
</script>

<style lang="scss" scoped>
.van-nav-bar{z-index: 999;}
.upbox{display: flex;}
.upload_pic{ border-bottom: solid 1px #E8E8E8;}
.upload_pic em{color: #ee0a24;}
.num{margin-left:auto;font-size: 24px;}
.van-uploader__upload,.van-uploader__preview-image{ width: 250px; height: 203px; overflow: hidden;}
.van-uploader__upload-text{ width: 200px; text-align: center;}
.tip{ width: 100%; height:80px; line-height:80px; text-align: center; font-size: 26px; color:#FF8800}
.upload_pic{background: #fff; padding:30px; box-sizing: border-box;}
.upload_pic h2{font-size: 26px; color: #999; margin-bottom:15px}
.upload_pic .sm{ width: 100px; height: 36px; color:#fff;font-size: 22px; display: inline-block; text-align: center; line-height: 36px; background: #1F82FF; margin-left:10px}
.upload_pic .h2{display: flex;}
.upbox{margin-top:20px}
</style>