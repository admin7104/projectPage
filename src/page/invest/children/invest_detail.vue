<template>
  <div class="invest_detail_page">
    <head-top :head-title="profiletitle" go-back="true"></head-top>

    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <section class="rate_black">
            <div class="rate_container">
              <p class="invest_title">
                汽车财神第100100期
              </p>
              <p class="rate">
                12.8<span>%</span>
              </p>
              <p class="rate_title">
                预期年化率
              </p>
            </div>
          </section>
          <section class="project_infos container">
            <ul class="project_values">
              <li>
                <p>项目总额</p>
                <p>100000元</p>
              </li>
              <li>
                <p>投资期限</p>
                <p>15天</p>
              </li>
              <li>
                <p>起投金额</p>
                <p>100元</p>
              </li>
            </ul>
            <ik-progress :value="progress_value" :bar-height="10" :progress-color="'#ff7f5b'"></ik-progress>
            <div class="invest_progress_dec">
              <div class="left">
                已投90%
              </div>
              <div class="right">
                剩余可投<span>9000</span>元
              </div>
              <div class="clear"></div>
            </div>

          </section>
          <section class="project_introduce container">
            <h4>项目介绍</h4>
            <ul class="project_values project_values_first">
              <li>
                <p>产品发布</p>
              </li>
              <li>
                <p>预计起息</p>
              </li>
              <li>
                <p>预计到期</p>
              </li>
            </ul>
            <ul class="project_values">
              <li>
                <i class="circle circle_sel"></i>

              </li>
              <li>
                <i class="circle "></i>

              </li>
              <li>
                <i class="circle"></i>
              </li>
            </ul>
            <ul class="project_values project_values_last">
              <li>
                <p>2017年7月20号</p>
              </li>
              <li>
                <p>2017年7月20号</p>
              </li>
              <li>
                <p>2017年7月20号</p>
              </li>
            </ul>
            <div class="project_progress">
              <div class="step step_active">

              </div>
              <div class="step">

              </div>
            </div>
          </section>
          <section class="project_dec container">
            <img class="safe_img" src="../../../images/invest/safe_img.png"/>
            <p>
              财神汽车是基于互联网投资需求日益增长的环境下推出的汽车金融理财业务，主要为小微企业及个人用户提供汽车金融信息服务，同时致力于稳健投资理财产品的研发，为投资者提供更全面的汽车金融供应链的金融服务。
            </p>
          </section>
          <section class="project_dec container">
            <img class="safe_img" src="../../../images/invest/safe_img.png"/>
            <p>
              财神汽车是基于互联网投资需求日益增长的环境下推出的汽车金融理财业务，主要为小微企业及个人用户提供汽车金融信息服务，同时致力于稳健投资理财产品的研发，为投资者提供更全面的汽车金融供应链的金融服务。
            </p>
          </section>
          <section class="project_dec container">
            <img class="safe_img" src="../../../images/invest/safe_img.png"/>
            <p>
              财神汽车是基于互联网投资需求日益增长的环境下推出的汽车金融理财业务，主要为小微企业及个人用户提供汽车金融信息服务，同时致力于稳健投资理财产品的研发，为投资者提供更全面的汽车金融供应链的金融服务。
            </p>
          </section>

        </div>
        <div class="swiper-slide">Slide 2</div>
      </div>
    </div>


  </div>
</template>

<script>
  import headTop from 'src/components/header/head'
  import ikProgress from 'src/components/common/ik_progress'
