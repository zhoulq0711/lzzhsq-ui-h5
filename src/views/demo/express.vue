<template>
   <div class="box">
        <div class="title_nav">
            <i></i>
            办件信息
        </div>
        <div class="infomsg">
            <div class="cellbox">
                <div class="cellbox_l">项目事项</div>
                <div class="cellbox_r bluez">身份证办理</div>
            </div>
             <div class="cellbox">
                <div class="cellbox_l">办理单位</div>
                <div class="cellbox_r bluez">长沙市公安局人口与出入境接待大厅</div>
            </div>
             <div class="cellbox">
                <div class="cellbox_l">业务数据</div>
                <div class="cellbox_r bluez">人员 张亚</div>
            </div>
             <div class="cellbox">
                <div class="cellbox_l">业务状态</div>
                <div class="cellbox_r bluez">待评价</div>
            </div>
        </div>
        <div class="title_nav">
            <i></i>
            快递信息
        </div>
        <div class="infomsg">
            <div class="cellbox">
                <div class="cellbox_l">快递公司</div>
                <div class="cellbox_r bluez">顺丰速运</div>
            </div>
             <div class="cellbox">
                <div class="cellbox_l">快递单号</div>
                <div class="cellbox_r bluez">3569  7223  1221  0092</div>
                <div class="ck">查看物流</div>
            </div>
        </div>
        <!--富文本-->
        <!-- <div class="title_nav">
            <i></i>
            快递信息
        </div> -->
        <!-- <div class="infomsg">
            <div class="cellbox">
                <div class="cellbox_l">项目事项</div>
                <div class="cellbox_r bluez">身份证办理</div>
            </div>
             <div class="cellbox">
                <div class="cellbox_l">办理单位</div>
                <div class="cellbox_r bluez">长沙市公安局人口与出入境接待大厅</div>
            </div>
            <div class="cellbox">
                <div class="cellbox_l">业务数据</div>
                <div class="cellbox_r bluez">人员 张亚</div>
            </div>
             <div class="cellbox">
                <div class="cellbox_l">业务状态</div>
                <div class="cellbox_r bluez">待评价</div>
            </div>
             <div class="cellbox">
                <div class="cellbox_l">收货地址</div>
                <div class="cellbox_r bluez">湖南省长沙市长沙县元开路长沙市人民警察北大门9栋307单元<br/>13799417259</div>
            </div>
        </div> -->
        <van-button type="info" class="bottom_btn">确认收货</van-button>
   </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
  .infomsg{background: #fff;}
  .cellbox{display: flex; font-size: 26px; padding: 30px; box-sizing: border-box; border-bottom: solid 1px #E8E8E8; align-items: center;}
  .cellbox:last-child{border: none;}
  .cellbox_l{color: #666666; margin-right: 50px; min-width:120px}
  .cellbox_r{ color: #333;}
  .bluez{color: #1F82FF;}
  .ck{ margin-left:auto ; background: #2682FD; width: 140px; height: 48px; border-radius:30px;text-align: center; line-height: 48px; color: #fff;}
</style>