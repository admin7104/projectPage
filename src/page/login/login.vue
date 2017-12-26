<template>
    <div class="login_page">
        <head-top :head-title="profiletitle" go-back="true"></head-top>
      <section class="login_block container-fluid">
        <img class="top_img" src="../../images/login/top_img.png">
        <div class="row phone">
          <div class="col-1">
            <img class="icon_phone" src="../../images/login/icon_phone.png"/>
          </div>
          <div class="col-11">
            <input  placeholder="请输入手机号码"/>
          </div>

        </div>
        <div class="row psd clear">
          <div class=" col-1">
            <img class="icon_psd" src="../../images/login/icon_psd.png"/>
          </div>
          <div  class=" col-10">
            <input class="" placeholder="请输入验证码"/>
          </div>
          <div  class=" col-1">
            <img class="icon_on_off" src="../../images/login/icon_on.png"/>
          </div>
          <div class="clear"></div>
        </div>
        <router-link :to="{path: '/forget_password'}" class="row forget_password">
          忘记密码?
        </router-link>
      </section>
      <div class="btn_reg_container">
        <mt-button size="large" class = "btn_reg">登录</mt-button>
      </div>
      <router-link :to="{path: '/reg'}" class="to_reg">
        <p>
          注册立领888元红包
        </p>
      </router-link>
      <div class="kefu">
        <p>
          客服电话
        </p>
        <p>
          400-101-8876(9:00~18:00)
        </p>
      </div>
    </div>
</template>

<script>
import headTop from 'src/components/header/head'
import footGuide from 'src/components/footer/footGuide'
import {mapState, mapMutations} from 'vuex'
import {imgBaseUrl} from 'src/config/env'
import {getImgPath} from 'src/components/common/mixin'

export default {
    data(){
        return{
            profiletitle: '',
        }
    },
    mounted(){
      document.body.style.backgroundColor = "#fff";
      document.getElementsByClassName("head_goback")[0].style.stroke = "#000";
    },
    mixins: [getImgPath],
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
     background-color: #fff!important;
     border-bottom: none!important;
   }

   .login_block {
     height: 100%;
     margin: 0 1rem;
     .top_img{
       @include ct;
       width: 6.8085rem;
       padding: 3rem 0 2rem 0;
     }
     .phone {
       height: 2.017rem;
       line-height: 2.017rem;
       border-bottom: 1px solid #eaeaea;
       .col-1{         padding-left: 0;}
       .icon_phone{
         width: 0.5106rem;
         height: 0.617rem;
         /*margin-top: 0.7rem;*/
       }
       .col-11 {
         height: 2.017rem;line-height: 2.017rem;padding-left: 0;
         input{ height: 2.017rem;line-height: 2.017rem;background: transparent;position: relative;bottom: 0.1rem;width: 100%;}
       }

     }
     .psd {
       height: 1.9957rem;
       line-height: 1.9957rem;
       border-bottom: 1px solid #eaeaea;
       .col-1{padding-left: 0;}
       .icon_psd{
         width: 0.5106rem;
         height: 0.5957rem;
         /*margin-top: 0.7rem;*/
       }
       .icon_on_off{
         width: 0.766rem;
         height: 0.5957rem;
         margin-top: 0.7rem;
       }
       .col-10 {
         height: 1.9957rem;line-height: 1.9957rem;padding-left: 0;
         input{height: 1.9957rem;  line-height: 1.9957rem;background: transparent;position: relative;bottom: 0.1rem;width: 100%;}
       }

     }
     .forget_password {
       @include sc(0.5532rem,#999);
     }
     .change_type {
       color: #999;
       font-size: 0.68rem;
       text-align: center;
       margin-top: 2rem;
       a{
         color: #f65958;
       }
     }
     .base_info {
       color: #666;
       font-size: 0.68rem;
       text-align: center;
       position: fixed;
       bottom: 1rem;
       left: 25%;
     }
     /*.mint-cell{*/
     /*.mint-field-core{*/
     /*border-bottom: 1px solid #ddd!important;*/
     /*background: #000!important;*/
     /*}*/
     /*}*/

   }
   .btn_reg_container{
     margin: 1.5rem 1rem 0 1rem;
     .btn_reg {border-radius: 5px;background: #d8d8d8;color: #fff;}
   }
   .to_reg{
    p{
      @include sc(0.6383rem,#fc5c3f);
      text-align: center;
      margin-top: 0.5rem;
    }
  }
  .kefu{
    position: absolute;
    bottom: 2.2rem;
    width: 100%;
    p{
      @include sc(0.5957rem,#bdbdbd);
      text-align: center;
      line-height: 1.2rem;
    }
    p:first-child{
      margin: 0 2.5rem 0.8rem 2.5rem;
      line-height: 1px;
      border-left: 80px solid #ddd;
      border-right:80px solid #ddd;

    }
  }
</style>
