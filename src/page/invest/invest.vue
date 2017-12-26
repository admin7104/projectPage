<template>
  <div>
    <!--<nav-bar></nav-bar>-->
    <nav class="project_type_container">
        <div class="project_type">
          <router-link :to="{path: '/invest'}" >
            <div class="type_sel">新客专享</div>
          </router-link>
          <router-link :to="{path: '/invest2'}" >
            <div>财神汽车</div>
          </router-link>

          <div class="clear"></div>
        </div>
    </nav>
    <section class="project_list">
      <ul>
        <li v-for="project in project_list">
          <router-link :to="{path: '/invest_detail'}" >
            <h3>新客专享第00212期</h3>
            <div class="invest_block">
              <div class="invest_info">
                <p class="rate">
                  15<span>.00%</span>
                </p>
                <p>
                  预期年化收益率
                </p>
              </div>
              <div class="border_item"></div>
              <div class="invest_info">
                <p>
                  锁定期：<span>30天</span>
                </p>
                <p>
                  可投金额：<span>50000元</span>
                </p>
              </div>
              <div class="invest_progress">
                <p>20%</p>
                <loading-progress
                  :progress="progress"
                  :indeterminate="indeterminate"
                  :counter-clockwise="counterClockwise"
                  :hide-background="hideBackground"
                  shape="circle"
                  size="150"
                  fill-duration="2"
                  background="circle_bg"
                  progress_bg = "progress2"
                />
              </div>
              <div class="clear"></div>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import headTop from '../../components/header/head'
  import footGuide from 'src/components/footer/footGuide'
  import {cityGuess, hotcity, groupcity} from '../../service/getData'
  import navBar from '../../components/common/navBar'
  import 'vue-progress-path/dist/vue-progress-path.css'
  export default {
    data(){
      return {
        indeterminate: false,
        progress: 1-0.2,
        counterClockwise: false,
        hideBackground: false,
        project_list:[1,1,1,1]
      }
    },

    mounted(){
      //    this.items =
    },

    components:{
      headTop,
      navBar,
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
<!--<style rel="stylesheet/scss" lang="scss" scoped>-->
  <!--.vue-progress-path svg{width: 2rem!important;height: 2rem!important;}-->
<!--</style>-->
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../style/mixin';

  .vue-progress-path{width: 3rem!important;height: 3rem!important;stroke-width:6;}
  /*.vue-progress-path path{stroke-width:2;}*/
  .project_type_container{
    @include wh(100%, 2.765rem);
    @include bg(#fc5c3f);
    position: fixed;
    top: 0;
    .project_type{
      .type_sel{
        border: 1px solid #fff;
        @include bg(#fc5c3f);
        color: #fff;
        box-shadow:4px 0px 4px -3px #fc5c3f;
      }
      position: relative;
      top: 1.05rem;
      @include borderRadius(15px);
      @include wh(8.51rem,1.276rem);
      @include bg();
      @include ct();
      div{
        @include fl();
        @include borderRadius(15px);
        width: 50%;
        /*display: inline-block;*/
        @include sc(0.638rem,#fc5c3f);
        text-align: center;
        line-height: 1.276rem;
      }
    }
  }
  .hot_project {
    @include bg();
    position: relative;
    margin-top: 0.8rem;
    padding-bottom: 1rem;
    margin-bottom: 3rem;
    img {
      @include wh(2.5rem, 1.5rem);
      position: absolute;
      top: 0;
      left: 1.5rem;
    }
    h3{
      @include font(0.75rem, 1.45rem);
      text-align: center;
      color: #333;
      padding-top: 0.8rem;
    }
    p{
      @include font(0.6rem, 1.7rem);
      text-align: center;
      color: #999;
    }
    .rate{
      @include  sc(1.8rem,#f65958);
      span{
        @include sc(0.8rem,#f65958)
      }
    }
    ul{
      display: flex;
      li{
        @include fj;
        @include sc(0.6rem,#666);
        flex: 1;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin: 1rem 0 0.4rem 0;
        p{
          @include sc(0.58rem,#999);
        }
      }
    }
    .btn_invest{
      @include borderRadius(15px);
      display: block;
      margin: 0 auto;
      width: 8rem;
      height: 1.25rem;
      font-size: 0.66rem;

      //        @include cl;
    }
  }
  .project_list {
    margin-top: 3.3rem;
    padding-bottom: 3rem;
    li{
      @include bg();
      margin-top: 0.5rem;
      padding:0 0.638rem;
      h3 {
        @include sc(0.638rem,#333);
        line-height: 1.872rem;
        border-bottom: 1px solid #e6e6e6;
        span{
          @include fr;
          color: $fc;
          background: #f65958;
          padding: 0.2rem 1rem;
          border-radius: 1rem 0 0 1rem;
        }
      }
      .mt-progress {
        width: 93%;
        /*position: absolute;*/
        /*bottom: 5px;*/
      }

      .invest_block {
        padding-top: 0.715rem;
        padding-bottom: 0.2rem;
        @include bg();
        .border_item{
          float: left;
          width: 1px;
          height: 1.92rem;
          margin: 0.65rem 0.5rem 0 0.5rem;
          background: #e6e6e6;

        }
        .invest_info:first-child{width: 5.093rem;}
        .invest_info {
          @include fl;
          /*text-align: center;*/
          margin-top: 0.2rem;
          width: 5.593rem;
          font-size: 0.51rem;
          p{
            height: 1.4rem;line-height: 1.4rem;
            color: #999;
            span{
              color: #333;
            }
          }
          .rate {
            color: #f65958;
            font-size: 1.4rem;
            span{
              font-size: 0.66rem;
              color: #f65958;
            }
          }
        }
        .invest_progress {
          width: 2.905rem;
          height: 3rem;
          float: left;
          position: relative;
          p{
           @include center;
            @include sc(0.765rem,#fc5c3f)
          }
        }
      }
    }
  }
</style>
