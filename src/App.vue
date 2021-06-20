<template>
  <div id="app"> 
    <navTop v-if="show"></navTop>
    <router-view />
  </div>
</template>
<script>
import { Toast } from "vant";
import navTop from "./components/navtop.vue";
export default {
  data() {
    return {
      show: "",
    };
  },
  watch: {
    "$store.state.show_topnav"(val) {
      this.show = val;
    },
  },
  mounted() {
    this.show = this.$store.state.show_topnav;
  },
  components: { navTop },
};
</script>

