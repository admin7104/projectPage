<template>
  <div class="link_page">
    <div class="contain">
      <input class="input_1" v-model="word" placeholder="请输入像素值"/>
      <div class="word">{{word/23.5/2}}</div>
      <input class="input_1" v-model="word2" placeholder="请输入像素值"/>
      <div class="word">{{word2/23.5/2}}</div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        word: '',
        word2: ''
      }
    },
    mounted(){
    },
    components: {
    },
    computed: {
    },
    methods: {

    },
    watch: {
//      userInfo: function (value){
//        this.initData();
//      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.input_1{width: 100%;height: 5rem;font-size: 1rem;text-align: center;}
.word {width: 100%;height: 5rem;line-height: 5rem;font-size: 1rem;text-align: center;}
</style>
