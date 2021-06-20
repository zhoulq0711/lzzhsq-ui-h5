<template>
  <div>
    <div class="homebg">
      <div class="jbtop">
        <img src="../../assets/images/topbj.png" class="topbj" />
        <div class="titlebox">
          <div class="one">业务办理</div>
          <div class="two">办理记录》</div>
        </div>
        <img src="../../assets/images/jzzslbj.png" class="jjzslbj" />
        <div class="ywblbox">
          <div class="ywbl">
            <img src="../../assets/images/ywbl1.png" class="ywimg" />
            <div class="ywtxt">身份证挂失补办</div>
          </div>
          <div class="ywbl">
            <img src="../../assets/images/ywbl2.png" class="ywimg" />
            <div class="ywtxt">居住注销</div>
          </div>
          <div class="ywbl">
            <img src="../../assets/images/ywbl3.png" class="ywimg" />
            <div class="ywtxt">居住证遗失换领补办</div>
          </div>
          <div class="ywbl">
            <img src="../../assets/images/ywbl4.png" class="ywimg" />
            <div class="ywtxt">居住证签注</div>
          </div>
        </div>
      </div>
      <div class="ywmain">
        <div class="titlebox">
          <div class="one">业务预约</div>
          <div class="two">预约记录》</div>
        </div>
        <div class="ywyybox">
          <div class="ywyy oranjb">
            <div>
              <div class="ywtxt1">身份证业务</div>
              <div class="ywtxt2">办理预约</div>
            </div>
            <img src="../../assets/images/sfzyw.png" class="zfzywimg" />
          </div>
          <div class="ywyy skyjb">
            <div>
              <div class="ywtxt1 blue1">户籍业务</div>
              <div class="ywtxt2 sky1">办理预约</div>
            </div>
            <img src="../../assets/images/hjyw.png" class="zfzywimg" />
          </div>
        </div>

        <div class="titlebox">
          <div class="one">
            <span class="pritxt">材料证明</span>
            <span class="sectxt">(群众申请，寄回到付)</span>
          </div>
          <div class="two">申请记录》</div>
        </div>
        <img src="../../assets/images/bggzzm.png" class="bggzbj" />

        <div class="ywclbox">
          <div class="ywcl">
            <div>
              <p class="cltxt1">无犯罪记录</p>
              <p class="cltxt2">证明申请</p>
            </div>
            <img src="../../assets/images/ywcl1.png" class="ywclimg1">
          </div>
          <div class="ywcl">
            <div>
              <p class="cltxt1">补领/换领</p>
              <p class="cltxt2">户口簿</p>
            </div>
            <img src="../../assets/images/ywcl2.png" class="ywclimg2">
          </div>
          <div class="ywcl">
            <div>
              <p class="cltxt1">亲属关系</p>
              <p class="cltxt2">证明</p>
            </div>
            <img src="../../assets/images/ywcl3.png" class="ywclimg1">
          </div>
          <div class="ywcl">
            <div>
              <p class="cltxt1">开具户籍</p>
              <p class="cltxt2">证明</p>
            </div>
            <img src="../../assets/images/ywcl4.png" class="ywclimg2">
          </div>
        
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.homebg {
  width: 100%;
  // height: 1810px;
  background-color: #f6f9fb;
  padding-bottom: 50px;
  .titlebox {
    height: 114px;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    line-height: 140px;
    .one {
      font-size: 34px;
      font-family: Source Han Sans CN;
      font-weight: 600;
      color: #1b1b1b;
      .pritxt {
        font-weight: 600;
      }
      .sectxt {
        font-size: 26px;
        color: #768087;
      }
    }
    .two {
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #768087;
    }
  }

  .jbtop {
    width: 100%;
    // height: 756px;
    padding: 31px 20px 0;
    background: url(../../assets/images/jbtop.png) no-repeat;
    background-size: 100% 100%;
    .topbj {
      width: 100%;
      height: 304px;
      display: block;
    }

    .jjzslbj {
      width: 100%;
      height: 138px;
      display: block;
      border-radius: 17px;
    }
    .ywblbox {
      display: flex;
      justify-content: space-between;
      padding: 40px 0 0;
      .ywbl {
        width: 25%;
        height: 170px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .ywimg {
          width: 109px;
          height: 94px;
          margin-bottom: 20px;
        }
        .ywtxt {
          font-size: 30px;
          font-family: Source Han Sans CN;
          color: #426987;
          text-align: center;
        }
      }
    }
  }
  .ywmain {
    width: 100%;
    padding: 31px 20px 0;
    .ywyybox {
      display: flex;
      justify-content: space-around;
      .ywyy {
        width: 346px;
        height: 153px;
        border-radius: 17px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 30px;
        &.oranjb {
          background: linear-gradient(90deg, #ffedca, #ffd27a);
        }
        &.skyjb {
          background: linear-gradient(90deg, #c5e7ff, #8ac5fb);
        }
        .zfzywimg {
          width: 156px;
          height: 128px;
        }
        .ywtxt1 {
          font-size: 30px;
          color: #ea8539;
          line-height: 36px;
          &.blue1 {
            color: #3277b4;
          }
        }
        .ywtxt2 {
          font-size: 26px;
          color: #f8b079;
          line-height: 36px;
          &.sky1 {
            color: #8ac4f7;
          }
        }
      }
    }
    .bggzbj {
      width: 100%;
      height: 139px;
      display: block;
      border-radius: 17px;
    }
    .ywclbox {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 25px;
      .ywcl {
        width: 346px;
        height: 143px;
        background: #ffffff;
        border-radius: 17px;
        margin-bottom: 18px;
        display: flex;
        justify-content: space-between;
        padding: 33px 22px;
        .cltxt1{
          color: #282B2E;
          font-size: 30px;
          line-height: 36px;
          font-weight: 500;
        }
        .cltxt2{
          color: #BAD0E0;
          font-size: 30px;
          line-height: 36px;
        }
        .ywclimg1{
          width: 82px;
          height: 86px;
          display: block;
        }
        .ywclimg2{
          width: 99px;
          height: 72px;
        }
      }
    }
  }
}
</style>