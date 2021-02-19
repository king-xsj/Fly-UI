<template>
  <div class="content-box">
    <h2 class="demo-title">Fly 图标</h2>
    <p class="demo-introduction">语义化的矢量图形。</p>

    <div class="demo-tip">
      <p>该项目使用 iconfont 图标库</p>
      <p>
        <a href="https://www.iconfont.cn" target="_blank"
          >https://www.iconfont.cn/</a
        >
      </p>
    </div>
    <div class="fly-fly" id="fly-simple">
      <fly-show-block
        :height="283"
        :introduction="'直接通过设置类名为 iconfont，org-icon- 来使用即可。例如：'"
        :title="'使用方法'"
      >
        <template v-slot:showPart>
          <i class="iconfont fly-arrow-top" style="margin: 0 20px"></i>
          <i class="iconfont fly-arrow-right" style="margin: 0 20px"></i>
          <i class="iconfont fly-arrow-bottom" style="margin: 0 20px"></i>
          <i class="iconfont fly-error" style="margin: 0 20px"></i>
          <i class="iconfont fly-success" style="margin: 0 20px"></i>
          <i class="iconfont fly-info" style="margin: 0 20px"></i>
          <i class="iconfont fly-warning" style="margin: 0 20px"></i>
        </template>
        <template v-slot:code>
          <code class="html">{{ fCode(simple.code.html) }}</code>
        </template>
      </fly-show-block>
      <!-- 常用图标 -->
      <div id="fly-ofen-list">
        <h3 class="demo-table-title">常用图标</h3>
        <ul class="fly-list">
          <li
            class="iconBtn"
            :class="{ rigth_block: index % 5 === 4 }"
            :key="item"
            v-for="(item, index) in ofen_icon_list"
            :data-clipboard-text="item"
            @click="copyContent"
          >
            <div>
              <i :class="item"></i>
              <p class="icon-name">{{ item }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <fly-message></fly-message>
  </div>
</template>
<script>
import flyMessage from "../../packages/fly_message/src/fly_message"
export default {
  name: "fly-icon",
  data() {
    return {
      //基础用法DEMO
      simple: {
        code: {
          html: `<i class="iconfont fly-arrow-top" style="margin: 0 20px;"></i>
          <i class="iconfont fly-arrow-right" style="margin: 0 20px;"></i>
          <i class="iconfont fly-arrow-bottom" style="margin: 0 20px;"></i>
          <i class="iconfont fly-back" style="margin: 0 20px;"></i>
          <i class="iconfont fly-error" style="margin: 0 20px"></i>
          <i class="iconfont fly-success" style="margin: 0 20px"></i>
          <i class="iconfont fly-info" style="margin: 0 20px"></i>
          <i class="iconfont fly-warning" style="margin: 0 20px"></i>
         `,
        },
      },
      ofen_icon_list: [
        "iconfont fly-arrow-top",
        "iconfont fly-arrow-right",
        "iconfont fly-arrow-bottom",
        "iconfont fly-error",
        "iconfont fly-success",
        "iconfont fly-info",
        "iconfont fly-warning",
      ],
    };
  },
  components:{
    flyMessage
  },
  methods: {
    copyContent() {
      // var _this = this;
      // var clipboard = new Clipboard(".btn"); //单页面引用
      // var clipboard = new this.Clipboard(".iconBtn"); //在main.js中引用
      // clipboard.on("success", () => {
      //   // 释放内存
      //   clipboard.destroy();
      // });
      // clipboard.on("error", () => {
      //   // 不支持复制
      //   // Message({
      //   //   message: "该浏览器不支持自动复制",
      //   //   type: "warning"
      //   // });
      //   // 释放内存
      //   clipboard.destroy();
      // });
    },
  },
};
</script>
<style lang="scss" scoped>
.fly-fly {
  i {
    font-size: 28px;
  }
  .fly-list {
    width: 100%;
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border: 1px solid #eaeefb;
    border-radius: 4px;
    .rigth_block {
      border-right: 0 !important;
    }
    li {
      float: left;
      cursor: pointer;
      width: 20%;
      text-align: center;
      height: 166px;
      color: #666;
      font-size: 13px;
      // border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.15s ease-in-out;

      div {
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
          Microsoft YaHei, SimSun, sans-serif;
        color: #606266;
        transition: all 0.15s ease-in-out;
        i {
          font-size: 32px;
          color: #606266;
          transition: all 0.15s ease-in-out;
        }
        .icon-name {
          padding: 20px 0;
          height: 1em;
          font-size: 16px;
        }
      }
    }
  }
}
</style>