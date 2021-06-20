<template>
  <div class="box">
      <div class="tip">
          注：'*'号为必填项
      </div>
      <div class="formbox">
      <van-form class="form">
        <van-field
          v-model="username"
          name="姓名"
          label="姓名"
          required
          placeholder="请输入您的姓名"
          :rules="[{ required: true, message: '请输入您的姓名' }]"
        />
        <van-field
          v-model="phone"
          required
          type="phone"
          name="手机号码"
          label="手机号码"
          placeholder="请输入您的手机号码"
          :rules="[{ required: true, message: '请输入您的手机号码' }]"
        />
        <van-field
          readonly
          clickable
          name="picker"
          :value="value1"
          label="地址类型"
          placeholder="点击选择城市"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm1"
            @cancel="showPicker = false"
          />
        </van-popup>
        <van-field
          v-model="email"
          type="phone"
          name="邮政编码"
          label="邮政编码"
          placeholder="请输入您的邮政编码"
          :rules="[{ required: true, message: '请输入邮政编码' }]"
        />

        <van-field
          readonly
          clickable
          name="area"
          :value="value2"
          label="地区选择"
          placeholder="点击选择省市区"
          required
          @click="showArea = true"
        />
        <van-popup v-model="showArea" position="bottom">
          <van-area
            :area-list="areaList"
            @confirm="onConfirm2"
            @cancel="showArea = false"
          />
        </van-popup>
        <van-field
          v-model="address"
          type="address"
          name="详细地址"
          label="详细地址"
          placeholder="请输入详细地址"
          :rules="[{ required: true, message: '请输入详细地址' }]"
          class="richinput"
           required
        >
          <template #input>
            <van-field
              v-model="address"
              type="address"
              name="详细地址"
              placeholder="请输入详细地址"
            >
            </van-field>
            <div class="remind">输入街道、楼栋等</div>
          </template>
        </van-field>
        <div class="upload_pic">
            <div class="h2"><h2>上传房屋租赁合同<em>*</em><i class="sm">查看说明</i></h2><div class="num">{{num}}/2</div></div>
            <div class="upbox">
                <van-uploader v-model="fileList" multiple :max-count="1" upload-text="添加房屋租赁合同"/>
                <van-uploader v-model="fileList1" multiple :max-count="1" upload-text="添加购房合同或者房屋出租人"/>
            </div>
        </div>
        <div class="upload_pic">
            <div class="h2"><h2>本人居住证正反面<em>*</em><i class="sm">查看说明</i></h2><div class="num">{{num1}}/2</div></div>
            <div class="upbox">
                <van-uploader v-model="fileList2" multiple :max-count="1" upload-text="添加居住证正面"/>
                <van-uploader v-model="fileList3" multiple :max-count="1" upload-text="添加居住证反面"/>
            </div>
        </div>
        <div style="margin: 16px">
          <van-button block type="info" native-type="submit">确认</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {

data() {
    return {
      fileList:[],
      fileList1:[],
      fileList2:[],
      fileList3:[],
      num:0,
      num1:0,
      username: "",
      phone: "",
      email: "",
      address: "",
      //   单个选择器
      value1: "",
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      showPicker: false,
      //地区选择器
      value2: "",
      showArea: false,
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
          // ....
        },
      },
    };
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
  methods: {
    onConfirm1(value) {
      this.value1 = value;
      this.showPicker = false;
    },

    onConfirm2(values) {
      this.value2 = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },
  }
}
</script>

<style lang="scss" scoped>
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
.formbox{
  .form {
    .van-field__label {
      margin-right: 0;
      color: #666;
    }
    .van-field__control::placeholder {
      color: #333;
    }
    .richinput {
      .van-cell {
        height: 100px !important;
        padding-left: 0;
        padding-top: 0;
      }
      .remind{
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 20px;
          color: #aaa;
      }
      .van-cell::after {
        border: 0 !important;
      }
    }
  }
}
</style>