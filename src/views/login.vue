<template>
  <div class="loginbox">
    <!-- <van-image :src="mysrc" class="yzm" /> -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
      />
      <!-- <van-field v-model="code" name="code" label="验证码" placeholder="验证码">
      </van-field> -->

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import { getToken, getCode } from "@/api/cyry";
import { randomLenNum } from "@/util/util";
import qs from "qs";
export default {
  data() {
    return {
      username: "admin",
      password: "rKu1/348LvKp0rsVC06eCA==",
      mysrc: "",
      code: "",
    };
  },
  created() {
    getCode(randomLenNum()).then((res) => {
      this.mysrc = res;
      // console.log(this.mysrc);
    });
  },
  methods: {
    onSubmit() {
      let data = qs.stringify({
        username: this.username,
        password: this.password,
      });
      let query = {
        randomStr: randomLenNum(),
        code: this.code,
        grant_type: "password",
      };
      getToken(data, query).then((res) => {
        sessionStorage.setItem("token", JSON.stringify(res.data));
        this.$router.push({ path: "/home" });
        // console.log(res.data);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.loginbox {
  padding-top: 300px;
  position: relative;
}
.yzm {
  position: absolute;
  width: 150px;
  height: 80px;
  bottom: 127px;
  right: 20px;
  z-index: 99999999999;
}
</style>