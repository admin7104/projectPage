<template>
  	<div>
      <!--<banner :listImg="listImg"></banner>-->
      <nav class="msite_nav">
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
        <img src="../../images/fl.svg" class="fl_back animation_opactiy" v-else>
      </nav>
      <section class="safe_item">
        <ul class="safe_item_ul">
          <li>
            <router-link :to="{path: '/link'}" >
              <img src="../../images/home/inventsecaity.png">
              <p>
                投资安全
              </p>
            </router-link>
          </li>
          <li>
            <img src="../../images/home/bianjie.png">
            <p>
              活动中心
            </p>
          </li>
          <li>
            <img src="../../images/home/sixbao.png">
            <p>
              邀请好友
            </p>
          </li>
          <!--<li>-->
            <!--<img src="../../images/home/safe_img4.png">-->
            <!--<p>-->
              <!--平台数据-->
            <!--</p>-->
          <!--</li>-->
        </ul>
      </section>
      <!--<section class="hot_project">-->
        <!--<img src="../../images/home/biaoqian_shoutou.png">-->
        <!--<h3>新手标02011709040</h3>-->
        <!--<p>预期年化收益</p>-->
        <!--<p class="rate">-->
          <!--12.8<span>%</span>-->
        <!--</p>-->
        <!--<ul>-->
          <!--<li>-->
              <!--30天-->
              <!--<p>投资期限</p>-->
          <!--</li>-->
          <!--<li>-->
            <!--30天-->
            <!--<p>投资期限</p>-->
          <!--</li>-->
          <!--<li>-->
            <!--30天-->
            <!--<p>投资期限</p>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<mt-button class="btn_invest" type="danger">立即投资</mt-button>-->
      <!--</section>-->
      <nav class="project_container">
        <div class="swiper-containe" v-if="1">
          <div class="swiper-wrapper">
            <div class="swiper-slide food_types_container" v-for="project in projects">
              <router-link :to="{path: '/link'}" >
                <section class="hot_project">
                  <h3>新手专享标<img src="../../images/home/biaoqian_shoutou.png"></h3>
                  <loading-progress
                    :progress="progress"
                    :indeterminate="indeterminate"
                    :counter-clockwise="counterClockwise"
                    :hide-background="hideBackground"
                    shape="almostcircle"
                  size="100"
                  fill-duration="1"
                  />
                  <div class="project_infos">
                    <p class="rate_title">预期年化收益</p>
                    <p class="rate">
                      12.8<span>%</span>
                    </p>
                    <p class="rate_dec">期限短，收益高</p>
                    <ul>
                      <li>
                        <p class="invest_value">30<span>天</span></p>
                        <p>理财期限</p>
                      </li>
                      <li>
                        <p class="invest_value">100<span>元</span></p>
                        <p>起投金额</p>
                      </li>
                    </ul>
                    <mt-button class="btn_invest" type="danger">立即投资</mt-button>
                  </div>

                </section>
              </router-link>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <img src="../../images/fl.svg" class="fl_back animation_opactiy" v-else>
      </nav>

      <foot-guide></foot-guide>
    </div>
</template>

<script>
import headTop from '../../components/header/head'
import footGuide from 'src/components/footer/footGuide'
import banner from '../../components/common/banner'
import 'src/plugins/swiper.min.js'
import 'src/style/swiper.min.css'
import 'vue-progress-path/dist/vue-progress-path.css'
export default {
    data(){
      return {
        listImg: [{
          url: "http://images.faster-cat.com//upload/link/20171112/20171112112953_82.jpg"
        },{
          url: "http://images.faster-cat.com//upload/link/20171112/20171112112953_82.jpg"
        },{
          url: "http://images.faster-cat.com//upload/link/20171112/20171112112953_82.jpg"
        },{
          url: "http://images.faster-cat.com//upload/link/20171112/20171112112953_82.jpg"
        }],
        projects:[1,1,1],
        indeterminate: false,
        progress: 1-0.2,
        counterClockwise: false,
        hideBackground: false,
      }
    },

	mounted(){
    //    this.items =
    //初始化swiper
    new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      loop: true,
      lazy: true,
    });
//    getBanner().then();

    var project_swiper = new Swiper('.swiper-containe', {
      pagination: '.swiper-pagination',
      effect: 'coverflow',
      grabCursor: true,
//      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
//        rotate: 50,
//        stretch: 0,
//        depth: 0,
//        modifier: 1,
//        slideShadows : false,
      }
    });
    },

    components:{
        headTop,
        banner,
        footGuide,
    },

    computed:{
        //将获取的数据按照A-Z字母开头排序
        sortgroupcity(){
            let sortobj = {};
            for (let i = 65; i <= 90; i++) {
                if (this.groupcity[String.fromCharCode(i)]) {
                    sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
                }
            }
            return sortobj
        }
    },

    methods:{
        //点击图标刷新页面
        reload(){
            window.location.reload();
        }
    },
}

</script>

<!--<style rel="stylesheet/scss" lang="scss">-->
  <!--.vue-progress-path svg{width: 10rem;height: 10rem;}-->
