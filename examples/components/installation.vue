<template>
  <div class="content-box">
    <h2 class="demo-title">安装</h2>

    <!-- 致谢 -->
    <h3 class="demo-table-title">致谢</h3>
    <div class="demo-tip">
      <p>该项目使用Vue.js开发</p>
      <p>
        <a href="https://cn.vuejs.org/" target="_blank">https://cn.vuejs.org/</a>
      </p>
    </div>
    <div class="demo-tip">
      <p>
        该项目DEMO页面模仿
        <span style="color:#ff0000;margin:0 5px;">Element-ui</span>页面开发
      </p>
      <p>
        <a
          href="https://element.eleme.io/#/zh-CN/component/installation"
          target="_blank"
        >https://element.eleme.io/#/zh-CN/component/installation</a>
      </p>
    </div>
    <!-- <div class="demo-tip demo-success-tip">该项目配色由阿金提供</div> -->

    <!-- NPM安装 -->
    <h3 class="demo-table-title">NPM安装</h3>
    <p class="demo-introduction">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <!-- <p class="demo-introduction">
      <a
        href="https://www.npmjs.com/package/shn-vue-ui"
        target="_blank"
      >https://www.npmjs.com/package/shn-vue-ui</a>
    </p>-->
    <div class="demo-code-block">npm i orange_collect</div>

    <!-- 快速上手 -->
    <h3 class="demo-table-title">快速上手</h3>
    <p class="demo-introduction">你可以在 main.js 中引入整个 orange_collect。</p>
    <div class="demo-code-block">
      <p>import orange_collect from 'orange_collect'</p>
      <p>import 'orange_collect/lib/orange_collect.css'</p>

      <p style="margin-top:20px">Vue.use(orange_collect);</p>
    </div>

    <!-- 常用动效 -->
    <h3 class="demo-table-title">常用动效</h3>
    <div class="demo-code-block">
      <p>transition: all 0.2s linear;</p>
    </div>
    <fly-backtop :visibilityHeight="300" />
   
  </div>
</template>

<script>
export default {
  name: "installation",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
.github-img {
  cursor: pointer;
  position: relative;
  top: 5px;
  margin: 0 8px 0 5px;
}
</style>

