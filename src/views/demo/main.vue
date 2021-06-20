<template>
      <div class="index">
           <div class="topbg"></div>
           <div class="jdpic"><img src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/123624/24/2195/99979/5ec3a165E12b276e2/2e5b8a2606fbabfe.jpg!q70.jpg.dpg"></div>
           <div class="iconlist">
            <van-grid :column-num="4" :border="false">
             <van-grid-item>
                 <p class="iconimg"><img src="../../assets/images/v1.png"></p>
                 <p class="icontxt">我要签到</p>
              </van-grid-item>
              <van-grid-item>
                 <p class="iconimg"><img src="../../assets/images/v2.png"></p>
                 <p class="icontxt">我要巡逻</p>
              </van-grid-item>
              <van-grid-item>
                 <p class="iconimg"><img src="../../assets/images/v3.png"></p>
                 <p class="icontxt">群防任务</p>
              </van-grid-item>
               <van-grid-item>
                 <p class="iconimg"><img src="../../assets/images/v4.png"></p>
                 <p class="icontxt">随手拍</p>
              </van-grid-item>
               </van-grid>
           </div>
           <div class="iconnav">
               <div class="iconnav_title">互帮互助</div>
               <div class="iconbox">
                   <div class="icons">
                        <div class="texts">社会求助</div>
                        <div class="texts1">寻求帮助</div>
                   </div>
                    <div class="icons1">
                        <div class="texts">我来服务</div>
                        <div class="texts1">服务他人</div>
                    </div>
               </div>
           </div>
           <div class="iconnav mt30">
                <div class="iconnav_title">热门推荐</div>
                <div class="w700">
                    <div class="hotbox">
                        <p><img src="../../assets/images/hot1.png"></p>
                        <div class="hottxt">居住人申报</div>
                    </div>
                    <div class="hotbox">
                        <p><img src="../../assets/images/hot2.png"></p>
                        <div class="hottxt">人脸开门</div>
                    </div>
                    <div class="hotbox">
                        <p><img src="../../assets/images/hot3.png"></p>
                        <div class="hottxt">出租屋申报</div>
                    </div>
                    <div class="hotbox">
                        <p><img src="../../assets/images/hot4.png"></p>
                        <div class="hottxt">自助开锁</div>
                    </div>
                </div>
           </div>
            <div class="iconnav mt30 w100">
                <div class="iconnav_title">其他服务</div>
                <van-grid :column-num="4" :border="false">
                <van-grid-item>
                    <p class="iconimg"><img src="../../assets/images/i_1.png"></p>
                    <p class="icontxt">身份信息</p>
                </van-grid-item>
                 <van-grid-item>
                    <p class="iconimg"><img src="../../assets/images/i_2.png"></p>
                    <p class="icontxt">身份信息</p>
                </van-grid-item>
                 <van-grid-item>
                    <p class="iconimg"><img src="../../assets/images/i_3.png"></p>
                    <p class="icontxt">身份信息</p>
                </van-grid-item>
                 <van-grid-item>
                    <p class="iconimg"><img src="../../assets/images/i_4.png"></p>
                    <p class="icontxt">身份信息</p>
                </van-grid-item>
                 <van-grid-item>
                    <p class="iconimg"><img src="../../assets/images/i_5.png"></p>
                    <p class="icontxt">身份信息</p>
                </van-grid-item>
                </van-grid>
            </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>
.index{ width: 750px; overflow:hidden;position: relative;}
.van-grid-item__content{background: #F8F8F8}
.w100 .van-grid-item__content{background: #fff;}
.topbg{width: 800px;
    height: 350px;
    background: linear-gradient(0deg, #0B56D7 0%, #2D79FE 100%);
    border-radius: 50%;
    position:absolute;
    top:-110px;
    left: -400px;
    margin-left: 50%;
}
.jdpic{ width: 680px; height: 303px; border-radius: 20px; overflow: hidden; position: relative; z-index: 1; margin: 30px auto;}
.jdpic img{ width: 100%; height: 100%;}
.iconlist{ margin: 40px auto;}
.iconimg{ width: 91px; height: 91px; overflow:hidden}
.iconimg img{ width: 100%;}
.icontxt{font-size: 28px; margin-top:15px; color: #1A1A1A;}
.iconnav_title{ font-size: 34px; color: #383838;}
.iconnav{ width:100%; background: #fff; padding: 32px; box-sizing: border-box; margin:0 auto}
.iconbox{display: flex; justify-content: space-between; margin-top:30px}
.iconbox div{ border-radius: 10px;}
.iconbox .icons{ width: 334px; height: 149px; background: url("../../assets/images/ad1.png") no-repeat 0 40px #ECF2FD; background-size:100% ;}
.iconbox .icons1{ width: 334px; height: 149px; background: url("../../assets/images/ad2.png") no-repeat 0 40px #FAEFE8;background-size:100% ;}
.iconbox .icons .texts{font-size: 30px; margin:20px 0 10px 30px}
.iconbox .icons .texts1{font-size: 22px; color: #fff;  background: #5F90F2;width:110px;height: 38px; border-radius:0; text-align: center; line-height: 38px; margin:15px 0 0 30px}
.iconbox .icons1 .texts{font-size: 30px; margin:20px 0 10px 30px}
.iconbox .icons1 .texts1{font-size: 22px; color: #fff;  background:#F27346;width:110px;height: 38px; border-radius:0; text-align: center; line-height: 38px; margin:15px 0 0 30px}
.mt30{margin-top:30px}
.w700{ width: 700px; display: flex; justify-content: space-between; margin-top:20px}
.hotbox{ width: 157px;height: 171px;background: #FFFFFF;box-shadow: 0px 0px 18px 0px rgba(199, 199, 212, 0.15);border-radius: 10px;}
.hotbox p{ width: 38px; height: 38px; margin:30px auto}
.hotbox p img{ width: 100%;}
.hotbox .hottxt{font-size: 24px; color: #686C73; text-align: center;}
.w100{ width: 100%; padding-bottom: 100px;}
</style>