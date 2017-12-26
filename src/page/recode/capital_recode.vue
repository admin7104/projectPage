<template>
    <div class="">
        <head-top :head-title="profiletitle" go-back="true"></head-top>
        <div class="table_title">
            <div class="col-3">
                日期
            </div>
            <div class="col-3">
              资金类型
            </div>
            <div class="col-3">
              金额明细
            </div>
            <div class="col-3">
              可用余额
            </div>
          <div class="clear"></div>
        </div>
        <div class="table_value">
          <div v-for="n in 5" class="item">
            <div  class="col-3">
              <p>
                2017-07-10
              </p>
              <p>
                20:00:10
              </p>

            </div>
            <div  class="col-3">
              <div class="dec">
                充值
              </div>

            </div>
            <div  class="col-3">
              <div class="dec">
                +500.05
              </div>
            </div>
            <div  class="col-3">
              <div class="dec">
                5000.05
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
    </div>
</template>

<script>
import headTop from 'src/components/header/head'
import {mapState, mapMutations} from 'vuex'


export default {

    data(){
        return{
            profiletitle: '资金流水',
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
   @import '../../style/mixin';
  .table_title {
    padding-top: 1.95rem;
    border-bottom: 1px solid #dcdcdc;
    .col-3{
      @include sc(0.7092rem,#666);
      @include bg();
      height: 1.844rem;
      line-height: 1.844rem;
      padding-left: 0;
      padding-right: 0;
      text-align: center;
    }
  }
  .table_value{
    .item{
      @include bg();
      .col-3{
        @include sc(0.6092rem,#777);
        padding-left: 0;
        padding-right: 0;
        text-align: center;
        height: 2.269rem;
        p{
          font-size: 0.5092rem;
        }
        p:first-child{
          margin-top: 0.45rem;
        }
        .dec {
          line-height: 2.269rem;
        }
      }
    }
    .item:nth-child(2n){
      @include bg(#f5f5f5);
    }

  }
</style>
