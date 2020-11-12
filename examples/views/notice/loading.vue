<!--  -->
<template>
  <div>
    <div class="loading" @click="showLoading()">loading</div>
    <div class="loading" @click="closeLoading()">loading</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading:''
    };
  },

  components: {},

  methods: {
    closeLoading(){
      this.loading.close()
    },
    showLoading(){
      var that = this;
      this.loading = this.$loading()
      setTimeout(()=>{
        that.loading.close()
      },3000)
    }
  },

  computed: {},

  mounted(){},

}

</script>
<style lang='scss'>
</style>