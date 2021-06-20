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
      <div
        style="
          position: fixed;
          width: 100%;
          height: 88%;
          bottom: 0;
          left: 0;
          z-index: 5;
        "
        v-if="formtype == 'view'"
      ></div>
      <van-form class="form" ref="form">
        <div style="display: none" id="haha"></div>
									 <van-field
									   v-model="form.dsbm"
									   name="dsbm"
									   label="地市编码"
									   :placeholder="prompt.dsbm_hint"
									 />
									 <van-field
									   v-model="form.gjbm"
									   name="gjbm"
									   label="轨迹编码"
									   :placeholder="prompt.gjbm_hint"
									 />
									 <van-field
									   v-model="form.xlpbbm"
									   name="xlpbbm"
									   label="巡逻排班编码t_sqjw_xlpbxx"
									   :placeholder="prompt.xlpbbm_hint"
									 />
									 <van-field
									   v-model="form.xlpbmc"
									   name="xlpbmc"
									   label="巡逻排班名称"
									   :placeholder="prompt.xlpbmc_hint"
									 />
									 <van-field
									   v-model="form.xlxlbm"
									   name="xlxlbm"
									   label="巡逻线路编码t_sqjw_xlxlxx"
									   :placeholder="prompt.xlxlbm_hint"
									 />
									 <van-field
									   v-model="form.xlxlmc"
									   name="xlxlmc"
									   label="巡逻线路名称"
									   :placeholder="prompt.xlxlmc_hint"
									 />
					<van-field
					  readonly
					  clickable
					  name="dksj"
					  :value="form.dksj"
					  label="打卡时间"
					  :placeholder="prompt.dksj_hint"
					  @click="showDksj = true"
					/>
					<van-popup v-model="showDksj" position="bottom">
					  <van-datetime-picker
					    type="date"
					    @confirm="onDksj"
					    @cancel="showDksj = false"
					  />
					</van-popup>
									 <van-field
									   v-model="form.yxbs"
									   name="yxbs"
									   label="有效标示"
									   :placeholder="prompt.yxbs_hint"
									 />
									 <van-field
									   v-model="form.djdwGajgjgdm"
									   name="djdwGajgjgdm"
									   label="登记单位_公安机关机构代码"
									   :placeholder="prompt.djdwGajgjgdm_hint"
									 />
									 <van-field
									   v-model="form.djdwGajgmc"
									   name="djdwGajgmc"
									   label="登记单位_公安机关名称"
									   :placeholder="prompt.djdwGajgmc_hint"
									 />
									 <van-field
									   v-model="form.djrYhbh"
									   name="djrYhbh"
									   label="登记人_用户编号"
									   :placeholder="prompt.djrYhbh_hint"
									 />
									 <van-field
									   v-model="form.djrGmsfhm"
									   name="djrGmsfhm"
									   label="登记人_公民身份号码"
									   :placeholder="prompt.djrGmsfhm_hint"
									 />
									 <van-field
									   v-model="form.djrXm"
									   name="djrXm"
									   label="登记人_姓名"
									   :placeholder="prompt.djrXm_hint"
									 />
					<van-field
					  readonly
					  clickable
					  name="djsj"
					  :value="form.djsj"
					  label="登记时间"
					  :placeholder="prompt.djsj_hint"
					  @click="showDjsj = true"
					/>
					<van-popup v-model="showDjsj" position="bottom">
					  <van-datetime-picker
					    type="date"
					    @confirm="onDjsj"
					    @cancel="showDjsj = false"
					  />
					</van-popup>
									 <van-field
									   v-model="form.sbbzWw"
									   name="sbbzWw"
									   label="上报互连网标志"
									   :placeholder="prompt.sbbzWw_hint"
									 />
					<van-field
					  readonly
					  clickable
					  name="sbsjWw"
					  :value="form.sbsjWw"
					  label="上报互连网时间"
					  :placeholder="prompt.sbsjWw_hint"
					  @click="showSbsjWw = true"
					/>
					<van-popup v-model="showSbsjWw" position="bottom">
					  <van-datetime-picker
					    type="date"
					    @confirm="onSbsjWw"
					    @cancel="showSbsjWw = false"
					  />
					</van-popup>
									 <van-field
									   v-model="form.sbbzZww"
									   name="sbbzZww"
									   label="上报政务网标志"
									   :placeholder="prompt.sbbzZww_hint"
									 />
					<van-field
					  readonly
					  clickable
					  name="sbsjZww"
					  :value="form.sbsjZww"
					  label="上报政务网时间"
					  :placeholder="prompt.sbsjZww_hint"
					  @click="showSbsjZww = true"
					/>
					<van-popup v-model="showSbsjZww" position="bottom">
					  <van-datetime-picker
					    type="date"
					    @confirm="onSbsjZww"
					    @cancel="showSbsjZww = false"
					  />
					</van-popup>
									 <van-field
									   v-model="form.xfbzDsxt"
									   name="xfbzDsxt"
									   label="下发地市系统标志"
									   :placeholder="prompt.xfbzDsxt_hint"
									 />
					<van-field
					  readonly
					  clickable
					  name="xfsjDsxt"
					  :value="form.xfsjDsxt"
					  label="下发地市系统时间"
					  :placeholder="prompt.xfsjDsxt_hint"
					  @click="showXfsjDsxt = true"
					/>
					<van-popup v-model="showXfsjDsxt" position="bottom">
					  <van-datetime-picker
					    type="date"
					    @confirm="onXfsjDsxt"
					    @cancel="showXfsjDsxt = false"
					  />
					</van-popup>
        <div style="margin: 16px">
          <van-button
            block
            type="info"
            round
            native-type="submit"
            v-if="formtype != 'view'"
            @click="saveClick(formtype)"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>
