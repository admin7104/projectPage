<template>
  <div class="invest_detail_page">
    <head-top :head-title="profiletitle" go-back="true"></head-top>
    <section class="invest_block">
      <div class="account_money">
        当前账户余额：<span>50,000.00元</span>
        <mt-button class="btn_recharge right">充值</mt-button>
      </div>
      <div class="clear">
        <h4 class="invest_title">
          投资金额
        </h4>
        <div class="invest_input">
          <mt-field placeholder="请输入100的整数倍" type="tel" class="input_value">元</mt-field>
          <div class="left can_invest">
            剩余可投金额：68,500.00元
          </div>
          <div class="right benefit">
            到期预计收益：<span>0.25</span>元
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </section>
    <section class="coupon">
      <mt-cell title="请选择优惠券" is-link to="/"></mt-cell>
      <p>我已阅读并同意<span>《极速猫用户协议》</span></p>
    </section>
    <mt-button size="large" class = "btn_invest">立即投资</mt-button>
  </div>
</template>

<script>
  import headTop from 'src/components/header/head'
  import {mapState, mapMutations} from 'vuex'
  import {imgBaseUrl} from 'src/config/env'
  import {getImgPath} from 'src/components/common/mixin'

  export default {
    data(){
      return{
        profiletitle: '新手标2017',
        progressVisible: false,
      }
    },
    mounted(){

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
  @import '../../../style/mixin';
  .invest_block{
    padding-top: 2rem;
    .account_money{
        height: 2rem;
        line-height: 2rem;
      margin-left: 0.5rem;
      @include sc(0.68rem,"#666");
      span{
        color: #f65958;
      }
      .btn_recharge {
        border-radius: 20px;
        background:#f65958;
        color: #fff;
        height: 1.2rem;
        margin-top: 0.4rem;
        margin-right: 0.5rem;
      }
    }
    .invest_title {
      @include sc(0.75rem,"#333");
      background: #fff;height: 1.5rem;line-height: 1.5rem;padding-left: 0.5rem;
    }
    .invest_input {
      @include sc(0.58rem,"#999");
      background: $fc;
      .input_value {
        border-bottom: 1px solid #f65958;
      }
      .can_invest {
        text-align: left;
        padding-left: 0.5rem;
        height: 2rem;line-height: 2rem;
      }
      .benefit {
        text-align: right;
        padding-right: 0.5rem;
        height: 2rem;
        line-height: 2rem;
        span{
          color:#f65958;
        }
      }
    }
  }
  .coupon {
    p{
      @include sc(0.68rem,"#999");
      line-height: 2.5rem;
      margin-left: 0.5rem;
      span{
          color: #f65958;
      }
    }
  }
  .btn_invest {
    @include ct;
    width: 90%;
    background:#f65958;
    color: #fff;
    border-radius: 20px;
  }
</style>
