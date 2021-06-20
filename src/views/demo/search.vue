<template>
  <div class="box">
    <div class="searchbox">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
      <van-search
        v-model="value3"
        shape="round"
        background="#F8F8F8"
        placeholder="请输入搜索关键词"
      />
      <div>
        <div class="shlistbox">
          <div class="shlist">
            <div class="shlist_lt">
              <img src="../../assets/images/f.png" class="lticon" />
              <div class="ltbox">
                <p class="ltitem">
                  <span class="yybh">预约编号：</span>
                  <span class="yynum">36023000001</span>
                </p>
                <p class="ltitem">
                  <span class="yysj">预约时间：</span>
                  <span class="yytime">2018-05-05 14:30~15:00</span>
                </p>
              </div>
            </div>
            <div class="shlist_rt">
              <van-button round class="qxyybtn">取消预约</van-button>
              <div class="f20">未取号</div>
            </div>
          </div>
          <div class="shlist">
            <div class="shlist_lt">
              <img src="../../assets/images/f.png" class="lticon" />
              <div class="ltbox">
                <p class="ltitem">
                  <span class="yybh">预约编号：</span>
                  <span class="yynum">36023000001</span>
                </p>
                <p class="ltitem">
                  <span class="yysj">预约时间：</span>
                  <span class="yytime">2018-05-05 14:30~15:00</span>
                </p>
              </div>
            </div>
            <div class="shlist_rt">
              <div class="wqh">已取号</div>
            </div>
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
      value1: 0,
      value2: "a",
      value3: "",
      option1: [
        { text: "2018年5月", value: 0 },
        { text: "2018年6月", value: 1 },
        { text: "2018年7月", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
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
  .shlistbox {
    .shlist {
      background-color: #fff;
      width: 100%;
      height: 142px;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #e8e8e8;
      .shlist_lt {
        display: flex;
        align-items: center;
        .lticon {
          width: 76px;
          height: 76px;
          display: block;
          margin-right: 20px;
        }
        .ltbox {
          // height: 90px;
          // display: flex;
          // flex-direction: column;
          // justify-content: space-around;

          .ltitem {
            // height: 50px;
            line-height: 46px;
            .yybh {
              color: #333;
              font-size: 27px;
            }
            .yynum {
              color: #1e7df3;
              font-size: 27px;
            }
            .yysj {
              color: #333;
              font-size: 22px;
            }
            .yytime {
              color: #999;
              font-size: 22px;
            }
          }
        }
      }
      .shlist_rt {
        width: 130px;
        .qxyybtn {
          width: 125px !important;
          height: 50px;
          background-color: #ff9900;
          color: #fff;
          font-size: 20px;
          padding: 0;
        }
        .f20 {
          font-size: 20px;
          text-align: center;
          margin-top: 12px;
          color: #ff9900;
        }
        .wqh {
          font-size: 20px;
          text-align: center;
          color: #65a6f7;
        }
      }
    }
  }
}
</style>