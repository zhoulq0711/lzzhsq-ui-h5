<template>
  <div class="bnav">
      <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">导航</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {

    data(){
        return{
            active:0
        }
    },
    watch:{
        $route: {
      handler: function(to,from){
          if(to.name == 'my'){
              this.active = 2
          }else if(to.name == 'main'){
              this.active = 0 
          }
      },
      deep: true,
      immediate: true
      }
    },
    methods: {
        onChange(e) {
           this.$emit('clickbtn',e)
        },
    },
    
}
</script>

<style>
 
</style>