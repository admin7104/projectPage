<template>
  <div class="recharge_withdraw_page">
    <head-top :head-title="profiletitle" go-back="true"></head-top>
    <div class="withdraw_content">
      <div class="balance">
        <p class="text">账户余额(元)</p>
        <p class="money_value">0.00</p>
      </div>
      <div class="operation">
        <div class="info">
          <img class="bank_img" src="../../images/account/bank/gongshang.png">
          <p class="bank_name">中国工商银行<br><span class="bank_num">尾号8018</span></p>
          <p class="desc">单笔限额<span>5万元</span><br>单日充值限额<span>50万元</span></p>
          <div class="clear"></div>
          <div class="intro">
            <div><p>姓名</p><p class="username">王二</p></div>
            <div class="clear"></div>
            <div><p>手机号</p><p class="phone">{{phone}}</p></div>
            <input class="recharge_money" placeholder="请输入充值金额，2元起充">
          </div>
        </div>
        <input type="button" class="recharge_btn" value="确认">
        <a class="forget_pwd">忘记交易密码？</a>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from 'src/components/header/head'
  import {mapState, mapMutations} from 'vuex'
  import {getImgPath} from 'src/components/common/mixin'
  import {PhoneFormat} from '../../config/mUtils'

  export default {
    data(){
      return{
        profiletitle: '充值',
        phone:"15158866411"
      }
    },
    mounted(){
      this.phone = PhoneFormat(this.phone);
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
  @import "../../style/recharge_withdraw.css";
</style>
