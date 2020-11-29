<template>
  <div class="home">
    <div class="header">
      <div class="container">
        <span class="title">Fly-UI</span>
      </div>
    </div>
    <div class="main">
      <div class="sidebar">
        <ul>
          <li :key="item_1.title" class="nav-item" v-for="item_1 in ul_data">
            <a>{{item_1.title}}</a>
            <ul class="pure-menu-list" v-if="item_1.li_data.length != 0">
              <li :key="item_2.path" class="nav-item" v-for="item_2 in item_1.li_data">
                <div class="nav-group__title" v-if="item_2.group">{{item_2.group}}</div>
                <a
                  :class="{'active':active == item_2.id}"
                  :href="item_2.path"
                  @click="active = item_2.id"
                >{{item_2.name}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <fly-backtop :visibilityHeight="300" />
      <div class="content" id="router_view_box">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      active: -1,
      ul_data: [
        {
          title: "开发指南",
          li_data: [
            { id: -1, name: "安装/快速上手", path: "#/views/installation" },
            { id: -2, name: "Icon 图标", path: "#/views/icon" }
          ]
        },
      
        {
          title: "组件",
          li_data: [
            {
              id: "001",
              group: "Base",
              name: "Button 按钮",
              path: "#/views/button"
            },
           
            {
              id: "004",
              group: "Notice",
              name: "Loading 加载",
              path: "#/views/notice/loading"
            },
            {
              id: "002",
              name: "Message 消息提示",
              path: "#/views/notice/message"
            },
            {
              id: "005",
              group: "Others",
              name: "Backtop 返回顶部",
              path: "#/views/others/backtop"
            }
          ]
        },
        
      ],
      sidebarHover: false
    };
  },
  watch: {
    $route: function(to, from) {
      if (from.path != to.path) {
        document.documentElement.scrollTop = 0;
      }
    }
  },
  mounted() {
    switch (this.$router.history.current.fullPath) {
      case "/views/installation":
        this.active = -1;
        break;
      case "/views/icon":
        this.active = -2;
        break;
      case "/views/message":
        this.active = "002";
        break;
     
      
      case "/views/button":
        this.active = "001";
        break;
      case "/views/notice/loading":
        this.active = "004"
        break;
      case "/views/others/backtop":
        this.active = "005"
        break;
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .header {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #fff;
    border-bottom: 1px solid #dcdfe6;
    .container {
      height: 100%;
      width: 1140px;
      margin: 0 auto;
      .title {
        // color: $--color-primary;
        color: #409eff;
        font-size: 26px;
        font-weight: 500;
        font-family: "微软雅黑";
      }
    }
  }
  .main {
    position: relative;
    width: 1140px;
    height: -webkit-calc(100% - 80px);
    height: -moz-calc(100% - 80px);
    height: calc(100% - 80px);
    margin: 0 auto;
    padding: 10px 0;
    top: 80px;
    display: flex;
    // transform: translate(0, 0);
    // overflow: auto;
    // visibility: hidden;
    // &:focus,
    // &:hover {
    //   visibility: visible;
    // }
    .sidebar {
      position: fixed;
      margin-right: 40px;
      width: 260px;
      height: 80%;
      top: 135px;
      visibility: hidden;
      overflow: auto;
      &:hover {
        visibility: visible;
      }
      > ul {
        visibility: visible;
      }
      .nav-item {
        list-style: none;
        a {
          font-size: 15px;
          color: #333;
          line-height: 40px;
          height: 40px;
          margin: 0;
          padding: 0;
          text-decoration: none;
          display: block;
          position: relative;
          transition: 0.15s ease-out;
          font-weight: 700;
        }
        .nav-group__title {
          font-size: 12px;
          color: #999;
          line-height: 26px;
          margin-top: 15px;
        }
        .pure-menu-list {
          a {
            display: block;
            height: 40px;
            color: #444;
            line-height: 40px;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 400;
            &:hover {
              color: #409eff;
            }
          }
          .active {
            color: #409eff;
          }
        }
      }
    }
    .content {
      flex: 1;
      width: 100%;
      padding: 0 0px 0 10px;
      margin-left: 300px;
    }
  }
}
</style>

