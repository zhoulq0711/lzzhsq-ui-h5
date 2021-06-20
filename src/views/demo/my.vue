<template>
  <div class="my">
      <div class="useinfo">
          <div class="usebox">
            <div class="useinfo_l"><img src="../../assets/images/useface.png"></div>
            <div class="useinfo_m">
              <p>Hi，李xx</p>
              <p>人员类型：单位志愿者</p>
            </div> 
            <div class="useinfo_r">
              系统版本：1.3.1
            </div>
          </div>
          <div class="usejf">
             <p><span>当前积分</span><span>843</span></p>
             <p><span>当前积分</span><span>843</span></p>
          </div>
          <div class="shequbox">
               <div class="shequ">
                   <p>单位名称</p>
                   <p>天创社区1</p>
               </div>
               <div class="shequ">
                   <p>单位名称</p>
                   <p>天创社区1</p>
               </div>
          </div>
          <div class="iconlist">
           <div class="bbox">
           <van-grid :column-num="3" :border="false">
             <van-grid-item>
                 <p class="iconimg"><img src="../../assets/images/i1.png"></p>
                 <p class="icontxt">身份信息</p>
              </van-grid-item>
              <van-grid-item>
                 <p class="iconimg"><img src="../../assets/images/i2.png"></p>
                 <p class="icontxt">事务中心</p>
              </van-grid-item>
              <van-grid-item>
                 <p class="iconimg"><img src="../../assets/images/i3.png"></p>
                 <p class="icontxt">发布任务</p>
              </van-grid-item>
              <van-grid-item>
                 <p class="iconimg"><img src="../../assets/images/i4.png"></p>
                 <p class="icontxt">常用社区关注</p>
              </van-grid-item>
              <van-grid-item>
                 <p class="iconimg"><img src="../../assets/images/i5.png"></p>
                 <p class="icontxt">修改密码</p>
              </van-grid-item>
              <van-grid-item>
                 <p class="iconimg"><img src="../../assets/images/i6.png"></p>
                 <p class="icontxt">我的积分</p>
              </van-grid-item>
              <van-grid-item>
                 <p class="iconimg"><img src="../../assets/images/i7.png"></p>
                 <p class="icontxt">信息上报处置</p>
              </van-grid-item>
              <van-grid-item>
              </van-grid-item>
              <van-grid-item>
              </van-grid-item>
          </van-grid>
           </div>
            <div style="margin-top: 30px; padding-bottom:100px">
              <van-button block type="info" native-type="submit">退出</van-button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.useinfo{ width: 100%; background: #3D66DC; max-height: 450px; border: 1px solid transparent;} 
.usebox{display: flex; align-items: center; margin: 30px 0 70px 30px;}
.useinfo_l{ width: 102px; height: 102px; border-radius:50% ; overflow: hidden;}
.useinfo_l img{ width: 100%; height: 100%;}
.useinfo_m {font-size: 33px; color: #fff; margin-left: 40px;}
.useinfo_m p:last-child {font-size: 20px; color: #AAC0FF; background: #264EBF; padding: 5px 10px; border-radius:20px; margin-top: 20px;}
.useinfo_r{width: 180px;height: 50px;line-height:50px;font-size: 24px;background: #FFB81E;border-radius: 26px 0px 0px 26px;margin-left: auto;color: #fff;
box-sizing: border-box;
padding-left: 10px;
}
.usejf{ width: 700px; background: #4479ED; margin:0 auto;font-size: 26px;  border-radius: 20px; padding:20px 68px; box-sizing:border-box;}
.usejf p {display: flex; justify-content: space-between; align-items: center;}
.usejf p:last-child{margin-top:20px}
.usejf p span:first-child{color: #C5D2F8; font-size: 26px;}
.usejf p span{color:#FFB81E; font-size: 36px;}
.shequbox{width: 700px; background: #fff; margin:0 auto;font-size: 26px;  border-radius: 20px; padding:50px 68px; box-sizing:border-box; margin-top:30px;display: flex;}
.shequ{flex:1;}
.shequ p:first-child{ color: #AEB5D8; font-size: 24px; margin-bottom:38px}
.shequ p{ color: #353B5C; font-size: 32px;}
.iconlist{ width: 700px; margin: 40px auto;}
.iconimg{ width: 91px; height: 91px; overflow:hidden}
.iconimg img{ width: 100%;}
.icontxt{font-size: 28px; margin-top:15px; color: #1A1A1A;}
.bbox{ background: #fff;}
</style>