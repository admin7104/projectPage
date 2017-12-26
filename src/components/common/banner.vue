<template>
  <div class="page-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item class="swiper-slide" v-for="str in listImg" :style="{ background: 'url(' + str.url + ')no-repeat center',backgroundSize:'100% 100%' }"    v-on:click="gotoAddress('/order')"></mt-swipe-item>
      <!--<mt-swipe-item class="slide1"></mt-swipe-item>-->
      <!--<mt-swipe-item class="slide2"></mt-swipe-item>-->
      <!--<mt-swipe-item class="slide3"></mt-swipe-item>-->
    </mt-swipe>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
  .mint-swipe {
    height: 10rem;
    color: #fff;
    font-size: 30px;
    text-align: center;

    /*width: 100%;*/
    /*margin-bottom: 20px;*/
  }
  /*.swiper-slide {background-size: 100% 100%;}*/
  .mint-swipe-item {
    line-height: 200px;
  }
  /*.slide1 {*/
    /*background: url("http://images.faster-cat.com//upload/link/20171112/20171112112953_82.jpg") no-repeat center;*/
    /*background-size: 100% 100%;*/
  /*}*/
  /*.slide2 {*/
    /*background: url("http://images.faster-cat.com//upload/link/20171101/20171101004220_918.png")  no-repeat center;*/
    /*background-size: 100% 100%;*/
  /*}*/
  /*.slide3 {*/
    /*background: url("http://images.faster-cat.com//upload/link/20171101/20171101004251_474.png")  no-repeat center;*/
    /*background-size: 100% 100%;*/
  /*}*/
</style>

<script>
  export default {
    props: ['listImg'],
    mounted() {
      console.log('mounted', this);
    },
    methods: {
      gotoAddress(path){
        alert(111)
        console.log(1111)
        this.$router.push(path)
      }
    },
  }
</script>
