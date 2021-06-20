<template>
  <van-nav-bar
    :title="titles"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    class="tchnav"
    fixed
  >
  </van-nav-bar>
</template>

<script>
export default {
  data() {
    return {
      titles: "",
    };
  },
  watch:{
    '$store.state.title'(val){
        this.titles = this.$store.state.title;
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.titles = this.$store.state.title;
  },
};
</script>

<style lang="scss">
.tchnav {
  background-color: #1F82FF!important ;
  .van-nav-bar__content {
    .van-nav-bar__left {
        .van-nav-bar__text{
           color: #fff ; 
        }
        .van-icon-arrow-left::before{
            color: #fff ;
        }
      .van-nav-bar .van-icon {
        color: #fff ;
      }
    }
  }
}

.van-nav-bar__title {
  color: #fff !important;
}
</style>