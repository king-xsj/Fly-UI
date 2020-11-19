
<template>
  <button
    class="fly-btn"
    :type="nativeType"
    :style="btnStyle"
    :class="[
      type ? 'fly-button-' + type : '',
      {
        'is-disabled': buttonDisabled,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
    :disabled="buttonDisabled"
    @click="handleClick"
  >
    <!-- <span class="name">{{title}}</span> -->
    <span class="name" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      //类型	string	primary / success / warning / danger / info / text
      type: String,
      default: "default",
    },
    size: String,
    icon: {
      //图标
      type: String,
      default: "",
    },
    bgColor: {
      //背景色
      type: String,
      default: "",
    },
    borderColor: {
      //背景色
      type: String,
      default: "",
    },
    textColor: {
      //背景色
      type: String,
      default: "",
    },
    nativeType: {
      //原生 type 属性	string	button / submit / reset
      type: String,
      default: "button",
    },
    loading: Boolean, //加载中
    disabled: Boolean, //是否禁用
    plain: Boolean, //是否朴素
    autofocus: Boolean, //是否聚焦
    round: Boolean, //是否圆角
    circle: Boolean, //是否圆形
  },
  name: "fly-button",
  data() {
    return {};
  },
  mounted() {
    console.log(this.round);
  },
  computed: {
    buttonSize() {
      return this.size;
    },
    buttonDisabled() {
      return this.disabled;
    },
    btnStyle() {
      return {
       backgroundColor:this.bgColor || '',
       borderColor:this.borderColor || '',
       color:this.textColor || ''
      };
    }
  },

  // watch:
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>
<style lang="scss" scoped>
$primary: #4b9cf3; /*1.这就是声明变量*/
$success: #67c23a; /*1.这就是声明变量*/
$warning: #e6a23c; /*1.这就是声明变量*/
$danger: #f56c6c; /*1.这就是声明变量*/
$info: #909399; /*1.这就是声明变量*/
$default: #ffffff; /*1.这就是声明变量*/
.fly-btn + .fly-btn {
  margin-left: 20px;
}
.fly-btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: $default;
  border: 1px solid #dee0e6;
  color: #636363;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 3px;
  &.is-round {
    border-radius: 40px;
  }
  &.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: $default;
    border-color: #ebeef5;
    &:focus,
    &:hover {
      color: #c0c4cc;
      background-color: $default;
      border-color: #ebeef5;
    }
  }
  &:focus,
  &:hover {
    color: #3d9eff;
    border-color: #c8e3ff;
    background-color: #e9f3ff;
  }
  &.fly-button-primary {
    color: $default;
    background-color: $primary;
    border-color: $primary;
    &:focus,
    &:hover {
      background-color: rgba($color: $primary, $alpha: 0.85);
      border-color: rgba($color: $primary, $alpha: 0.85);
    }
    &.is-disabled {
      color: $default;
      background-color: #89bcf1;
      border-color: #89bcf1;
    }
  }
  &.fly-button-success {
    color: $default;
    background-color: $success;
    border-color: $success;
    &:focus,
    &:hover {
      background-color: rgba($color: $success, $alpha: 0.85);
      border-color: rgba($color: $success, $alpha: 0.85);
    }
    &.is-disabled {
      color: $default;
      background-color: #a3e682;
      border-color: #a3e682;
    }
  }
  &.fly-button-warning {
    color: $default;
    background-color: $warning;
    border-color: $warning;
    &:focus,
    &:hover {
      background-color: rgba($color: $warning, $alpha: 0.85);
      border-color: rgba($color: $warning, $alpha: 0.85);
    }
    &.is-disabled {
      color: $default;
      background-color: #f1be73;
      border-color: #f1be73;
    }
  }
  &.fly-button-danger {
    color: $default;
    background-color: $danger;
    border-color: $danger;
    &:focus,
    &:hover {
      background-color: rgba($color: $danger, $alpha: 0.85);
      border-color: rgba($color: $danger, $alpha: 0.85);
    }
    &.is-disabled {
      color: $default;
      background-color: #f59595;
      border-color: #f59595;
    }
  }
  &.fly-button-info {
    color: $default;
    background-color: $info;
    border-color: $info;
    &:focus,
    &:hover {
      background-color: rgba($color: $info, $alpha: 0.85);
      border-color: rgba($color: $info, $alpha: 0.85);
    }
    &.is-disabled {
      color: $default;
      background-color: #c0c3ca;
      border-color: #c0c3ca;
    }
  }
  &.fly-button-text {
    background-color: transparent;
    border-color: transparent;
    &.is-disabled {
      color: #c0c4cc;
      background-color: transparent;
      border-color: transparent;
    }
  }
}
</style>