//  import {mapState, mapMutations} from 'vuex'
  import {imgBaseUrl} from 'src/config/env'
  import {getImgPath} from 'src/components/common/mixin'
  import 'vue-progress-path/dist/vue-progress-path.css'
  import 'src/plugins/swiper.min'
  import 'src/style/swiper.min.css'

  export default {
    data(){
      return{
        profiletitle: '财神汽车',
        progressVisible: false,
        indeterminate: false,
        progress: 1-0.2,
        counterClockwise: false,
        hideBackground: false,
        progress_value:0,
      }
    },
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        autoHeight:true,
      });

      var startScroll, touchStart, touchCurrent;
      mySwiper.slides.on('touchstart', function (e) {
        startScroll = this.scrollTop;
        touchStart = e.targetTouches[0].pageY;
      }, true);
      mySwiper.slides.on('touchmove', function (e) {
        touchCurrent = e.targetTouches[0].pageY;
        var touchesDiff = touchCurrent - touchStart;
        var slide = this;
        var onlyScrolling =
          (slide.scrollHeight > slide.offsetHeight) &&
          (
            (touchesDiff < 0 && startScroll === 0) ||
            (touchesDiff > 0 && startScroll === (slide.scrollHeight - slide.offsetHeight)) ||
            (startScroll > 0 && startScroll < (slide.scrollHeight - slide.offsetHeight))
          );
        if (onlyScrolling) {
          e.stopPropagation();
        }
      }, true);


      var that = this;
      setTimeout(function () {
        that.progress_value = 90
      },1000);
    },
    mixins: [getImgPath],
    components:{
      headTop,
      ikProgress

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
  @import '../../../style/mixin';
  /*}*/
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    overflow: auto;
    overflow-scrolling: touch!important;
    -webkit-overflow-scrolling: touch!important;
  }

  .rate_black{
    width: 100%;height: 6.878rem;background: url("../../../images/invest/rate_bg.png")no-repeat;background-size: 100% 100%;margin-top: 0.95rem;
    .rate_container{
      padding-top: 1.55rem;
      p{
        text-align: center;
        @include sc(0.553rem,#fff);
        span{
          color: #fff;
        }
      }
      .rate{
        font-size: 1.5rem;
        margin: 0.3rem 0;
      }

    }
  }
  .project_infos{
    background: #fff;
    .project_values{
      display: flex;
      li{
        @include fj;
        flex: 1;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin: 0.5rem 0 0.4rem 0;
        p{
          @include sc(0.581rem,#666);
        }
      }

    }
    .invest_progress_dec{
      padding-bottom: 0.5rem;
      div{
        @include sc(0.5rem,#666);
        span{color:#fc5c3f; }
      }
    }
  }
  .project_introduce{
    margin-top: 0.5rem;
    position: relative;
    @include bg();
    h4{
      @include sc(0.638rem,#444);
      line-height: 2.127rem;
      margin: 0 -15px;
      padding-left: 15px;
      border-bottom: 1px solid #f4f4f4;
    }
    .project_values{
      position: relative;
      z-index: 101;
      display: flex;
      li{
        @include fj;
        flex: 1;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin: 0.2rem 0 0.2rem 0;

        .circle {
          width: 0.5rem;
          height: 0.5rem;
          background: #eee;
          border-radius: 50%;
        }
        .circle_sel {
          background: #fd6345;
        }

      }

    }
    .project_values_first{
      padding-top: 0.2rem;
      li p {
        @include sc(0.5106rem,#999);
      }
    }
    .project_values_last{
      padding-bottom: 0.2rem;
      li p{
        @include sc(0.4255rem,#888);
      }
    }
    .project_progress {
      position: absolute;
      top: 3.8rem;
      width: 62%;
      z-index: 100;
      left: 0;
      right: 0;
      margin: auto;
      .step {
        width: 50%;height: 0.17rem;
        background: #eee;
        float: left;
      }
      .step_active {
        background: #fc5c3f;
      }
    }
  }
  .project_dec {
    @include bg(#fafafa);
    .safe_img {
        @include ct();
      height: 3.915rem;
        padding-top: 0.4255rem;
      padding-bottom: 0.6rem;
    }
    p{
      @include sc(0.598rem,#666);
      line-height: 1.1rem;
    }
  }
  #head_top{
    background-color: #fc5c3f!important;
    border-bottom:none!important;
  }
  .detail_values
  {
    padding-top: 2.5rem;
    font-size: 0.68rem;
    text-align: center;
    background: $red;
    p{
      color: #fefefe;
    }
    .rate
    {
      font-size: 1.6rem;
      span{
        color: #fefefe;
        font-size: 0.7rem;
      }
    }
    .rate_title{
      color: #ffbdbd;
      line-height: 1.5rem;
    }
    .invest_from {
      @include ct;
      border: 1px solid #fff;
      width: 25%;
    }
    .detail_value_infos {
      ul{
        background: #f76e6d;
        height: 3rem;
        margin: 1rem 0;
        li{
          @include fl;
          width: 33%;
          text-align: center;
          p{
            height: 1.5rem;
            line-height: 1.5rem;
          }
        }
      }
    }
  }
  .step {
    background: #fff;
    .step_block {padding-top: 0.6rem;}
    ul{
      li{
        @include fl;
        text-align: center;
        width: 33%;
        img{
          width: 40%;
        }
        p{
          font-size: 0.68rem;
          line-height: 1.2rem;
        }
      }
    }
    .pro_info {
      color: #ccc;
      font-size: 0.72rem;
      width: 86%;
      margin-left: 7%;
      border-bottom: 1px solid #ddd;
      height: 2.8rem;
      line-height: 2.8rem;
      span{
        padding-left: 1rem;
        color: #333;
      }
    }
  }
  .btn_invest {position: fixed;bottom: 0;background: #f65958;color: #fff;}
</style>
