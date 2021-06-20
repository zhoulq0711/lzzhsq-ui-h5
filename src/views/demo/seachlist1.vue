<template>
  <div class="box">
    <div class="searchbox">
      <van-search
        v-model="value"
        shape="round"
        placeholder="请输入单位名称或社会统一信用代码搜索"
      />
      <van-dropdown-menu active-color="#0083f8">
        <van-dropdown-item :value="value1" :options="option1" />
        <van-dropdown-item :value="value2" :options="option2" />
        <van-dropdown-item :value="value3" :options="option2" />
        <van-dropdown-item :value="value4" :options="option4" />
      </van-dropdown-menu>
    </div>
    <div class="list">
      <div class="listbox">
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
      <div class="listbox">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      option1: [
        { text: "排序", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "单位类型", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      option3: [
        { text: "位置类型", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      option4: [
        { text: "安全等级", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      value1: 0,
      value2: "a",
      value3: "a",
      value4: "a",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.searchbox {
  margin-bottom: 20px;
  background: #fff;
  .van-search__content {
    background-color: #fff;
    .van-cell {
      border: solid 1px #e8e8e8;
      border-radius: 50px;
      padding-left: 20px;
    }
    .van-field__control::placeholder {
      color: #bbb;
    }
    .van-icon-search::before {
      color: #bbb;
    }
  }
  .van-dropdown-menu__item{background: #F8F8F8;}
}

.listbox {
  width: 100%;
  padding: 35px 25px;
  background: #fff;
  display: flex;
  margin-bottom: 20px;
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