<template>
  <div class="fly_show_block">
    <h3 class="show-block-title" v-if="title != ''">{{ title }}</h3>
    <p class="show-block-introduction" v-if="introduction != ''">
      {{ introduction }}
    </p>
    <div
      class="show-block"
      @mouseout="hover_animation = false"
      @mouseover="hover_animation = true"
    >
      <div class="show-part">
        <slot name="showPart" />
      </div>
      <div class="show-code" :style="{ height: code_height+'px' }">
          <pre v-highlightjs>
            <slot name="code" />
          </pre>
      </div>
      <div @click="showCode" class="show-block-control">
        <i
          class="iconfont"
          :class="{
            hovering_i: hover_animation,
            'fly-arrow-bottom': code_height === 0,
            'fly-arrow-top': code_height !== 0,
          }"
        ></i>
        <span :class="{ hovering_span: hover_animation }">
          {{ code_height === 0 ? "显示代码" : "隐藏代码" }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fly-show-block",
  props: {
    title: {
      type: String,
      default: "",
    },
    introduction: {
      type: String,
      default: "",
    },
    height: {
      type: Number,
      default: 100
    },
  },
  data() {
    return {
      hover_animation: false,
      code_height: 0,
    };
  },
  methods: {
    showCode() {
      if (this.code_height === 0) {
        this.code_height = this.height;
      } else {
        this.code_height = 0;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.fly_show_block {
  .show-block-title {
    margin: 55px 0 20px;
    font-weight: 400;
    color: #1f2f3d;
  }
  .show-block-introduction {
    font-size: 14px;
    color: #5e6d82;
    margin: 10px 0 15px;
  }
  .show-block {
    width: 100%;
    margin-bottom: 24px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
    .show-part {
      position: relative;
      padding: 25px;
    }
    .show-code {
      height: 0;
      background: #f3f3f3;
      transition: height 0.2s;
      overflow: hidden;
      pre{
        margin: 0;
      }
    }
    .show-block-control {
      cursor: pointer;
      position: relative;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-top: 1px solid #eaeefb;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      color: #d3dce6;
      &:hover {
        color: #409eff;
        background-color: #f9fafc;
      }
      .hovering_i {
        transform: translateX(-40px);
      }
      .hovering_span {
        transform: translateX(-30px);
        opacity: 1;
      }
      i {
        display: inline-block;
        position: relative;
        font-size: 16px;
        line-height: 44px;
        transition: 0.3s;
      }
      span {
        display: inline-block;
        position: absolute;
        transform: translateX(10px);
        font-size: 14px;
        line-height: 44px;
        transition: 0.3s;
        opacity: 0;
      }
    }
  }
}
</style>
