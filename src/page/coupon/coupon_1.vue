<template>
    <div class="">
        <head-top :head-title="profiletitle" go-back="true"></head-top>
      <div class="tab_type">
        <ul class=" ">
          <li class="tab_sel">
            <router-link :to="{path: '/coupon_1'}" class="title">
              红包券
            </router-link>
          </li>
          <li>
            <router-link :to="{path: '/coupon_2'}" class="title">
              加息券
            </router-link>
          </li>
          <li>
            <router-link :to="{path: '/coupon_3'}" class="title">
              现金券
            </router-link>
          </li>
        </ul>
      </div>
        <ul class="tab_infos">
          <li v-for="n in 3" :style="0?{backgroundImage: 'url(' + img + ')'}:{backgroundImage: 'url(' + img2 + ')'}" >
              <div class="block_left">
                  <p class="p1">
                    168元
                  </p>
                  <p>
                    红包券
                  </p>
              </div>
              <div class="block_right">
                <h4>
                  注册红包168元
                </h4>
                <p>
                  可用产品：1月标以上
                </p>
                <p>
                  使用规则：投资满500元以上
                </p>
                <p>
                  有效期限至2017.08.05
                </p>
                <img class="img_status" v-show="true" v-bind:src="img_status"/>
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
            profiletitle: '理财券',
            img: require('../../images/account/coupon/bg_1.png'),
            img2: require('../../images/account/coupon/bg_1_disable.png'),
            img_status:require("../../images/account/coupon/expired.png")
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
  .tab_type{
    padding-top: 2.4rem;
    position: fixed;
    background: #f5f5f5;
    top: 0;
    width: 100%;
    /*left:0.8936rem;*/
    z-index: 999;
    ul{
      @include wh(14.2553rem,1.2766rem);
      line-height:1.2766rem ;
      margin-left: 0.8936rem;
      .tab_sel {background: #ff5600;
        .title{
          color: #fff;
        }
      }
      li{
        float: left;
        @include sc(0.5106rem,#fc5c3f);
        @include bg();
        width: 33.3%;
        text-align: center;
        border: 1px solid #ff5803;

        .title{
          width: 100%;
          height: 100%;
          display: inline-block;
        }
      }
      li:first-child{
        border-right: none;
        border-radius:5px 0 0  5px;
      }
      li:last-child{
        width: 33.4%;
        border-left: none;
        border-radius: 0 5px 5px 0;
      }
    }

  }
  .tab_infos{
    margin-top: 4.2766rem;
    z-index: 998;
    li{
      /*background-image: url(../../images/account/coupon/bg_1.png);*/
      background-repeat: no-repeat;
      background-size: 100% 100%;
      @include wh(14.6809rem,4.2553rem);
      margin: 0.35rem auto 0 auto;
      .block_left{
        @include wh(5rem,100%);
        float: left;
        p{
          @include sc(0.6809rem,#666);
          text-align: center;
        }
        p:first-child{
          @include sc(1.0638rem,#666);
          margin-top: 0.8638rem;
        }

      }
      .block_right{
        position: relative;
        @include wh(9.6809rem,100%);
        float: left;
        padding-left: 0.5rem;
        h4{
          @include sc(0.5957rem,#666);
          line-height: 1.5rem;
        }
        p{
          @include sc(0.5106rem,#666);
          line-height: 0.85rem;
        }
        .img_status{
          position: absolute;
          right: 0;
          top: 0.5rem;
          @include wh(3.1064rem,2.9574rem);
        }
      }
    }
    li:first-child{
      margin-top: 0.5rem;
    }
  }
</style>
