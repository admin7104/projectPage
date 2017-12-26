<template>
  <div class="link_page">
    <head-top head-title="链接" go-back='true'></head-top>
    <div class="contain">
      <!--<iframe v-show="" id="show-iframe"  frameborder=0 name="showHere" scrolling=auto src="www.baidu.com"></iframe>-->
      <iframe class="iframe_container" width="100%" height="100%" seamless frameborder="0" src="http://www.baidu.com"></iframe>
    </div>
  </div>
</template>

<script>
  import headTop from 'src/components/header/head'
  import {mapState, mapMutations} from 'vuex'

  export default {
    data(){
      return{
      }
    },
    mounted(){
      this.initData();
    },
    components: {
      headTop,
    },
    computed: {
    },
    methods: {
      ...mapMutations([
//        'CLEAR_CART'
      ]),
      async initData(){
      }
    },
    watch: {
//      userInfo: function (value){
//        this.initData();
//      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../style/mixin';
  .link_page
  {
    background: #fff;
    .contain {
      .iframe_container{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin-top: 2rem;
      }
    }
  }

</style>
