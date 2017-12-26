<template>
  <div class="page-navbar">
    <img class="banner" src="../../images/invest/img.png">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">极速盈</mt-tab-item>
      <mt-tab-item id="3">招财乐</mt-tab-item>
      <mt-tab-item id="4">年年余</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul>
          <li>
          <h3>新手标020117090401 <span>可投资</span></h3>
          <div class="invest_block">
            <div class="invest_info">
              <p class="rate">
                7<span>%</span>+4<span>%</span>
              </p>
              <p>
                预期年化收益率
              </p>
            </div>
            <div class="invest_info">
              <p>
                起投期限：<span>30天</span>
              </p>
              <p>
                剩余金额：<span>50000元</span>
              </p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="page-progress clear">
            <mt-progress :value="20"></mt-progress>
          </div>
        </li>
          <li>
            <h3>新手标020117090401 <span>可投资</span></h3>
            <div class="invest_block">
              <div class="invest_info">
                <p class="rate">
                  7<span>%</span>+4<span>%</span>
                </p>
                <p>
                  预期年化收益率
                </p>
              </div>
              <div class="invest_info">
                <p>
                  起投期限：<span>30天</span>
                </p>
                <p>
                  剩余金额：<span>50000元</span>
                </p>
              </div>
              <div class="clear"></div>
            </div>
            <div class="page-progress clear">
              <mt-progress :value="20"></mt-progress>
            </div>
          </li>
          <li>
            <h3>新手标020117090401 <span>可投资</span></h3>
            <div class="invest_block">
              <div class="invest_info">
                <p class="rate">
                  7<span>%</span>+4<span>%</span>
                </p>
                <p>
                  预期年化收益率
                </p>
              </div>
              <div class="invest_info">
                <p>
                  起投期限：<span>30天</span>
                </p>
                <p>
                  剩余金额：<span>50000元</span>
                </p>
              </div>
              <div class="clear"></div>
            </div>
            <div class="page-progress clear">
              <mt-progress :value="20"></mt-progress>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        222
      </mt-tab-container-item>

      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        444
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    name: 'page-navbar',
    data() {
      return {
        selected: '1',
        progressVisible: false,
        value: 0,
        uploading: false,
        timer: null
      };
    },
    watch: {
      value(val) {
        if (val >= 100) {
          this.uploading = false;
          this.progressVisible = false;
          setTimeout(() => Toast({ message: '上传成功', position: 'bottom', duration: 1000 }), 200);
          clearTimeout(this.timer);
        }
      }
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../style/mixin';

    .page-navbar
    {
      .mt-progress-progress {
        height: 5px!important;
        background-color: #000!important;
      }
      .banner {
        width: 100%;
      }
      .mint-tab-container {padding-bottom: 2.5rem;}
      li{
        @include bg();
        padding-left: 2rem;
        h3 {
          margin-top: 0.5rem;
          padding-top: 1rem;
          font-size: 0.66rem;
          color: #333;
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
          padding-top: 1rem;
          @include bg();
          .invest_info {
            @include fl;
            /*text-align: center;*/
            width: 50%;
            font-size: 0.66rem;
            p{
              height: 1.6rem;line-height: 1.6rem;color: #999;
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
        }
      }

    }
</style>
