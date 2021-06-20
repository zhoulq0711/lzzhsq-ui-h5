<template>
  <div class="box">
    <div class="paybox">
      <div class="searchbox">
        <van-search
          v-model="value3"
          shape="round"
          background="#F8F8F8"
          placeholder="请输入编号搜索您的业务"
          class="search"
        />
        <van-button round class="searchbtn">搜索</van-button>
      </div>
      <div class="paylist">
        <div class="payitem">
          <div class="pay_header">
            <div class="imgbox">
              <img src="../../assets/images/f.png" class="payicon" />
              <div class="orange f20 text_c mt10">未支付</div>
            </div>
            <div class="article_box">
              <div class="pitem">
                <span class="plabel">业务名称：</span>
                <span class="pcontent">1周岁内国内出生申报</span>
              </div>
              <div class="pitem">
                <span class="plabel">申报单位：</span>
                <span class="pcontent"
                  >长沙市公安局雨花分局人口与出入境大厅</span
                >
              </div>
              <div class="pitem">
                <span class="plabel">办理时间：</span>
                <span class="pcontent">2018.06.07 15:34:34</span>
              </div>
              <div class="pitem">
                <span class="plabel">支付金额：</span>
                <span class="pcontent">40.00元</span>
              </div>
            </div>
          </div>
          <div class="pay_body">
            <van-button plain type="info" class="qxbjbtn">取消办件</van-button>
            <van-button color="#FF8800" class="qxbjbtn">重新付款</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value3:''
    }
  }
}
</script>
<style lang="scss" scoped>
.paybox {
  .searchbox {
    position: relative;
    .van-search__content {
      background-color: #fff;
      .van-field__control::placeholder {
        color: #bbb !important;
      }
    }
    .searchbtn {
      position: absolute;
      right: 23px;
      top: 20px;
      width: 140px;
      height: 70px;
      border-radius: 0 33px 33px 0;
      font-size: 24px;
      padding: 0;
      color: #fff;
      background-color: #2682fd;
      letter-spacing: 12px;
      padding-left: 10px;
    }
  }
  .paylist {
    background-color: #fff;
    border: 1px solid #e8e8e8;
    .pay_header {
      height: 222px;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      padding: 30px 0 0 31px;
      .imgbox {
        margin-right: 34px;
        .payicon {
          width: 78px;
          height: 78px;
          display: block;
        }
      }
      .article_box {
        .pitem {
          height: 40px;
          line-height: 0;
          .plabel {
            color: #333;
            font-size: 24px;
            font-weight: 500;
          }
          .pcontent {
            font-size: 24px;
            color: #999;
          }
        }
      }
    }
    .pay_body {
      height: 83px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .qxbjbtn {
        width: 140px;
        height: 50px;
        padding: 0;
        font-size: 24px;
        font-family: Microsoft YaHei;
        margin-right: 30px;
      }
    }
  }
}
</style>