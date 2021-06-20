<template>
  <div class="box">
       <div class="fail"><!-- fail or success class-->
            <div class="retrunico">
            </div>
            <div class="ts_txt">提交成功，等待审核中</div>
            <div class="ts_txt0">提交失败，请重新提交</div>
            <div class="ts_txt1">预计审核将在48小时内完成请通过个人中心，微信提示查看审查结果</div>
            <div class="ts_txt2">很抱歉，您的材料提交失败 请重新检查并上传您的材料</div>
            <div class="btnbox">
                <div class="btns up">上一步</div><div class="btns">返回首页</div>
            </div>
       </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .success .retrunico{width: 200px; height: 200px; margin:160px auto 0 auto; background: url(../../assets/images/s.png) no-repeat 0 0; background-size:100% ; margin-bottom: 20px;}
  .retrunico img{ width: 100%;}
  .success .ts_txt{ color: #99CC00; font-size: 36px; text-align: center;}
  .ts_txt1{font-size: 30px; color:#AAAAAA; text-align: center; width: 520px; margin: 30px auto 0 auto; line-height: 42px;}
  .success .ts_txt2{display:none;}
  
  .success .ts_txt0{display: none;}
  .fail .ts_txt, .fail .ts_txt1,.success .up{display:none}
  .btnbox{ display: flex; justify-content: center; margin-top:80px}
  .btns{width: 200px;
    height: 60px;
    background: #FCFDFE;
    border: 2px solid #2682FD;
    border-radius: 6px;
    font-size: 32px; text-align: center; line-height: 55px; margin:0 10px}
 .fail .retrunico{width: 200px; height: 200px; margin:160px auto 0 auto; background: url(../../assets/images/f.png) no-repeat 0 0; background-size:100% ; margin-bottom: 20px;}
 .fail .ts_txt2{display:block;font-size: 30px; color:#AAAAAA; text-align: center; width: 360px; margin: 30px auto 0 auto; line-height: 42px; font-weight: bold;}
 .fail .ts_txt0{display:block;color: #FF8800; font-size: 36px; text-align: center;}
</style>