<!--Message组件开发-->
<template>
  <transition name="fly-message-slide-fade" @after-leave="handleAfterLeave">
    <div v-if="show" class="fly-message-wrapper" :style="positionStyle">
      <div class="fly-message" :class="[type ? `fly-message-${type}` : '']">
        <span class="iconfont" :class="iconClass"></span>
        <slot>
          <p v-html="content"></p>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "fly-message",
  data() {
    return {
      show: false,
      content: "这是一条默认的提示",
      type: "success",
      duration: 2000,
      top: 30,
      timer:null,
    };
  },
  methods: {
    startTimer(){
      var that = this;
      if(this.duration >0){
        this.timer = setTimeout(()=>{
          that.show = false
        },this.duration)
      }
    },
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
  },
  computed: {
    iconClass() {
      return this.type ? `fly-${this.type}` : "";
    },
    positionStyle() {
      return {
        top: `${this.top}px`,
      };
    },
  },
  destroyed(){
    // clearTimeout(this.timer)
  },
  mounted(){
    // this.startTimer()
  }
};
</script>

<style lang='scss' scoped>
.fly-message-slide-fade-enter-active,
.fly-message-slide-fade-leave-active {
  transition: all 0.3s ease;
}

.fly-message-slide-fade-enter, .fly-message-slide-fade-leave-active
/* .fly-message-slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px);
}
.fly-message-wrapper {
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 30px;
  display: flex;
  justify-content: center;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  .fly-message {
    display: flex;
    align-items: center;
    min-width: 320px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #efefef;
    padding: 15px 15px 15px 20px;
    background-color: #f5f7fd;
    box-shadow: 0px 0px 15px #e2e2e2;
    .iconfont {
      font-size: 20px;
      padding-right: 10px;
    }
    p {
      margin: 0;
      font-size: 16px;
    }
    &.fly-message-success {
      background-color: #f0f9eb;
      border-color: #e1f3d8;
      color: #67c23a;
    }
    &.fly-message-info {
      background-color: #f5f7fd;
      border-color: #efefef;
      color: #797f8c;
    }
    &.fly-message-warning {
      background-color: #fdf6ec;
      border-color: #faecd8;
      color: #e6a23c;
    }
    &.fly-message-error {
      background-color: #fef0f0;
      border-color: #fde2e2;
      color: #f56c6c;
    }
  }
}
</style>