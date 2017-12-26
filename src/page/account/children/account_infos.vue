<template>
    <div class="">
        <head-top :head-title="profiletitle" go-back="true"></head-top>
      <div class="top_container container-fluid">
          <div class="row1">
            <div class="cell">
              <div class="left">
                头像
              </div>
              <div class="right">
                <img class="head_icon" src="../../../images/account/head_icon.png"/>
              </div>
              <div class="clear">

              </div>
            </div>
          </div>
          <div class="row">
          <div class="cell">
            <div class="left">
              昵称
            </div>
            <div class="right">
              高大上
              <!--<img src="../../../images/account/arrow.png"/>-->
            </div>
            <div class="clear">
            </div>
          </div>
        </div>
      </div>

      <div class="container_block container-fluid">
        <div class="row">
          <div class="cell">
            <div class="left">
              手机号
            </div>
            <div class="right">
              15158071015
            </div>
            <div class="clear">
            </div>
          </div>
        </div>
        <div class="row">
          <router-link :to="{path: '/bind_bank'}" class="cell">
            <div class="left">
              实名认证
            </div>
            <div class="right">
              <img src="../../../images/account/arrow.png"/>
            </div>
            <div class="clear">
            </div>
          </router-link>
        </div>
        <div class="row">
          <router-link :to="{path: '/my_bank'}" class="cell">
            <div class="left">
              银行卡管理
            </div>
            <div class="right">
              <img src="../../../images/account/arrow.png"/>
            </div>
            <div class="clear">
            </div>
          </router-link>
        </div>
      </div>
      <div class="container_block container-fluid">
        <div class="row">
          <div class="cell">
            <div class="left">
              账户安全
            </div>
            <div class="right">
              <img src="../../../images/account/arrow.png"/>
            </div>
            <div class="clear">
            </div>
          </div>
        </div>
      </div>
      <button class="exit_login">退出登录</button>

    </div>
</template>

<script>
import headTop from 'src/components/header/head'
import {mapState, mapMutations} from 'vuex'

export default {
    data(){
        return{
            profiletitle: '账户信息',

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
   @import '../../../style/mixin';
.actionsheet{
  position: absolute;
  bottom: 5rem;
}
   .top_container{
     margin-top: 2.4rem;
     .row1{
       @include bg();
       margin-right: -15px;
       margin-left: -15px;
       .cell{
         margin-left: 15px;
         border-bottom: 1px solid #e6e6e6;
         .left{
           height: 3.5215rem;
           line-height: 3.5215rem;
           @include sc(0.6383rem,#333);
         }
         .head_icon{
           @include wh(2.7447rem,2.7447rem);
           margin-top: 0.3884rem;
           padding-right: 0.3383rem;
         }
       }

     }

   }

  .container_block{
    margin-top: 0.5rem;
  }
.row {
  @include bg();
  .cell{
    margin-left: 15px;
    border-bottom: 1px solid #e6e6e6;
    display: block;
    height: 1.9149rem;
    line-height: 1.9149rem;
    .left{
      @include sc(0.6383rem,#333);
    }
    .right{
      padding-right:0.6383rem;
      @include sc(0.5106rem,#999);
      img{
       @include wh(0.3830rem,0.6383rem);
       position: relative;
        top: 0.15rem;
      }
    }
  }

}
.exit_login{
  @include wh(14.6809rem,1.9149rem);
  @include sc(0.6809rem,#fff);
  @include bg(#fc5c3f);
  @include ct();
  @include borderRadius(5px);
  margin-top: 1rem;
}
</style>
