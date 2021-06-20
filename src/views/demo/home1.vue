<template>
  <div>
    <div class="indexbox1">
      <img src="../../assets/images/ywbj.jpg" class="topimg" />
      <div class="main">
        <div class="title2">户口登记</div>
        <div class="gridbox1">
          <div class="grid_item">
            <div class="gridtxt1">国内出生落户</div>
            <img src="../../assets/images/gridimg1.png" class="gridimg1" />
          </div>
          <div class="grid_item">
            <div class="gridtxt1">境外出生落户</div>
            <img src="../../assets/images/gridimg2.png" class="gridimg1" />
          </div>
          <div class="grid_item">
            <div class="gridtxt1">回国定居落户</div>
            <img src="../../assets/images/gridimg3.png" class="gridimg1" />
          </div>
          <div class="grid_item">
            <div class="gridtxt1">留学人员恢复</div>
            <img src="../../assets/images/gridimg4.png" class="gridimg1" />
          </div>
        </div>

        <div class="wdbj">
          <span>我的办件</span>
        </div>
        <div class="title2">户口迁移</div>
        <div class="gridbox2">
          <div class="every">
            <img src="../../assets/images/item1.1.png" alt="" />
            <div>大中专生毕业</div>
          </div>
          <div class="every">
            <img src="../../assets/images/item1.2.png" alt="" />
            <div>迁入稳定住所</div>
          </div>
          <div class="every">
            <img src="../../assets/images/item1.3.png" alt="" />
            <div>投靠配偶</div>
          </div>
          <div class="every">
            <img src="../../assets/images/item1.4.png" alt="" />
            <div>投靠父母</div>
          </div>
          <div class="every">
            <img src="../../assets/images/item1.5.png" alt="" />
            <div>投靠子女</div>
          </div>
          <div class="every">
            <img src="../../assets/images/item1.6.png" alt="" />
            <div>就业户口迁移</div>
          </div>
          <div class="every">
            <img src="../../assets/images/item1.7.png" alt="" />
            <div>干部录用调动</div>
          </div>
          <div class="every">
            <img src="../../assets/images/item1.8.png" alt="" />
            <div>部队退休职工</div>
          </div>
          <div class="every">
            <img src="../../assets/images/item1.9.png" alt="" />
            <div>军人家属随军</div>
          </div>
          <div class="every">
            <img src="../../assets/images/item1.10.png" alt="" />
            <div>博士后引进</div>
          </div>
          <div class="every">
            <img src="../../assets/images/item1.11.png" alt="" />
            <div>寺庙僧人落户</div>
          </div>
        </div>
        <div class="title2">居住证申请</div>
        <div class="btnbox">
          <div class="btn1">
            <img src="../../assets/images/zzdj.png" alt="" />
            <span>暂住登记申请</span>
          </div>
          <div class="btn1 pink">
            <img src="../../assets/images/zzdj.png" alt="" />
            <span>居住证申请</span>
          </div>
        </div>

        <div class="title2">变更更正</div>
        <div class="xmbg">
          <div>
            <span>姓名变更</span>
            <van-icon name="play" />
          </div>
          <img src="../../assets/images/bgdj.png" alt="" />
        </div>

        <div class="footer">
          <div class="ftitem">
            <div class="round"></div>
            <div class="fttxt">民族变更</div>
          </div>
          <div class="ftitem">
            <div class="round"></div>
            <div class="fttxt">出生日期变更</div>
          </div>
          <div class="ftitem">
            <div class="round"></div>
            <div class="fttxt">性别变更</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.indexbox1 {
  background-color: #fff;
  padding-bottom: 30px;
  .topimg {
    width: 100%;
    height: 322px;
    display: block;
  }
  .main {
    padding: 0 32px;
    .title2 {
      height: 105px;
      line-height: 105px;
      font-size: 36px;
      font-family: PingFang;
      font-weight: 500;
      color: #222222;
    }
    .gridbox1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-bottom: 30px;
      .grid_item {
        width: 336px;
        height: 163px;
        background-color: #fbfbfb;
        margin-bottom: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        // padding-top: 20px;
        .gridtxt1 {
          font-size: 30px;
          font-family: PingFang;
          color: #383838;
        }
        .gridimg1 {
          width: 140px;
          height: 150px;
          display: block;
          margin-top: 20px;
        }
      }
    }
    .wdbj {
      width: 100%;
      height: 147px;
      background-image: url(../../assets/images/rukou.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      padding-left: 40px;
      padding-top: 15px;
      span {
        color: #fbff14;
        font-size: 26px;
      }
    }
    .gridbox2 {
      display: flex;
      //   justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: -20px;
      .every {
        width: 33%;
        height: 150px;
        //   background-color: red;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 50px;
        img {
          width: 70px;
          height: 65px;
        }
        div {
          font-size: 24px;
          font-family: PingFang;
          color: #4a4a4a;
        }
      }
    }
    .btnbox {
      display: flex;
      justify-content: space-between;
      .btn1 {
        width: 335px;
        height: 96px;
        background-color: #fff;
        display: flex;
        padding-left: 25px;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
        }
        span {
          font-size: 28px;
          font-family: PingFang;
          color: #4a4a4a;
        }
        &.pink {
          background-color: rgba(255, 234, 212, 0.25);
        }
      }
    }
    .xmbg {
      width: 100%;
      height: 116px;
      background: linear-gradient(90deg, #75a2ff, #4837f3);
      border-radius: 4px 4px 0px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 28px;
      padding-left: 35px;
      color: #fff;
      img {
        width: 100px;
        height: 102px;
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
      padding: 30px;
      .ftitem {
        display: flex;
        // width: 33%;
        align-items: center;
        .round {
          width: 11px;
          height: 11px;
          background: #75a2ff;
          border-radius: 50%;
          margin-right: 20px;
        }
        .fttxt {
          font-size: 28px;
          font-family: PingFang;
          font-weight: 500;
          color: #4a4a4a;
        }
      }
    }
  }
}
</style>