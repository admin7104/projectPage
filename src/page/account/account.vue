<template>
    <div class="account_page">
        <section class="account_infos">
          <div class="waveWrapper waveAnimation">
            <div class="waveWrapperInner bgMiddle">
              <div class="wave waveMiddle"></div>
            </div>
            <div class="waveWrapperInner bgBottom">
              <div class="wave waveBottom"></div>
            </div>
          </div>
          <div class="head">
            <div class="col-2 head_icon">
              <router-link :to="{path: '/account_infos'}" >
                <img src="../../images/account/head_icon.png"/>
              </router-link>
            </div>
            <div class="col-8">1378888888</div>
            <div class="col-2 mail_icon"><img src="../../images/account/mail_icon.png"/> </div>
            <div class="clear"></div>
          </div>
          <p class="total_title">
            总资产（元）
          </p>
          <p class="total_value">
            30000.00
          </p>
          <div class="money">
            <div class="col-6">
              <p>0.00</p>
              <p>账户余额（元）</p>
            </div>
            <div class="col-6">
              <p>500.00</p>
              <p>累计收益（元）</p>
            </div>
          </div>
          <img class="bottom_bg" src="../../images/account/bottom_bg.png"/>
         <div class="recharge_withdraw">
            <div class="col-6">
              <router-link :to="{path: '/recharge'}" class="recharge">
                充值
              </router-link>
            </div>
            <div class="col-6">
              <router-link :to="{path: '/withdraw'}" class="withdraw">
                提现
              </router-link>
            </div>
         </div>
        </section>
        <section>
          <router-link :to="{path: '/myinvest_recode'}"  class="my_invest">
            <div class="title_block">
              <img class="title_img left" src="../../images/account/title_img.png"/>
              <div class="dec left">我的投资</div>
              <img class="arrow right" src="../../images/account/arrow.png"/>
              <div class="dec right">详情</div>
            </div>
            <div class="status_block">
              <div class="col-4">
                筹集中（<span>0</span>）
              </div>
              <div class="col-4">
                投资中（<span>0</span>）
              </div>
              <div class="col-4">
                已结清（<span>0</span>）
              </div>
            </div>
          </router-link>
        </section>
        <section class="account_items">
          <div class="items_container">
            <router-link  :to="{path: '/capital_recode'}" class="col-4">
              <img src="../../images/account/icon_1.png"/>
              <p>
                资金流水
              </p>
            </router-link>
            <router-link :to="{path: '/coupon_1'}" class="col-4">
              <img src="../../images/account/icon_2.png"/>
              <p>
                理财券
              </p>
            </router-link>
            <router-link :to="{path: '/activities'}" class="col-4">
              <img src="../../images/account/icon_3.png"/>
              <p>
                精彩活动
              </p>
            </router-link>
            <router-link :to="{path: '/recharge'}" class="col-4">
              <img src="../../images/account/icon_4.png"/>
              <p>
                风险测评
              </p>
            </router-link>
            <router-link :to="{path: '/recharge'}" class="col-4">
              <img src="../../images/account/icon_5.png"/>
              <p>
                推荐有礼
              </p>
            </router-link>
            <router-link :to="{path: '/recharge'}" class="col-4">
              <img src="../../images/account/icon_6.png"/>
              <p>
                智能投资
              </p>
            </router-link>
            <div class="clear"></div>
          </div>
        </section>
        <section class="banner_block">
          <div class="swiper-container" v-if="1">
            <div class="swiper-wrapper">
              <div class="swiper-slide food_types_container" v-for="banner_img in listImg">
                <router-link :to="{path: '/link'}" >
                  <figure>
                    <img :src="banner_img.url" class="banner_img">
                    <!--<figcaption>{{foodItem.title}}</figcaption>-->
                  </figure>
                </router-link>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </section>
        <foot-guide></foot-guide>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import footGuide from 'src/components/footer/footGuide'
import {mapState, mapMutations} from 'vuex'
import banner from '../../components/common/banner'
import 'src/plugins/swiper.min.js'
import 'src/style/swiper.min.css'

