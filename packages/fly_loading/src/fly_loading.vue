<!--  -->
<template>
  <div class="loading_modal" v-show="isShow">
    <div class="loading_container">
      <div class="loading">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <p class="text">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'fly-loading',
  data() {
    return {
      isShow: false,
      text:'加载中...'
    };
  },

  methods: {
    showLoading() {
      this.isShow = true;
    },
    close() {
      this.isShow = false;
    }
  },

  computed: {},

  mounted() {},

  components: {}
};
</script>
<style lang='scss' scoped>

.loading_modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1200;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    @keyframes loading{
        50%{ transform:scale(0.4); opacity:.4;}
        100%{ transform:scale(1); opacity:1;}
        }
    .loading_container{
        position: relative;
        width: 210px;
        height: 140px;
        transform: translateY(-150px);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.6);
        .loading {
            position:relative;
            margin-top: -50px;
           };
        .text{
            position: absolute;
            font-size: 16px;
            color: #dddddd;
            bottom: 0px;
            // padding-left: 30px;
        }
    }
    .loading i{ display:block; width:15px;height:15px;border-radius:50%; background-color:#dddddd; position:absolute;}
    .loading i:nth-child(1){top:25px;left:0;animation:loading 1s ease 0s infinite;}
    .loading i:nth-child(2){top:17px;left:17px;animation:loading 1s ease -0.12s infinite;}
    .loading i:nth-child(3){top:0px;left:25px;animation:loading 1s ease -0.24s infinite;}
    .loading i:nth-child(4){top:-17px;left:17px;animation:loading 1s ease -0.36s infinite;}
    .loading i:nth-child(5){top:-25px;left:0;animation:loading 1s ease -0.48s infinite;}
    .loading i:nth-child(6){top:-17px;left:-17px;animation:loading 1s ease -0.6s infinite;}
    .loading i:nth-child(7){top:0px;left:-25px;animation:loading 1s ease -0.72s infinite;}
    .loading i:nth-child(8){top:17px;left:-17px;animation:loading 1s ease -0.84s infinite;}
}

</style>