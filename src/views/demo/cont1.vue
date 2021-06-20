<template>
  <div class="box">
    <div class="listbox" v-if="type == 1">
      <div class="listbox_t">
        <div class="listbox_l">
          <img
            src="http://img-arch.pconline.com.cn/images/upload/upc/tx/photoblog/1402/07/c7/31066355_31066355_1391779709500_mthumb.jpg"
          />
        </div>
        <div class="listbox_r">
          <h2>福建天创信息科技有限公司公司的</h2>
          <p class="dw">福州市公安局雨花区分局圭塘派出所</p>
          <p class="info">
            <span>单位类型：<em>旅馆业</em></span
            ><span>从业人员：<em>11人</em></span>
          </p>
          <p class="dz">福州市闽侯县科技东路22号创业大厦16层</p>
          <p class="tag">
            <em class="c1">信息填写完整</em><em class="c2">有安全隐患</em
            ><em class="c3">刑事案件</em>
          </p>
        </div>
      </div>
    </div>
    <div class="editpicbox">
      <div class="title_nav">
        <i></i>
        公司名称
      </div>
      <div class="cpic">
        <img :src="url" />
      </div>
      <div class="flexcenter">
        <van-uploader :after-read="afterRead" :max-count="1">
          <div class="up_btn"><em></em>修改图片</div>
        </van-uploader>
      </div>
    </div>
    <div class="cardinfo">
      <div class="title_nav">
        <i></i>
        公司名称
      </div>
      <div class="texts">
        福州注册地位于福州市闽侯县上街镇科技东路8号创业大
        16-17层，法定代表人为林林林。经营范围包括电子技来 术开发及技术服务、
      </div>
      <div class="listbox_b">
        <em class="icon1"></em>
        <em class="icon2"></em>
        <em class="icon3"></em>
        <em class="icon4"></em>
        <van-popover
          v-model="showPopover"
          trigger="click"
          :actions="actions"
          placement="top-end"
          theme="dark"
        >
        </van-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      url: "https://img01.yzcdn.cn/vant/leaf.jpg",
      showPopover: false,
      actions: [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }],
      type: "",
    };
  },
  methods: {
    afterRead(file) {
      this.url = file.content;
    },
  },
  mounted() {
    this.type = this.$route.query.show;
  },
};
</script>

<style lang="scss" scoped>
.editpicbox {
  background: #fff;
  h2 {
    font-size: 30px;
    padding: 40px 20px;
    font-weight: bold;
  }
  .cpic {
    width: 680px;
    height: 336px;
    margin: 40px auto;
    img {
      width: 680px;
      height: 336px;
      border-radius: 20px;
    }
  }
  .flexcenter {
    display: flex;
    justify-content: center;
  }
  .up_btn {
    width: 680px;
    height: 80px;
    border: solid 1px #e9e9e9;
    text-align: center;
    line-height: 80px;
    margin: 20px auto 40px auto;
    font-size: 22px;
    color: #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    em {
      width: 36px;
      height: 36px;
      background: url(../../assets/images/addimg.png) no-repeat 0 0;
      background-size: 100%;
      display: inline-block;
      margin-right: 20px;
    }
  }
}
.cardinfo {
  margin-top: 20px;
  background: #fff;
  h2 {
    font-size: 32px;
    padding: 40px 20px 20px 20px;
    font-weight: bold;
  }
  .texts {
    padding: 22px;
    font-size: 24px;
    color: #666666;
    line-height: 42px;
  }
}
.listbox_b {
  height: 80px;
  padding: 35px 25px;
  box-sizing: border-box;
  border-top: solid 1px #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  em {
    display: block;
    margin-left: 40px;
    width: 40px;
    height: 40px;
  }
  .icon1 {
    background: url(../../assets/images/l1.png) no-repeat 0 0;
    background-size: 100%;
  }
  .icon2 {
    background: url(../../assets/images/l2.png) no-repeat 0 0;
    background-size: 100%;
  }
  .icon3 {
    background: url(../../assets/images/l3.png) no-repeat 0 0;
    background-size: 100%;
  }
  .icon4 {
    background: url(../../assets/images/l4.png) no-repeat 0 0;
    background-size: 100%;
  }
  .van-popover__wrapper {
    display: block;
    margin-left: 40px;
    width: 40px;
    height: 40px;
    background: url(../../assets/images/l5.png) no-repeat 0 0;
    background-size: 100%;
  }
}
.listbox {
  width: 100%;
  background: #fff;
  margin-bottom: 20px;
  .listbox_t {
    width: 100%;
    display: flex;
    padding: 35px 25px;
    box-sizing: border-box;
  }
  .listbox_b {
    height: 80px;
    padding: 35px 25px;
    box-sizing: border-box;
    border-top: solid 1px #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    em {
      display: block;
      margin-left: 40px;
      width: 40px;
      height: 40px;
    }
    .icon1 {
      background: url(../../assets/images/l1.png) no-repeat 0 0;
      background-size: 100%;
    }
    .icon2 {
      background: url(../../assets/images/l2.png) no-repeat 0 0;
      background-size: 100%;
    }
    .icon3 {
      background: url(../../assets/images/l3.png) no-repeat 0 0;
      background-size: 100%;
    }
    .icon4 {
      background: url(../../assets/images/l4.png) no-repeat 0 0;
      background-size: 100%;
    }
    .van-popover__wrapper {
      display: block;
      margin-left: 40px;
      width: 40px;
      height: 40px;
      background: url(../../assets/images/l5.png) no-repeat 0 0;
      background-size: 100%;
    }
  }
  .listbox_l {
    width: 174px;
    height: 174px;
    border: solid 1px #e8e8e8;
    padding: 5px;
  }
  .listbox_r {
    margin-left: 30px;
    width: 460px;
    h2 {
      font-size: 30px;
      overflow: hidden; //超出的文本隐藏
      text-overflow: ellipsis; //溢出用省略号显示
      white-space: nowrap; //溢出不换行
    }
    p {
      margin-bottom: 20px;
    }
    p:last-child {
      margin-bottom: 0;
    }
    .dw {
      font-size: 24px;
      color: #737373;
      margin-top: 30px;
    }
    .dz {
      font-size: 22px;
      color: #999999;
    }
    .info {
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      em {
        color: #1e7df3;
      }
    }
    .tag {
      display: flex;
      em {
        padding: 6px;
        box-sizing: border-box;
        font-size: 22px;
        border-radius: 30px;
        margin-right: 10px;
      }
      .c1 {
        border: solid 1px #70b373;
        color: #70b373;
      }
      .c2 {
        border: solid 1px #fe6459;
        color: #fe6459;
      }
      .c3 {
        border: solid 1px #de9d4c;
        color: #de9d4c;
      }
    }
  }
  .listbox_l img {
    width: 100%;
    height: 100%;
  }
}
</style>