<!--</style>-->

<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../../style/mixin';
    .vue-progress-path{width: 10rem!important;height: 10rem!important;stroke-width:6;}
.project_container{
    /*padding-bottom: 2rem;*/
  padding: 0 0.6rem 3rem 0.6rem;
    /*padding: 0 0.8rem;*/
}
.banner_img{width: 100%;height: 10rem;}
    .swiper-containe {
      width: 100%;
      overflow: hidden;
      /*.swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top{height: 0px!important;}*/
      .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 13rem;
        height: 14rem;
      }
      /*.swiper-slide:last-child a .hot_project {margin-right: 0.8rem;}*/
    }



    .head_logo{
        left: 0.4rem;
        font-weight: 400;
        @include sc(0.7rem, #fff);
        @include wh(2.3rem, 0.7rem);
        @include ct;
    }
    .city_nav{
        padding-top: 2.35rem;
        border-top: 1px solid $bc;
        background-color: #fff;
        margin-bottom: 0.4rem;
        .city_tip{
            @include fj;
            line-height: 1.45rem;
            padding: 0 0.45rem;
            span:nth-of-type(1){
                @include sc(0.55rem, #666);
            }
            span:nth-of-type(2){
                font-weight: 900;
                @include sc(0.475rem, #9f9f9f);
            }

        }
        .guess_city{
            @include fj;
            align-items: center;
            height: 1.8rem;
            padding: 0 0.45rem;
            border-top: 1px solid $bc;
            border-bottom: 2px solid $bc;
            @include font(0.75rem, 1.8rem);
            span:nth-of-type(1){
                color: $blue;
            }
            .arrow_right{
                @include wh(.6rem, .6rem);
                fill: #999;
            }
        }
    }
    #hot_city_container{
        background-color: #fff;
        margin-bottom: 0.4rem;
    }
    .citylistul{
        li{
            float: left;
            text-align: center;
            color: $blue;
            border-bottom: 0.025rem solid $bc;
            border-right: 0.025rem solid $bc;
            @include wh(25%, 1.75rem);
            @include font(0.6rem, 1.75rem);
        }
        li:nth-of-type(4n){
            border-right: none;
        }
    }
    .carousel {
      height: 100px;
    }
    .item_banner {
      width: 100%;
      /*height:225px;*/
    }
    .city_title{
        color: #666;
        font-weight: 400;
        text-indent: 0.45rem;
        border-top: 2px solid $bc;
        border-bottom: 1px solid $bc;
        @include font(0.55rem, 1.45rem, "Helvetica Neue");
        span{
            @include sc(0.475rem, #999);
        }
    }

    .letter_classify_li{
        margin-bottom: 0.4rem;
        background-color: #fff;
        border-bottom: 1px solid $bc;
        .groupcity_name_container{
            li{
                color: #666;
            }
        }
    }
    .safe_item{
        @include bg();
        .safe_item_ul{
          display: flex;
          li{
            @include fj;
            flex: 1;
            flex-direction: column;
            text-align: center;
            align-items: center;
            margin: 0.5rem 0 0.4rem 0;
            img{
              @include wh(1.5rem,1.5rem)
            }
            p{
              @include font(0.6rem, 1rem);
            }
          }
        }
    }
    .hot_project {
      @include bg();
      position: relative;
      padding-bottom: 1rem;
      margin:0.8rem 0rem 3rem 0rem ;
      /*padding:0 0.5rem 3rem 0.5rem ;*/
      .vue-progress-path{
        position: absolute;
        top: 5%;
        left: 2.77rem;
        z-index: 1;
      }
      .project_infos{
        position: relative;
        z-index: 2;
      }
      img {
        @include wh(1.9rem, 1.1rem);
        position: absolute;
        top: 0;
        right: 0.5rem;
      }
      h3{
        @include font(0.58rem, 1.2rem);
        text-align: left;
        color: #333;
        padding-left: 0.5rem;
      }
      .rate_title{margin-top: 1rem;}
      p{
        @include font(0.6rem, 1.7rem);
        text-align: center;
        color: #999;
      }
      .rate{
          @include  sc(1.8rem,#ff8200);
        span{
          @include sc(0.8rem,#ff8200)
        }
      }
      ul{
        display: flex;
        width: 80%;
        margin: 0 auto;
        li{
          @include fj;
          @include sc(0.6rem,#666);
          flex: 1;
          flex-direction: column;
          text-align: center;
          align-items: center;
          margin: 0.3rem 0 0.3rem 0;
          p{
            @include sc(0.6rem,#666);
            line-height: 0.85rem;
          }
          .invest_value {
            @include sc(1.2rem,#ff7007);
            span{
              @include sc(0.55rem,#ff7007);
            }
          }
        }
      }
      .btn_invest{
        display: block;
        margin: 0 auto;
        width: 11rem;
        height: 1.25rem;
        font-size: 0.66rem;
        background-color: #fc5c3f;
//        @include cl;
      }
    }
</style>
