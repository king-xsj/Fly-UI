<!--  -->
<template>
   <div class="content-box">
    <h2 class="demo-title">Loading 加载</h2>
    <p class="demo-introduction">Loading介绍</p>
    <div class="fly-fly" id="fly-simple">
      <fly-show-block
        :height="483"
       
        :title="'使用方法'"
      >
        <template v-slot:showPart>
          <fly-button type="primary" @click="showLoading">Loading</fly-button>
         </template>
        <template v-slot:code>
          <code class="html">{{fCode(simple.code.html)}}</code>
        </template>
      </fly-show-block>
    
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading:'',
      simple: {
        code: {
          html:`
            <template>
              <div>
                <fly-button type="primary" @click="showLoading">Primary</fly-button>
              </div>
            </template>
            <script>
             export default {
              data(){
                return {

                }
              },
              methods:{
                showLoading(){
                  var that = this;
                  this.loading = this.$loading()
                  setTimeout(()=>{
                    that.loading.close()
                  },3000)
                }
              }
            }
            <script>
         `
        }
      },
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