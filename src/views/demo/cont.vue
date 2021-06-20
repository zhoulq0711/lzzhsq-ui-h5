<template>
  <div class="box">
      <van-tabs v-model="active" title-active-color='#1F82FF' color="#1F82FF">
        <van-tab title="单位信息">
            <div class="editpicbox">
                <h2>福建天创信息科技有限公司</h2>
                <div class="cpic">
                    <img :src="url"/>
                </div>
                <div class="flexcenter">
                 <van-uploader  :after-read="afterRead" :max-count="1">
                     <div class="up_btn">修改图片</div>
                </van-uploader>
                </div>
            </div>
            <div class="cardinfo">
                <h2>企业介绍</h2>
                <div class="texts">
                    福州注册地位于福州市闽侯县上街镇科技东路8号创业大 16-17层，法定代表人为林林林。经营范围包括电子技来 术开发及技术服务、
                </div>
                 <div class="listbox_b">
                    <em class="icon1"></em>
                    <em class="icon2"></em>
                    <em class="icon3"></em>
                    <em class="icon4"></em>
                    <van-popover
                        v-model="showPopover"
                        trigger="click"
                        :actions="actions"
                        placement='top-end' 
                        theme="dark"
                        >
                    </van-popover>
                </div>
            </div>
        </van-tab>
        <van-tab title="公安机关日常检查"></van-tab>
        <van-tab title="从业人员信息"></van-tab>
        <van-tab title="案事件信息"></van-tab>
        
    </van-tabs>
  </div>
</template>

<script>
export default {
    data(){
        return {
            active: 0,
            url:'https://img01.yzcdn.cn/vant/leaf.jpg',
            showPopover: false,
            actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
        };
    },
    methods: {
        afterRead(file) {
         this.url= file.content
    },
    },
    mounted() {
        
    },
}
</script>

<style lang="scss" scoped>
    .editpicbox{
         background: #fff;
         margin-top:20px;
         h2{font-size: 30px; padding:40px 20px; font-weight: bold;}
         .cpic{ 
             width: 680px; height: 336px; margin:0 auto;
             img{ width: 680px; height: 336px; border-radius: 20px;}
         }
         .flexcenter{ display: flex; justify-content: center;}
         .up_btn{ 
           width: 680px; height: 80px; border: solid 1px #E9E9E9; text-align: center;  line-height: 80px; margin:20px auto 40px auto;font-size: 22px; color: #aaa; display: flex; align-items: center; justify-content: center;
           em{ width: 36px; height: 36px; background: url(../../assets/images/addimg.png) no-repeat 0 0; background-size:100%; display: inline-block; margin-right: 20px;}
         }
    }
    .cardinfo{
        margin-top:20px;background: #fff;
        h2{font-size: 32px; padding:40px 20px 20px 20px; font-weight: bold;}
        .texts{ padding:22px; font-size: 24px; color: #666666; line-height: 42px;}
    }
    .listbox_b{ height: 80px;
        padding: 35px 25px;
        box-sizing: border-box;
        border-top:solid 1px #E9E9E9;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        em{display: block; margin-left: 40px;  width: 40px;height: 40px; }
        .icon1{
          
            background: url(../../assets/images/l1.png) no-repeat 0 0;
            background-size:100% ;
        }
        .icon2{
          
            background: url(../../assets/images/l2.png) no-repeat 0 0;
            background-size:100% ;
        }
        .icon3{
            
            background: url(../../assets/images/l3.png) no-repeat 0 0;
            background-size:100% ;
        }
        .icon4{
           
            background: url(../../assets/images/l4.png) no-repeat 0 0;
            background-size:100% ;
        }
        .van-popover__wrapper{
            display: block; margin-left: 40px;  width: 40px;height: 40px;
            background: url(../../assets/images/l5.png) no-repeat 0 0;
            background-size:100% ;
        }
    }
</style>