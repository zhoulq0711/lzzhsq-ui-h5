<template>
  <div class="box">
    <div class="searchbox">
      <van-search
        v-model="value"
        shape="round"
        background="#F8F8F8"
        placeholder="请输入单位名称或社会统一信用代码搜索"
      />
    </div>
    <div class="list">
      <div class="listbox">
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
        <div class="listbox_b" v-if='type == 1'>
            <em class="icon1"></em>
            <em class="icon2"></em>
            <em class="icon3"></em>
            <em class="icon4"></em>
            <van-popover
                v-model="showPopover"
                trigger="click"
                :actions="actions"
                placement='bottom-end' 
                theme="dark"
                >
            </van-popover>
        </div>
      </div>
      <div class="listbox">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      showPopover: false,
      actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
      type:''
    };
  },
  methods: {
      
  },
  mounted() {
      this.type = this.$route.query.show
  },
};
</script>

<style scoped lang="scss">
.searchbox {
  .van-search__content {
    background-color: #fff;
    .van-field__control::placeholder {
      color: #bbb;
    }
    .van-icon-search::before {
      color: #bbb;
    }
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
    .listbox_b{ height: 80px;
        padding: 35px 25px;
        box-sizing: border-box;
        border-top:solid 1px #E9E9E9;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        em{display: block; margin-left: 40px;  width: 40px;height: 40px; }
        .icon1{
          
            background: url(../../assets/images/l1.png) no-repeat 0 0;
            background-size:100% ;
        }
        .icon2{
          
            background: url(../../assets/images/l2.png) no-repeat 0 0;
            background-size:100% ;
        }
        .icon3{
            
            background: url(../../assets/images/l3.png) no-repeat 0 0;
            background-size:100% ;
        }
        .icon4{
           
            background: url(../../assets/images/l4.png) no-repeat 0 0;
            background-size:100% ;
        }
        .van-popover__wrapper{
            display: block; margin-left: 40px;  width: 40px;height: 40px;
            background: url(../../assets/images/l5.png) no-repeat 0 0;
            background-size:100% ;
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