export default {
    data(){
        return{
          listImg: [{
            url: "http://images.faster-cat.com//upload/link/20171112/20171112112953_82.jpg"
          },{
            url: "http://images.faster-cat.com//upload/link/20171112/20171112112953_82.jpg"
          },{
            url: "http://images.faster-cat.com//upload/link/20171112/20171112112953_82.jpg"
          },{
            url: "http://images.faster-cat.com//upload/link/20171112/20171112112953_82.jpg"
          }],
        }
    },
    mounted(){
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop: true,
        lazy: true,
      });
    },
    components:{
        footGuide,
        banner,
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
  .account_infos {
    position: relative;
    height: 9.8723rem;
    background: url("../../images/account/top_bg.png");
    .head {
      padding-top: 0.5rem;
      .head_icon{
        padding-right: 0;
        img{
          @include ct;
          width: 1.7234rem;
          height: 1.7747rem;
        }
      }
      .col-8{
        @include sc(0.5957rem,#fff);
        padding-left: 0;
        height: 1.7747rem;
        line-height: 1.7747rem;
      }
      .mail_icon{
        height: 1.7747rem;
        line-height: 1.7747rem;
        img{
          width: 0.9362rem;
          height: 0.6596rem;
        }
      }
    }
    .total_title{
      @include sc(0.5106rem,#ffcac1);
      font-family: PingFang-SC-Regular;
      text-align: center;
      margin-top: 0.851rem;
    }
    .total_value{
      @include sc(1.0638rem,#fff);
      font-family: PingFang-SC-Regular;
      text-align: center;
    }
    .money {
      .col-6{
        p:first-child{
          @include sc(1.0638rem,#fff);
          font-family: PingFang-SC-Regular;
          text-align: center;
          margin-top: 0.551rem;
        }
        p:last-child{
          @include sc(0.5106rem,#ffcac1);
          font-family: PingFang-SC-Regular;
          text-align: center;
        }
      }
    }
    .bottom_bg{
      width: 100%;
      height: 1.0638rem;
      position: absolute;
      bottom: -1px;
      left: 0;
      right:0;
    }
    .recharge_withdraw{
      width: 7.680rem;
      height:1.8085rem;
      background: url("../../images/account/btn_recharge_withdraw.png")no-repeat;
      background-size: 100% 100%;
      position: absolute;
      z-index: 999;
      bottom: -0.95rem;
      left: 0;
      right:0;
      margin: auto;
      .recharge,.withdraw{
        @include sc(0.766rem,#fe5435);
        line-height:1.8085rem;
        text-align: center;
        font-family: PingFang-SC-Regular;
        display: block;
        margin: 0 auto;
      }
    }
  }
  .my_invest{
    @include ct();
    width: 14.851rem;
    height: 5.2128rem;
    background: url("../../images/account/bg_1.png")no-repeat;
    background-size: 100% 100%;
    margin-top: 1.35rem;
    .title_block{
      height: 2rem;
      margin: 0 0.2rem 0 0.1rem;
      border-bottom: 1px solid #e6e6e6;
      .title_img{
        width: 0.766rem;
        height: 0.766rem;
        padding-left: 0.5106rem;
        padding-top: 0.617rem;
        margin-right:0.2553rem ;
      }
      .dec{
        @include sc(0.5957rem,#999);
        line-height: 2rem;
      }
      .arrow{
        @include wh(0.383rem,0.6383rem);
        padding-right: 0.5106rem;
        padding-top: 0.68085rem;
        margin-left: 0.3404rem;
      }
    }
    .status_block{
      margin: 0 0.2rem 0 0.1rem;
      .col-4{
        @include sc(0.5532rem,#333);
        text-align: center;
        font-family: PingFang-SC-Regular;
        height:  1.2128rem;
        line-height: 1.2128rem;
        border-right: 1px solid #e6e6e6;
        margin-top: 1rem;
        span{
          color: #fe5435;
        }
      }
      .col-4:last-child{
        border: none;
      }
    }
  }
  .account_items{
    @include ct();
    width: 14.851rem;
    height: 8.170rem;
    background: url("../../images/account/bg_2.png")no-repeat;
    background-size: 100% 100%;
    margin-top: 0.4255rem;
    .items_container{
      height: 98%;
      margin: 0 0.2rem 0.2rem 0.1rem;
      .col-4{
        text-align: center;
        display: block;
        img{
          @include wh(1.298rem,1.298rem);
          padding-top: 1.064rem;
        }
        p{
          @include sc(0.5532rem,#333);
        }
      }
    }

  }
  .banner_block{
    padding-top: 0.2rem;
    padding-bottom: 2.8rem;
    .banner_img{
      @include ct;
      @include wh(14.468rem,4.0426rem);
    }
    .swiper-pagination-bullet-active{
      background: #000!important;
    }
  }






   @keyframes move_wave {
     0% {
       transform: translateX(0) translateZ(0) scaleY(1)
     }
     50% {
       transform: translateX(-25%) translateZ(0) scaleY(0.55)
     }
     100% {
       transform: translateX(0%) translateZ(0) scaleY(1)
     }
   }
   .waveWrapper {
     overflow: hidden;
     position: absolute;
     left: 0;
     right: 0;
     bottom: 0;
     top: 0;
     margin: auto;
   }
   .waveWrapperInner {
     position: absolute;
     width: 100%;
     overflow: hidden;
     height:2.766rem;
     bottom: 0px;
   }
   .bgTop {
     z-index: 15;
     opacity: 0.5;
   }
   .bgMiddle {
     z-index: 10;
     opacity: 0.75;
   }
   .bgBottom {
     z-index: 5;
   }
   .wave {
     position: absolute;
     left: 0;
     width: 200%;
     height: 100%;
     background-repeat: repeat no-repeat;
     background-position: 0 bottom;
     transform-origin: center bottom;
   }
   .waveMiddle {
     background-size: 100% 100%;
     background: url("../../images/account/wave_1.png")no-repeat;
   }
   .waveAnimation .waveMiddle {
     animation: move_wave 5s linear infinite;
   }
   .waveBottom {
     background-size: 100% 100%;
     background: url("../../images/account/wave_2.png")no-repeat;
   }
   .waveAnimation .waveBottom {
     animation: move_wave 8s linear infinite;
   }
</style>