<script> 
import dict from "@/components/dict/index";
import address1 from "@/components/address/index";
import { insert,update,detail,cancel,getJsonData} from "@/api/xlyw/t_sqjw_xlgjxx";
import {getCurrDateTime,getCurrDate,getFormatDateTime,getFormatDate} from "@/api/fun/fun_datacheck";
var tmp = [];
export default {
  data(){
	  return getJsonData()   //从 h5,pc共用的数据定义区 取
  },
  components: {
    dict,
    address1,
  },
  created() {
  },
  mounted() {
    this.initData();
  },
  methods: {
   initData(){
   this.formtype = this.$route.query.formType;
     if (this.formtype == "add") {// 通过新增进入表单
           this.$store.commit("gettitle", "新增");
           document.title = "T_SQJW_XLGJXX";
       this.userInfo = this.$store.getters.userInfo;
      } else if (this.formtype == "edit") {// 通过修改进入表单
         this.$store.commit("gettitle", "修改");
   	   const dsbmPk = this.$route.query.dsbm;
   	    detail(dsbmPk).then((res) => {
   	 const editForm = res.data.data;
     this.form = editForm;
         });
       } else if (this.formtype == "view") {
         document.title = "T_SQJW_XLGJXX详细";  // 通过修改进入表单
         this.$store.commit("gettitle", "详细信息");
         for (const key in this.prompt) {
             this.prompt[key] = "";
         }
   		  const dsbmPk = this.$route.query.dsbm;
   	      detail(dsbmPk).then((res) => {
           const editForm = res.data.data;
          this.form = editForm;
         });
       }
   },
    retrundata(e, name) {
      // console.log(e);
      for (let key in this.form) {
        if (key == name) {
          this.form[key] = e.code;
        }
      }
    },
    retrunaddress(e, name) {    //地址的处理 
      if (e.SeatId.length > 0) {
        for (let key in this.form) {
          if (key == name) {
            this.form[key] = e.SeatId;
            this.form.cyryRyjzd = e.addr;
          }
        }
      } else {
        this.form.cyryDzbm = "";
        this.form.cyryRyjzd = e.addr;
      }
    },
    saveClick(type) {
      if (type == "edit") {
        this.$refs.form
          .validate()
          .then(() => {
            update(this.form).then((res) => {
                if (res.status == 200) {
                  this.$toast.success({
                    duration: 500,
                    message: "修改成功",
                    onClose: () => {
                      this.$router.go(-1);
                    },
                  });
                }
              })
              .catch(() => {
                this.$toast.fail("系统未知出错，无法修改");
              });
          })
          .catch((err) => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          });
      } else if (type == "add") {
        // this.dealImage(this.cyryXp[0].content, 800, this.printing);
        this.$refs.form
          .validate()
          .then(() => {
	           insert(this.form)
              .then((res) => {
                // console.log(res);
                if (res.status == 200) {
                  this.$toast.success({
                    duration: 500,
                    message: "保存成功",
                    onClose: () => {
                      this.$router.go(-1);
                    },
                  });
                }
              })
              .catch((err) => {
                this.$toast.fail("系统未知错误，无法保存");
              });
          })
          .catch(() => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          });
      }
      // console.log(this.form);
    },
			 onDksj(time) {
				   this.form.dksj = getFormatDate(time);
				   this.showDksj = false;
				 },
			 onDjsj(time) {
				   this.form.djsj = getFormatDate(time);
				   this.showDjsj = false;
				 },
			 onSbsjWw(time) {
				   this.form.sbsjWw = getFormatDate(time);
				   this.showSbsjWw = false;
				 },
			 onSbsjZww(time) {
				   this.form.sbsjZww = getFormatDate(time);
				   this.showSbsjZww = false;
				 },
			 onXfsjDsxt(time) {
				   this.form.xfsjDsxt = getFormatDate(time);
				   this.showXfsjDsxt = false;
				 },
    checkCode(val) {
      var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
      var code = val.substring(17);
      if (p.test(val)) {
        var sum = 0;
        for (var i = 0; i < 17; i++) {
          sum += val[i] * factor[i];
        }
        if (parity[sum % 11] == code.toUpperCase()) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>
<style lang="scss" >
.formbox1 {
  padding-bottom: 30px;
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
    .van-field--error .van-field__control,
    .van-field--error .van-field__control::placeholder {
      color: #969799 !important;
    }
    .van-field__label {
      margin-right: 40px;
      color: #666;
    }
    .van-field__control::placeholder {
      color: #969799;
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
