<template>
  <div class="box" style="padding-top:0">
       <router-view></router-view>
       <bNav @clickbtn ='goto'></bNav>
  </div>
</template>

<script>
import bNav from "../../components/navbottom.vue"
export default {
    data(){
        return{

        }
    },
    components:{bNav},
    methods: {
       goto(e){
           if(e == 0){
               this.$router.push({name:'main'});
           }else if(e == 2){
               this.$router.push({name:'my'});
           }
       }
    },
    mounted() {
        
    },
}
</script>

<style>

</style>