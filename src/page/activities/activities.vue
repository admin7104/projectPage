<template>
    <div class="">
        <head-top :head-title="profiletitle" go-back="true"></head-top>
        <ul class="items top_container">
          <li v-for="n in 5">
            <img src="../../images/activities/banner.jpg"/>
            <div class="mask_container">
              <div class="mask">

              </div>
                <p>
                  活动已结束
                </p>
            </div>
          </li>
        </ul>
    </div>
</template>

<script>
import headTop from 'src/components/header/head'
import {mapState, mapMutations} from 'vuex'


export default {

    data(){
        return{
            profiletitle: '精彩活动',
        }
    },
    mounted(){

    },
    components:{
        headTop,
    },

    computed:{

    },

    methods:{

    },
    watch: {

    }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
   @import '../../style/mixin';
  .items{
    li:first-child{
      margin-top: 0.2rem;
    }
    li{
      position: relative;
      /*margin-top: 0.5rem;*/
      img{
        width: 92%;
        margin-left: 4%;
        position: relative;
        top: 0.16rem;
        padding-top: 0.1rem;
        /*padding-top: 0.35rem;*/
      }
      .mask_container{
        width: 100%;
        height: 100%;
        .mask{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: #fff;
          opacity: 0.5;
        }

        p{
          @include sc(0.6rem,#333);
          background: #fff;
          width: 100%;
          opacity: 0.9;
          height: 1.5rem;
          line-height: 1.5rem;
          position: absolute;
          top: 0;
          margin: auto;
          bottom: 0;
          text-align: center;
        }
      }
    }
  }
</style>
