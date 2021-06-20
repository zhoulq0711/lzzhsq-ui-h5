<template>
  <div class="box">
      <div class="editlist">
           <div class="editbox">
               <div class="edittop">
                <div class="editbox_l">
                    <img src="../../assets/images/moneyicon.png"/>
                    <p>设备</p>
                </div>
                <div class="editbox_r">
                    <div><em>单位名称：</em><span>福建睿智科技有限公司</span></div>
                    <div><em>申报单位：</em><span>长沙市公安局雨花分局人口与出入境大厅</span></div>
                    <div><em>办理时间：</em><span>2018.06.07 15:34:34</span></div>
                    <div><em>设备状态：</em><span class="blue">正常</span></div>
                </div>
               </div>
               <div class="editbottom">
                    <div class="btn">取消登记</div>
                    <div class="btn1">重新登记</div>
               </div>
           </div>
           <div class="editbox">
               <div class="edittop">
                <div class="editbox_l">
                    <img src="../../assets/images/moneyicon.png"/>
                    <p>设备</p>
                </div>
                <div class="editbox_r">
                    <div><em>单位名称：</em><span>福建睿智科技有限公司</span></div>
                    <div><em>申报单位：</em><span>长沙市公安局雨花分局人口与出入</span></div>
                    <div><em>办理时间：</em><span>2018.06.07 15:34:34</span></div>
                    <div><em>设备状态：</em><span class="blue">正常</span></div>
                </div>
               </div>
               <div class="editbottom">
                    <div class="btn">取消登记</div>
                    <div class="btn1">重新登记</div>
               </div>
           </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .editlist{
        .editbox{
           margin-bottom: 20px;
           border-bottom:solid 1px #FCFDFE;
           background: #fff;
           .edittop{
                width: 100%;
                padding:30px;
                 display: flex; 
            .editbox_l{ 
                text-align: center;
                width:78px;
                img{ width: 78px; height: 78px;}
                p{ font-size:22px; color: #FF8800;}
            }
            .editbox_r{
                width: 580px;
                margin-left: 50px;
                font-size: 26px;
                div:last-child{margin: 0;}
                div{
                    display: flex;
                    width: 580px;
                    margin-bottom:20px;
                    em{ width: 130px;}
                    span{ width: 410px; color: #999999; display: block;}
                    .blue{color:#2682FD ; font-size: 28px;}
                }
                
            }
           }
           .editbottom{
               height: 80px;
                padding: 35px 25px;
                box-sizing: border-box;
                border-top:solid 1px #E9E9E9;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                .btn{
                     width: 120px;
                     height: 50px;
                     text-align: center;
                     line-height: 50px;
                     color:#2682FD ;
                     font-size: 26px;
                     border:solid 1px #2682FD
                }
                .btn1{
                     width: 120px;
                     height: 50px;
                     text-align: center;
                     line-height: 50px;
                     color:#fff ;
                     font-size: 26px;
                     background: #FF8800;
                     border:solid 1px #FF8800;
                     margin-left:30px;
                }
            }
        }
    }
</style>