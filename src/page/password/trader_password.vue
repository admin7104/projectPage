<template>
  <div class="">
    <head-top :head-title="profiletitle" go-back="true"></head-top>
    <section class="login_block container-fluid">
      <div class="row phone row_block">
        <div class="col-4">
          <img class="icon_phone icon_" src="../../images/login/icon_psd.png"/>原密码
        </div>
        <div class="col-8">
          <input  placeholder="请输入原始密码"/>
        </div>
      </div>
      <div class="row phone row_block">
        <div class="col-4">
          <img class="icon_phone icon_" src="../../images/login/icon_psd.png"/>新密码
        </div>
        <div class="col-8">
          <input  placeholder="请输入8-16位字母数字组合密码"/>
        </div>
      </div>
      <div class="row phone row_block">
        <div class="col-4">
          <img class="icon_phone icon_" src="../../images/login/icon_psd.png"/>确认密码
        </div>
        <div class="col-8">
          <input  placeholder="请输入8-16位字母数字组合密码"/>
        </div>
      </div>
    </section>
    <div class="btn_reg_container">
      <mt-button size="large" class = "btn_reg">确认修改</mt-button>
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
        profiletitle: '修改登录密码',
      }
    },
    mounted(){
      document.body.style.backgroundColor = "#fff";
      document.getElementsByClassName("head_goback")[0].style.stroke = "#666";
      document.getElementsByClassName("title_text")[0].style.color = "#282828";
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

  .row_block {height: 2.017rem;
    line-height: 2.017rem;      border-bottom: 1px solid #eaeaea;
    .col-4{  padding-left: 0;@include sc(0.5957rem,#4f4f4f)}
    .col-5 {padding-left: 0;      height: 2.017rem;line-height: 2.017rem;padding-left: 0;
      input{height: 2.017rem;  line-height: 2.017rem;background: transparent;position: relative;bottom: 0.1rem;width: 100%;}}
    .col-7 {
      height: 2.017rem;line-height: 2.017rem;padding-left: 0;
      input{height: 2.017rem;  line-height: 2.017rem;background: transparent;position: relative;bottom: 0.1rem;width: 100%;}
    }
    .col-8 {
      height: 2.017rem;line-height: 2.017rem;padding-left: 0;
      input{height: 2.017rem;  line-height: 2.017rem;background: transparent;position: relative;bottom: 0.1rem;width: 100%;}
    }
    .get_code {padding-right: 0;padding-left: 0;text-align: right;
      .btn_get_code{
        width: 100%;
        @include sc(0.5106rem,#fff);
        @include borderRadius(5px);
        height: 1.2rem;
        line-height: 1.2rem;background: #fc5c3f;
        vertical-align: middle;
        margin-bottom: 0.3rem;
      }
    }
  }
  .icon_ { margin-right: 0.3rem;line-height: 2.017rem;position: relative;top: 0.05rem;}
  .login_block {
    height: 100%;
    margin: 0 1rem;
    padding-top: 3rem;
    .phone {
      .icon_phone{
        width: 0.5106rem;
        height: 0.617rem;
      }
    }
    .psd {
      .icon_psd{
        width: 0.5106rem;
        height: 0.5957rem;
      }
      .icon_on_off{
        width: 0.766rem;
        height: 0.5957rem;
        margin-top: 0.7rem;
      }
    }
    .forget_password {
      @include sc(0.5532rem,#999);
    }

  }
  .btn_reg_container{
    margin: 1.5rem 1rem 0 1rem;
    .btn_reg {border-radius: 5px;background: #fc5c3f;color: #fff;}
  }
</style>
