<template>
  <div class="box">
    <div class="formbox1">
      <div class="title">
        <span class="titicon"></span>
        <span class="tittxt">从业人员表单</span>
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
          v-model="cyryForm.cyryXm"
          name="cyryXm"
          label="人员姓名"
          required
          :placeholder="prompt.ryxm"
          :rules="[
            { required: true, message: '人员姓名不能为空' },
            { pattern: nameReg, message: '姓名格式错误' },
          ]"
        />

        <van-field
          v-model="cyryForm.cyrySfhm"
          name="cyrySfhm"
          required
          label="公民身份证号"
          :placeholder="prompt.sfzh"
          @blur="getCsrq"
          :rules="[
            { required: true, message: '身份证号不能为空' },
            { pattern: idno, message: '身份证号错误' },
          ]"
        />
        <van-field
          v-model="cyryForm.cyryDh"
          name="cyryDh"
          label="联系人电话"
          required
          :placeholder="prompt.lxrdh"
          :rules="[
            { required: true, message: '电话号码不能为空' },
            { pattern: phoneReg, message: '电话号码错误' },
          ]"
        />

        <!-- 人员民族字典-->
        <dict
          label="人员民族"
          :placeholder="prompt.rymz"
          zdType="民族"
          modleName="cyryMzbm"
          :cnname="this.cyryForm.cyryMzbmCn"
          @zdretrun="retrundata"
        />
        <!-- 人员性别字典-->
        <dict
          label="人员性别"
          :placeholder="prompt.ryxb"
          zdType="性别"
          modleName="cyryXbbm"
          :cnname="this.cyryForm.cyryXbbmCn"
          @zdretrun="retrundata"
        />

        <van-field
          readonly
          clickable
          name="cyryCsrq"
          :value="cyryForm.cyryCsrq"
          label="出生日期"
          :placeholder="prompt.csrq"
          @click="showCsrq = true"
        />

        <van-popup v-model="showCsrq" position="bottom">
          <van-datetime-picker
            v-model="currentDate"
            :min-date="minDate"
            :max-date="maxDate"
            type="date"
            @confirm="onCsrq"
            @cancel="showCsrq = false"
          />
        </van-popup>

        <!-- 人员居住地字典-->

        <address1
          label="人员居住地"
          :placeholder="prompt.ryjzd"
          modleName="cyryDzbm"
          :cnname="this.cyryForm.cyryRyjzd"
          @zdretrun="retrunaddress"
        />
        <!-- <dict
          :dtParams="ryjzdParams"
          modleName="cyryRyjzd"
          :cnname="this.cyryForm.cyryRyjzdCn"
          @zdretrun="retrundata"
        /> -->
        <van-field
          readonly
          clickable
          name="cyryRylb"
          :value="cyryRylbCn"
          label="人员类别"
          :placeholder="prompt.rylb"
          @click="showRylb = true"
        />

        <van-popup v-model="showRylb" position="bottom">
          <van-picker
            show-toolbar
            :columns="rylbCols"
            @confirm="onRylb"
            @cancel="showRylb = false"
          />
        </van-popup>

        <!-- 婚姻状况字典-->
        <dict
          label="婚姻状况"
          :placeholder="prompt.hyzk"
          zdType="婚姻状况"
          modleName="cyryHyzk"
          :cnname="this.cyryForm.cyryHyzkCn"
          @zdretrun="retrundata"
        />

        <!-- 国家地区字典-->
        <dict
          label="国籍"
          :placeholder="prompt.rygj"
          zdType="国家地区"
          modleName="cyryGj"
          :cnname="this.cyryForm.cyryGjCn"
          @zdretrun="retrundata"
        />
        <van-field
          v-model="cyryForm.cyrySr"
          name="cyrySr"
          label="收入（元）"
          :placeholder="prompt.rysr"
        />

        <van-field
          v-model="cyryForm.cyrySg"
          name="cyrySg"
          label="身高（cm）"
          :placeholder="prompt.rysg"
        />

        <!-- <van-field
          v-model="cyryForm.cyryzt"
          name="cyryzt"
          label="从业人员状态代码"
          placeholder="请输入从业人员状态代码"
        /> -->
        <!-- 
        <van-field
          v-model="cyryForm.bjscZt"
          name="bjscZt"
          label="背景审查编码"
          placeholder="请输入背景审查编码"
        /> -->
        <!-- :disabled="formtype == 'view'" -->
        <van-field name="bjscZt" label="背景审查状态">
          <template #input>
            <van-radio-group v-model="cyryForm.bjscZt" direction="horizontal">
              <van-radio name="1">已审查</van-radio>
              <van-radio name="0">未审查</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <!-- <van-field name="yxbs" label="有效标识">
          <template #input>
            <van-radio-group v-model="cyryForm.yxbs" direction="horizontal">
              <van-radio name="1">有效</van-radio>
              <van-radio name="0">无效</van-radio>
            </van-radio-group>
          </template>
        </van-field> -->

        <!-- <van-field
          v-model="cyryForm.yxbs"
          name="yxbs"
          label="有效标识"
          placeholder="请输入有效标识 1有效 0无效"
        /> -->
        <!-- 记得写相片 -->
        <van-field name="cyryXp" label="照片">
          <template #input>
            <van-uploader
              style="z-index: 33333"
              :deletable="formtype != 'view'"
              v-model="cyryXp"
              :max-size="300 * 1024"
              :before-read="beforeRead"
              :before-delete="beforeDel"
              @oversize="onOversize"
              multiple
              :disabled="formtype == 'view'"
            />
          </template>
        </van-field>
        <!-- <van-field name="cyryXp" label="照片">
          <template #input>
            <van-uploader
              style="z-index: 33333"
              :deletable="formtype != 'view'"
              v-model="cyryXp"
              :max-size="300 * 1024"
              :before-read="beforeRead"
              @oversize="onOversize"
              :max-count="1"
            />
          </template>
        </van-field> -->
        <van-field
          v-model="cyryForm.ryjj"
          type="textarea"
          name="ryjj"
          label="人员简介"
          rows="3"
          :placeholder="prompt.ryjj"
        />

        <!-- <van-field
          v-model="cyryForm.xxlyYwlsh"
          name="xxlyYwlsh"
          label="信息来源_业务流水号"
          placeholder="请输入信息来源_业务流水号"
        />

        <van-field
          v-model="cyryForm.xxlyXtdm"
          name="xxlyXtdm"
          label="信息来源_系统代码"
          v-show="false"
          placeholder="请输入信息来源_系统代码 1:app 2、设备感觉3、web登记"
        />

        <van-field
          v-model="cyryForm.xxlyYwmc"
          name="xxlyYwmc"
          label="信息来源_业务名称"
          placeholder="请输入信息来源_业务名称"
        />

        <van-field
          v-model="cyryForm.sjlyGxsj"
          name="sjlyGxsj"
          label="数据更新时间(用于大数据)"
          placeholder="请输入数据更新时间(用于大数据)"
        />

        <van-field
          v-model="cyryForm.djdwGajgjgdm"
          name="djdwGajgjgdm"
          label="登记单位_公安机关机构代码"
          placeholder="请输入登记单位_公安机关机构代码"
        />

        <van-field
          v-model="cyryForm.djdwGajgmc"
          name="djdwGajgmc"
          label="登记单位_公安机关名称"
          placeholder="请输入登记单位_公安机关名称"
        />

        <van-field
          v-model="cyryForm.djrYhbh"
          name="djrYhbh"
          label="登记人_用户编号"
          placeholder="请输入登记人_用户编号"
        />

        <van-field
         v-model="cyryForm.djrGmsfhm"
           name="djrGmsfhm"
          label="登记人_公民身份号码"
          placeholder="请输入登记人_公民身份号码"
        />
        
        <van-field
          v-model="cyryForm.djrXm"
          name="djrXm"
          label="登记人_姓名"
          placeholder="请输入登记人_姓名"
        />

        <van-field
          v-model="cyryForm.djsj"
          name="djsj"
          label="登记时间"
          placeholder="请输入登记时间"
        />

        <van-field
          v-model="cyryForm.gxsj"
          name="gxsj"
          label="更新时间"
          placeholder="请输入更新时间"
        /> -->

        <div style="margin: 16px">
          <van-button
            block
            type="info"
            round
            native-type="submit"
            v-if="formtype != 'view'"
            @click="onSubmit(formtype)"
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

