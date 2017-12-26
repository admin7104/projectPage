<template>
    <div class="">
        <head-top :head-title="profiletitle" go-back="true"></head-top>
      <div class="nav">
        <mt-button class="status" size="small" @click.native.prevent="active = 'tab-container1'" :style="active=='tab-container1'?'color:#282828;border-bottom:2px solid #fc5c3f':'border-bottom:none;color:#999'">筹集中</mt-button>
        <mt-button class="status" size="small" @click.native.prevent="active = 'tab-container2'" :style="active=='tab-container2'?'color:#282828;border-bottom:2px solid #fc5c3f':'border-bottom:none;color:#999'">投资中</mt-button>
        <mt-button class="status" size="small" @click.native.prevent="active = 'tab-container3'" :style="active=='tab-container3'?'color:#282828;border-bottom:2px solid #fc5c3f':'border-bottom:none;color:#999'">已结清</mt-button>
      </div>
      <div class="page-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
          <mt-tab-container-item id="tab-container1" class="tab-container">
            <ul>
              <li v-for="n in 10">
                <router-link :to="{path: '/invest_detail'}">
                  <div class="title_block">
                    <div  class="left title">
                      <h4>
                        新客专享第00115期
                      </h4>
                      <p>
                        2017-09-30 20:00:35
                      </p>
                    </div>

                    <div class="invest_status right">
                      筹集中
                    </div>
                  </div>
                  <div class="project_infos">
                    <p>
                      预期年化收益率<span>15%</span>
                    </p>
                    <p>
                      投资本金（元）<span>200000.00</span>
                    </p>
                    <p>
                      预期收益（元）<span>100.00</span>
                    </p>
                    <p>
                      到期时间<span>2017-10-18</span>
                    </p>
                  </div>
                </router-link>
              </li>
            </ul>
            <!--<mt-cell v-for="n in 10">-->

            <!--</mt-cell>-->
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2" class="tab-container">
            <ul>
              <li v-for="n in 5">
                <router-link :to="{path: '/invest_detail'}">
                  <div class="title_block">
                    <div  class="left title">
                      <h4>
                        新客专享第00115期
                      </h4>
                      <p>
                        2017-09-30 20:00:35
                      </p>
                    </div>

                    <div class="invest_status right">
                      投资中
                    </div>
                  </div>
                  <div class="project_infos">
                    <p>
                      预期年化收益率<span>15%</span>
                    </p>
                    <p>
                      投资本金（元）<span>200000.00</span>
                    </p>
                    <p>
                      预期收益（元）<span>100.00</span>
                    </p>
                    <p>
                      到期时间<span>2017-10-18</span>
                    </p>
                  </div>
                </router-link>
              </li>
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container3" class="tab-container">
            <ul>
              <li v-for="n in 7">
                <router-link :to="{path: '/invest_detail'}">
                  <div class="title_block">
                    <div  class="left title">
                      <h4>
                        新客专享第00115期
                      </h4>
                      <p>
                        2017-09-30 20:00:35
                      </p>
                    </div>

                    <div class="invest_status right">
                      已结清
                    </div>
                  </div>
                  <div class="project_infos">
                    <p>
                      预期年化收益率<span>15%</span>
                    </p>
                    <p>
                      投资本金（元）<span>200000.00</span>
                    </p>
                    <p>
                      预期收益（元）<span>100.00</span>
                    </p>
                    <p>
                      到期时间<span>2017-10-18</span>
                    </p>
                  </div>
                </router-link>
              </li>
            </ul>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
</template>

<script>
import headTop from 'src/components/header/head'
import {mapState, mapMutations} from 'vuex'


export default {

    data(){
        return{
            profiletitle: '投资记录',
            active: 'tab-container1'
        }
    },
    mounted(){
      document.getElementsByClassName("head_goback")[0].style.stroke = "#666";
      document.getElementsByClassName("title_text")[0].style.color = "#282828";
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
   #head_top{
     background-color: $fc!important;
   }
   .item {
     display: inline-block;
   }
   .nav {
     background: #fff;
     position: fixed;
     width: 100%;
     z-index: 2;
     top: 1.95rem;
     border-top: 1px solid #e8e8e8;
     .status{
       @include sc(0.7234rem,#282828);
       width: 31.9%;
       text-align: center;
       border: none;
       background: #fff;
       box-shadow:none;
       line-height:2rem;
       height:2rem;
       border-radius: 0;
     }
   }
   .page-tab-container{
     position: relative;
     z-index: 1;
     margin-top: 3.9rem;
     .tab-container{
       li{
         @include wh( 14.68rem,7.66rem);
         @include borderRadius(8px);
         background: #fff;
         margin: 0 auto;
         margin-top: 0.5rem;
         .title_block{
           height: 2.553rem;
           padding-top:0.4383rem  ;
           margin:0 0.4255rem;
           border-bottom: 1px solid #e8e8e8;
           .title{
             h4{
                @include sc(0.6383rem,#333);
             }
             p{
               @include sc(0.5106rem,#333);
             }
           }
           .invest_status{
             @include wh(2.9362rem,0.8936rem);
             @include sc(0.5957rem,#fc7a5c);
             background: url("../../images/recode/status_bg.png") no-repeat;
             background-size: 100% 100%;
             text-align: center;
             margin-top: 0.32rem;
             position: relative;right: -0.4255rem;
           }
         }
         .project_infos{
           margin:0.5rem 0.4255rem;
           p{
             @include sc(0.5957rem,#999);
             font-family: PingFang-SC-Regular;
             margin-top: 0.2rem;
             span{
               float: right;
             }
           }
         }
       }
     }
   }
   .link {
     color: inherit;
     padding: 20px;
     display: block;
   }
</style>
