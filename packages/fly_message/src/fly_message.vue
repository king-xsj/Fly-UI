<!--Message组件开发-->
<template>
  <transition name="fly-message-fade">
    <div
      v-if="show"
      class="fly-message"
      :style="{ top: top + 'px' }"
      :class="[type ? `fly-message-${type}` : '']"
    >
      <span class="iconfont" :class="type ? `fly-${type}` : ''"></span>
      <slot>
        <p v-html="content"></p>
      </slot>
    </div>
  </transition>
</template>

<script>

export default {
  name: "fly-message",
  data() {
    return {
      show:false,
      content: "这是一条成功的提示 ",
      type: "success",
      duration:'2000',
      top: 30,
    };
  },
  methods:{
      handleAfterLeave(){

      }
  },
  computed: {},
};
</script>

<style lang='scss' scoped>
.fly-message {
  // transition: opacity .3s,transform .4s,top .4s;
  position: fixed;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  min-width: 320px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #efefef;
  padding: 15px 15px 15px 20px;
  background-color: #f5f7fd;
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
.fly-message-fade-enter-active,
.fly-message-fade-leave-active {
  transition: all 0.3s linear;
}
.fly-message-fade-enter,
.fly-message-fade-leave-to {
  opacity: 0;
  top: 0;
}
</style>