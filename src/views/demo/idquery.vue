<template>
  <div class="box">
    <div class="querybox">
      <div class="title">
        <span class="titicon"></span>
        <span class="tittxt">输入信息</span>
      </div>
      <van-form class="form">
        <van-field
          v-model="idno"
          name="身份证号码"
          label="身份证号码"
          placeholder="请输入您的身份证号码"
        />
        <van-field
          v-model="phone"
          name="办理单位"
          label="办理单位"
          placeholder="请输入您的办理单位"
        />

        <div style="margin: 16px">
          <van-button block type="info" native-type="submit">查询</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      idno: "",
      phone: "",
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.querybox {
  .title {
    height: 82px;
    display: flex;
    align-items: center;
    padding-left: 32px;
    .titicon {
      width: 10px;
      height: 28px;
      background: linear-gradient(0deg, #0c62cd, #6aa8f5);
      border-radius: 4px;
      margin-right: 20px;
    }
    .tittxt {
      font-size: 30px;
      color: #1e7df3;
    }
  }
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
      .remind {
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