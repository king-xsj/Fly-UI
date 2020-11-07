<template>
  <div class="content-box">
    <h2 class="demo-title">orange 图标</h2>
    <p class="demo-introduction">语义化的矢量图形。</p>

    <!-- <orange-anchor>
      <orange-anchor-link href="orange-simple" title="使用方法" />
      <orange-anchor-link href="orange-ofen-list" title="常用图标" />
    </orange-anchor> -->

    <div class="demo-tip">
      <p>该项目使用 iconfont 图标库</p>
      <p>
        <a
          href="https://www.iconfont.cn"
          target="_blank"
        >https://www.iconfont.cn/</a>
      </p>
    </div>

    <fly-backtop :visibilityHeight="300" />

    <div class="orange-orange" id="orange-simple">
      <fly-show-block
        :height="283"
        :introduction="'直接通过设置类名为 iconfont，org-icon- 来使用即可。例如：'"
        :title="'使用方法'"
      >
        <template v-slot:showPart>
          <i class="iconfont fly-arrow-top" style="margin: 0 20px;"></i>
          <i class="iconfont fly-arrow-right" style="margin: 0 20px;"></i>
          <i class="iconfont fly-arrow-bottom" style="margin: 0 20px;"></i>
          <i class="iconfont fly-back" style="margin: 0 20px;"></i>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(simple.code.html)}}</code>
        </template>
      </fly-show-block>
      <!-- 常用图标 -->
      <div id="orange-ofen-list">
        <h3 class="demo-table-title">常用图标</h3>
        <ul class="orange-list">
          <li
            :class="{'rigth_block':index % 5 ===4}"
            :key="item"
            v-for="(item,index) in ofen_icon_list"
          >
            <div>
              <i :class="item" class="iconfont"></i>
              <p class="shn-name">{{item}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fly-icon",
  data() {
    return {
      //基础用法DEMO
      simple: {
        code: {
          html: 
         `<i class="iconfont fly-arrow-top" style="margin: 0 20px;"></i>
          <i class="iconfont fly-arrow-right" style="margin: 0 20px;"></i>
          <i class="iconfont fly-arrow-bottom" style="margin: 0 20px;"></i>
          <i class="iconfont fly-back" style="margin: 0 20px;"></i>
         `
        }
      },
      ofen_icon_list: [
        "fly-arrow-top",
        "fly-arrow-right",
        "fly-arrow-bottom",
        "fly-back"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.orange-orange {
  i {
    font-size: 28px;
  }
  .orange-list {
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
      &:hover {
        background: #409eff;
        div {
          color: #fff;
        }
        i {
          color: #fff;
          font-size: 40px;
        }
      }
      div {
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
          Microsoft YaHei, SimSun, sans-serif;
        color: #99a9bf;
        transition: all 0.15s ease-in-out;
        i {
          font-size: 32px;
          color: #606266;
          transition: all 0.15s ease-in-out;
        }
        .shn-name {
          padding: 20px 0;
          height: 1em;
        }
      }
    }
  }
}
</style>