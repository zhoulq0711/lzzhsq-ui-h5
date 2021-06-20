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
        placeholder="请输入编号搜索您预约的业务"
      />
    </div>
    <div class="list">
        <div class="listbox">
            <div class="listbox_t" @click="open">
                <div class="listbox_t_l">
                    <img src="../../assets/images/lefticon.png">
                </div>
                <div class="listbox_t_r">
                    <p class="f28">预约编号：<em>36023000001</em></p>
                    <p class="f24">预约时间：<em>2018-05-04  09:30~10:00</em></p>
                </div>
                <div class="listbox_t_type">
                        <div class="btns" v-if='type == 1 || type == 3'>编辑修改</div>
                        <van-icon :name="show ? 'arrow-up' :'arrow-down'"/>
                </div>
            </div>
            <div class="listbox_b" v-if="show">
                 <div class="cellbox">
                 <div class="cell">
                     <div class="cell_l">业务名称</div>
                     <div class="cell_r">一周岁内国内出生申报</div>
                 </div>
                 <div class="cell">
                     <div class="cell_l">身份证号码</div>
                     <div class="cell_r">350322199006222532</div>
                 </div>
                 <div class="cell">
                     <div class="cell_l">办理单位</div>
                     <div class="cell_r">长沙市公安局人口与出入境接待大厅</div>
                 </div>
                 <div class="cell">
                     <div class="cell_l">业务状态</div>
                     <div class="cell_r blue">还未办理</div>
                 </div>
                 </div>
                 <div class="editbox" v-if='type == 2 || type==3'>
                     <van-icon name="delete-o" />
                     <van-icon name="edit" />
                 </div>
            </div>
        </div>
        <div class="listbox">
            <div class="listbox_t">
                <div class="listbox_t_l">
                    <img src="../../assets/images/lefticon.png">
                </div>
                <div class="listbox_t_r">
                    <p class="f28">预约编号：<em>36023000001</em></p>
                    <p class="f24">预约时间：<em>2018-05-04  09:30~10:00</em></p>
                    
                </div>
                <div class="listbox_t_type">
                        已取号
                </div>
            </div>
            
        </div>
        <div class="listbox grey">
            <div class="listbox_t">
                <div class="listbox_t_l">
                    <img src="../../assets/images/lefticon1.png">
                </div>
                <div class="listbox_t_r">
                    <p class="f28">预约编号：<em>36023000001</em></p>
                    <p class="f24">预约时间：<em>2018-05-04  09:30~10:00</em></p>
                </div>
                <div class="listbox_t_type">
                        已过号
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
            show:false,
            value1: 0,
            value2: "a",
            value3:'',
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
            type:''

                }
            },
            
     methods: {
         open(){
             if(this.show){
                this.show = false
             }else{
                 this.show = true
             }
             
         }
     },
     mounted() {
          this.type = this.$route.query.show
     },
}
</script>
<style lang="scss" scoped>

.searchbox {
  .van-search__content {
    background-color: #fff;
    .van-field__control::placeholder{
        color: #BBB;
    }
   .van-icon-search::before{
        color: #BBB;
    }
  }
   
}
.list{
    .listbox{
        border-top: solid 1px #E8E8E8;
        border-bottom: solid 1px #E8E8E8;
        background: #fff;
        margin-bottom:20px;
        .listbox_t{
             padding: 30px 20px;
             display: flex;
             align-items: center;
             .listbox_t_l,.listbox_t_l img{ width: 76px; height: 76px;}
             .listbox_t_r{ 
                 margin-left: 20px;
                 .f28{
                     font-size: 28px; margin-bottom: 25px;
                     em{font-style:normal; color: #1E7DF3;}
                 }
                 .f24{ font-size: 24px;
                     em{font-style:normal; color: #999;}
                 }
                 
             }
             .listbox_t_type{font-size: 22px; color: #1E7DF3; margin-left: auto; text-align: center;}
        }
        .listbox_b{
            border-top:solid 1px #E8E8E8; 
            .cellbox{ padding: 30px;}
            .cell{display:flex; font-size: 26px;margin-bottom:30px;}
            .cell:last-child{margin: 0;}
            .cell_l{ width: 180px;  color: #666666;}
            .blue{ color: #1E7DF3;}
        }
    } 
}
.editbox{ border-top:solid 1px #E8E8E8;margin-top:20px; padding:20px; text-align: right;}
.editbox i{ margin:0 10px;}
.grey .listbox_t_type,.grey em,.grey{ color: #999 !important;}
.btns{ width: 121px; height: 47px; text-align: center; line-height: 47px; color: #fff; background: #FF9900; border-radius: 20px; margin-bottom:20px}
</style>
