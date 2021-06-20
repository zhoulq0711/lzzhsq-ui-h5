<!--
代码生成:xk.徐柯@产品研发五部
编写时间:2021/6/16
业务功能描述:T_SQJW_XLGJXX
-->
<template>
  <div class="box">
    <div class="formbox1">
      <div class="title">
        <span class="titicon"></span>
        <span class="tittxt">T_SQJW_XLGJXX</span>
      </div>
      <van-form class="form" @submit="searchClick">
					<van-field
					  v-model="xlpbbm"
					  name="xlpbbm"
					  label="巡逻排班编码t_sqjw_xlpbxx"
					  placeholder="请输入巡逻排班编码t_sqjw_xlpbxx"
					/>
					<van-field
					  v-model="xlpbmc"
					  name="xlpbmc"
					  label="巡逻排班名称"
					  placeholder="请输入巡逻排班名称"
					/>
					<van-field
					  v-model="xlxlbm"
					  name="xlxlbm"
					  label="巡逻线路编码t_sqjw_xlxlxx"
					  placeholder="请输入巡逻线路编码t_sqjw_xlxlxx"
					/>
					<van-field
					  v-model="xlxlmc"
					  name="xlxlmc"
					  label="巡逻线路名称"
					  placeholder="请输入巡逻线路名称"
					/>
        <van-field name="isLike" label="搜索类型">
          <template #input>
            <van-radio-group v-model="isLike" direction="horizontal">
              <van-radio name="">精准查询</van-radio>
              <van-radio name="1">模糊查询</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <div style="margin: 16px">
          <van-button block type="info" native-type="submit">查询</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { list} from "@/api/xlyw/t_sqjw_xlgjxx";
export default {
  data() {
    return {
		 xlpbbm:"", //巡逻排班编码t_sqjw_xlpbxx
		xlpbmc:"", //巡逻排班名称
		xlxlbm:"", //巡逻线路编码t_sqjw_xlxlxx
		xlxlmc:"", //巡逻线路名称
	  isLike: "",
    };
  },
  methods: {
     searchClick(values) {
       let json1 = {
         size: 10,
         current: 1,
       };
       let query = Object.assign(json1, values);
       // console.log("submit", query);
       list(query)
         .then((res) => {
           // console.log(res.data);
           let data = res.data.data;
           this.list = data;
           let query11 = {
             list: this.list,
             query: query,
             from: "search",
           };
           this.$router.push({ path: "/h5/xlyw/t_sqjw_xlgjxx_h5list" });
           sessionStorage.setItem("query", JSON.stringify(query11));
         })
         // .catch((err) => {
         //   this.$toast.fail("登录已过期");
         // });
     },
   },
 };
 </script>
 <style lang="scss" scoped>
 .formbox1 {
   //   padding-top: 60px;
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
     .cphm {
       .van-cell {
         padding: 0;
       }
       .jszhm {
         width: 76px;
         height: 44px;
         background: #2682fd;
         border: 1px solid #ffffff;
         color: #fff;
         font-size: 24px;
         font-family: Microsoft YaHei;
         text-align: center;
         line-height: 44px;
       }
     }
   }
 }
 </style>
