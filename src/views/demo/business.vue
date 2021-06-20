<template>
  <div class="box">
    <img src="../../assets/images/ywbj.jpg" class="lunbotu" />
    <div class="message">
      <img src="../../assets/images/gth.png" class="gth" />
      <span>关注长沙公安二维码，在线咨询办理居住证业务</span>
    </div>
    <div class="title">
      <span class="titicon"></span>
      <span class="tittxt">居住证业务</span>
    </div>
    <div class="grid">
      <div class="grid_item">
        <img src="../../assets/images/grid1.png" class="gridicon" />
        <div class="gridtxt">暂住证申领</div>
      </div>
      <div class="grid_item">
        <img src="../../assets/images/grid2.png" class="gridicon" />
        <div class="gridtxt">居住证申领</div>
      </div>
      <div class="grid_item">
        <img src="../../assets/images/grid3.png" class="gridicon" />
        <div class="gridtxt">居住证换领</div>
      </div>
      <div class="grid_item">
        <img src="../../assets/images/grid4.png" class="gridicon" />
        <div class="gridtxt">居住证补领</div>
      </div>
      <div class="grid_item">
        <img src="../../assets/images/grid5.png" class="gridicon" />
        <div class="gridtxt">居住登记</div>
        <div class="gridtxt">凭证申领</div>
      </div>
      <div class="grid_item">
        <img src="../../assets/images/grid6.png" class="gridicon" />
        <div class="gridtxt">我的业务</div>
      </div>
      <div class="grid_item">
        <img src="../../assets/images/grid7.png" class="gridicon" />
        <div class="gridtxt">居住证代办</div>
      </div>
    </div>

    <div class="title">
      <span class="titicon"></span>
      <span class="tittxt">常见问题</span>
    </div>
    <div class="list">
      <div class="listitem">◆ 居住证申领需要哪些材料？</div>
      <div class="listitem">◆ 居住证年限是多久？</div>
      <div class="listitem">◆ 什么是居住证？</div>
    </div>
    <div class="slideup">上滑查看更多▼</div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  .lunbotu {
    width: 100%;
    height: 340px;
    display: block;
  }
  .message {
    width: 100%;
    height: 82px;
    display: flex;
    align-items: center;
    font-size: 25px;
    color: #fcfcfc;
    background-color: #1f82ff;
    padding-left: 30px;
    .gth {
      width: 30px;
      margin-right: 10px;
    }
  }
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
  .grid {
    width: 100%;
    height: 454px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    .grid_item {
      width: 25%;
      height: 227px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .gridicon {
        display: block;
        width: 96px;
        height: 75px;
        margin-bottom: 30px;
      }
      .gridtxt {
        font-size: 26px;
        color: #333333;
      }
    }
  }
  .list {
    background-color: #fff;
    .listitem {
      padding-left: 33px;
      font-size: 30px;
      display: flex;
      align-items: center;
      height: 82px;
      border-bottom: 1px solid #e8e8e8;
    }
  }
  .slideup {
    height: 97px;
    font-size: 26px;
    color: #aaaaaa;
    line-height: 97px;
    text-align: center;
  }
}
</style>