import { insert, update, detail, uploadimg, cancelpic } from "@/api/cyry";

var tmp = [];
export default {
  components: {
    dict,
    address1,
  },
  mounted() {
    this.formtype = this.$route.query.formType;
    var exampleUrl = window.location.protocol + "//" + window.location.host;
    // console.log(type);
    if (this.formtype == "add") {
      // 通过新增进入表单
      this.$store.commit("gettitle", "新增");
      document.title = "从业人员新增";
    } else if (this.formtype == "edit") {
      // 通过修改进入表单
      this.$store.commit("gettitle", "修改");
      // this.phoneReg = new RegExp();

      const rybh = this.$route.query.rybh;
      this.rkbm = rybh;
      detail(rybh).then((res) => {
        const editForm = res.data.data;

        this.cyryForm = editForm;
        let rylb = this.rylbCols.find((ele) => ele.code == editForm.cyryRylb);
        // console.log(rylb)
        // 进来展示人员类别
        if (rylb) {
          this.cyryRylbCn = rylb.text;
        }
        // 进来展示照片
        // if (editForm.cyryXp) {
        //   this.cyryXp.push({ url: exampleUrl + editForm.cyryXp });
        // }
        if (editForm.cyryImage) {
          editForm.cyryImage.forEach((ele) => {
            ele.url = exampleUrl +ele.url
          });
          // console.log(editForm.cyryImage)
          this.cyryXp = editForm.cyryImage;
        }
      });
    } else if (this.formtype == "view") {
      document.title = "从业人员详细";
      // 通过修改进入表单
      this.$store.commit("gettitle", "详细信息");

      for (const key in this.prompt) {
        this.prompt[key] = "";
      }

      const rybh = this.$route.query.rybh;
      this.rkbm = rybh;
      //  console.log(rybh)
      detail(rybh).then((res) => {
        const viewForm = res.data.data;
        // console.log(editForm);

        this.cyryForm = viewForm;

        let rylb = this.rylbCols.find((ele) => ele.code == viewForm.cyryRylb);
        // console.log(rylb)
        // 进来展示人员类别
        if (rylb) {
          this.cyryRylbCn = rylb.text;
        }
        // 进来展示照片
        // if (viewForm.cyryXp) {
        //   this.cyryXp.push({ url: exampleUrl + viewForm.cyryXp });
        // }
        if (viewForm.cyryImage) {
          viewForm.cyryImage.forEach((ele) => {
            ele.url = exampleUrl +ele.url
          });
          console.log(viewForm.cyryImage)
          this.cyryXp = viewForm.cyryImage;
        }
        // console.log(this.cyryXp);
      });
    }
  },
  data() {
    return {
      prompt: {
        ryxm: "请输入人员姓名",
        sfzh: "请输入公民身份证号",
        lxrdh: "请输入联系人电话",
        rymz: "请选择人员民族",
        ryxb: "请选择人员性别",
        csrq: "请选择出生日期",
        ryjzd: "请选择人员居住地",
        rylb: "请选择人员类别",
        hyzk: "请选择婚姻状况",
        rygj: "请选择国籍",
        rysr: "请输入收入",
        rysg: "请输入身高",
        ryjj: "请输入人员简介",
      },
      currentDate: new Date(),
      minDate: new Date(1900, 1, 1),
      maxDate: new Date(),
      formtype: "",
      idno: /^(\d{18,18}|\d{15,15}|\d{17,17}X)$/,
      nameReg: /(^([a-zA-Z]+\s)*[a-zA-Z]+$)|(^((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·){0,5}(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*$)/,
      // phoneReg: /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/,
      phoneReg: /(\d{3})([*,\d]{4})(\d{4})/,

      cyryXp: [], //人员相片数组
      cyryXpSrc: "", //人员相片网络字符串
      cyryRylbCn: "", //人员类别中文名
      cyryForm: {
        rybh: "", //人员编号
        dsbm: "350000", //地市编码
        cyryRylb: "", //人员类别
        cyryXm: "", //人员姓名
        cyrySfhm: "", //人员身份证号
        cyryXbbm: "", //人员性别编码
        cyryXbbmCn: "", //人员性别中文名
        cyryCsrq: "", //人员出生日期
        cyryMzbm: "", //人员民族编码

        cyryRyjzd: "", //人员居住地
        cyryRyjzdCn: "", //人员居住地中文名
        cyryDzbm: "", //人员居住地地址编码

        cyryHyzk: "", //人员婚姻状况
        cyrySr: "", //人员收入
        cyrySg: "", //人员身高
        cyryGj: "", //人员国籍
        cyryGjCn: "", //人员国籍中文名
        cyryDh: "", //联系人电话
        cyryzt: "", //从业人员状态
        cyryXp: "", //从业人员照片
        bjscZt: "",
        ryjj: "",
        xxlyYwlsh: "",
        xxlyXtdm: "2",
        xxlyYwmc: "",
        sjlyGxsj: "",
        yxbs: "",
        djdwGajgjgdm: "",
        djdwGajgmc: "",
        djrYhbh: "",
        djrGmsfhm: "",
        djrXm: "",
        djsj: "",
        gxsj: "",
      },
      rylbCols: [
        { text: "本地人员", code: "1" },
        { text: "外地人员", code: "2" },
      ],
      showRylb: false,
      showCsrq: false,
      rkbm: "",
      xpbh: "",
      leng: 1,
    };
  },
  methods: {

    beforeDel(file) {
      console.log(file.xpbh);
      cancelpic(file.xpbh).then((res) => {
        let index = this.cyryXp.findIndex((item) => item.xpbh == file.xpbh);
        this.cyryXp.splice(index, 1);
        // console.log(this.cyryXp);
      });
    },
    beforeRead(file) {
      // console.log(file.length);
      tmp = [];

      if (file.length) {
        this.leng = file.length;
        for (let i = 0; i < file.length; i++) {
          var reader = new FileReader();
          reader.readAsDataURL(file[i]);
          reader.onload = (e) => {
            this.dealImage(e.target.result, 800, this.printing);
          };
        }
      } else {
        this.leng = 1;
        file.status = "uploading";
        file.message = "上传中...";
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          this.dealImage(e.target.result, 800, this.printing);
        };
      }
    },
    /**
     * 图片压缩
     */
    dealImage(base64, w, callback) {
      var newImage = new Image();
      var quality = 0.6; //压缩系数0-1之间
      newImage.src = base64;
      newImage.setAttribute("crossOrigin", "Anonymous"); //url为外域时需要
      var imgWidth, imgHeight;
      var that = this;
      newImage.onload = function () {
        imgWidth = this.width;
        imgHeight = this.height;
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        if (Math.max(imgWidth, imgHeight) > w) {
          if (imgWidth > imgHeight) {
            canvas.width = w;
            canvas.height = (w * imgHeight) / imgWidth;
          } else {
            canvas.height = w;
            canvas.width = (w * imgWidth) / imgHeight;
          }
        } else {
          canvas.width = imgWidth;
          canvas.height = imgHeight;
          quality = 0.6;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
        var base64 = canvas.toDataURL("image/jpeg", quality); //压缩语句
        // 如想确保图片压缩到自己想要的尺寸,如要求在50-150kb之间，请加以下语句，quality初始值根据情况自定
        // while (base64.length / 1024 > 150) {
        // 	quality -= 0.01;
        // 	base64 = canvas.toDataURL("image/jpeg", quality);
        // }
        // 防止最后一次压缩低于最低尺寸，只要quality递减合理，无需考虑
        // while (base64.length / 1024 < 50) {
        // 	quality += 0.001;
        // 	base64 = canvas.toDataURL("image/jpeg", quality);
        // }
        callback(base64); //必须通过回调函数返回，否则无法及时拿到该值
        // console.log(base64)
      };
    },
    printing(base64) {

      tmp.push(base64);
      var _this = this;
      if (tmp.length == this.leng) {
        (function loop(index) {
          if (index > 0) {
            //递归终止条件
            //模仿ajax请求
            var data = {
              cyryXp: tmp[tmp.length - index],
              rkbm: _this.rkbm,
            };
            uploadimg(data).then((res) => {
              _this.rkbm = res.data.data.rkbm;
              // _this.cyryXp.push(tmp[tmp.length - index]);
              _this.cyryXp.push({
                url: tmp[tmp.length - index],
                isImage: true,
                xpbh: res.data.data.xpbh,
              });
              loop(--index);
            });
          } else {
            // console.log('递归方式结果：',arr);
          }
        })(tmp.length);
        console.log(_this.cyryXp);
      }
    },
    // getReg() {
    //   this.phoneReg = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/;
    // },
    onOversize(file) {
      // console.log(file);
      this.$toast("文件大小不能超过300kb");
    },
    // 身份证自动获取出生日期
    getCsrq() {
      var birthday = "";
      if (this.cyryForm.cyrySfhm != null && this.cyryForm.cyrySfhm != "") {
        if (this.cyryForm.cyrySfhm.length == 15) {
          birthday = "19" + this.cyryForm.cyrySfhm.substr(6, 6);
        } else if (this.cyryForm.cyrySfhm.length == 18) {
          birthday = this.cyryForm.cyrySfhm.substr(6, 8);
        }

        birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
      }
      this.cyryForm.cyryCsrq = birthday;
    },
    retrundata(e, name) {
      // console.log(e);
      for (let key in this.cyryForm) {
        if (key == name) {
          this.cyryForm[key] = e.code;
        }
      }
    },
    retrunaddress(e, name) {
      if (e.SeatId.length > 0) {
        for (let key in this.cyryForm) {
          if (key == name) {
            this.cyryForm[key] = e.SeatId;
            this.cyryForm.cyryRyjzd = e.addr;
          }
        }
      } else {
        this.cyryForm.cyryDzbm = "";
        this.cyryForm.cyryRyjzd = e.addr;
      }
    },
    onSubmit(type) {
      if (type == "edit") {
        this.$refs.form
          .validate()
          .then(() => {
            if (this.cyryForm.cyryDh.indexOf("*") != -1) {
              //编辑判断手机是否为*
              this.cyryForm.cyryDh = null;
            }
            // 修改表单的照片格式转换
            // if (this.cyryXp.length != 0) {
            //   this.cyryForm.cyryXp = this.cyryXp[0].url;
            // }
            // console.log(this.cyryForm);
            update(this.cyryForm)
              .then((res) => {
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
            // 新增表单的照片格式转换
            // if (this.cyryXp.length != 0) {
            //   this.cyryForm.cyryXp = this.cyryXp[0].url;
            // }
            // console.log(this.cyryForm);
            insert(this.cyryForm)
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
      // console.log(this.cyryForm);
      // console.log("submit", values);
    },
    onRylb(value) {
      // console.log(value.code);
      this.cyryRylbCn = value.text;
      this.cyryForm.cyryRylb = value.code;
      this.showRylb = false;
    },
    onCsrq(time) {
      // console.log(new Date(time).toString());
      let date = new Date(time);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formatterTime = year + "-" + month + "-" + day;
      // console.log(formatterTime);
      this.cyryForm.cyryCsrq = formatterTime;
      this.showCsrq = false;
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