<!-- 返回顶部 -->
<template>
  <div class="content-box">
    <h2 class="demo-title">Message 消息提示</h2>
    <fly-show-block :height="900" :title="'基础用法'">
      <template v-slot:showPart>
        <div class="codepadding">
          <fly-button type="success" @click="handleSuccess">Success</fly-button>
          <fly-button type="danger" @click="handleError">Danger</fly-button>
          <fly-button type="warning" @click="handleWarning">Warning</fly-button>
          <fly-button type="info" @click="handleInfo">info</fly-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(code) }}</code>
      </template>
    </fly-show-block>
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <fly-table-simple :data="api" :thead="thead" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: ` 
        <template>
          <div>
              <fly-button type="success" @click="handleSuccess">Success</fly-button>
            <fly-button type="danger" @click="handleError">Danger</fly-button>
            <fly-button type="warning" @click="handleWarning">Warning</fly-button>
            <fly-button type="info" @click="handleInfo">info</fly-button>
          </div>
        </template>
        <script>
          export default {
          data(){
            return {
            }
          },
          methods: {
            handleSuccess(){
              this.$Flymessage({
                type:'success',
                content:'这是一条成功的提示'
              })
            },
            handleError(){
              this.$Flymessage({
                type:'error',
                content:'这是一条error的提示'
              })
            },
            handleWarning(){
              this.$Flymessage({
                type:'warning',
                content:'这是一条warning的提示'
              })
            },
            handleInfo(){
              this.$Flymessage({
                type:'info',
                content:'这是一条info的提示'
              })
            },
         }
       <script> 
      `,
      thead: ["参数", "说明", "类型", "默认值"],
      api: [
        {
          parameter: "content",
          description: "消息文字",
          dataTypes: "String",
          default: "消息提示",
        },
        {
          parameter: "type",
          description: "success warning info error",
          dataTypes: "String",
          default: "-",
        },
        {
          parameter: "duration",
          description: "显示时间 单位'毫秒'",
          dataTypes: "Number",
          default: "2000",
        },
        {
          parameter: "top",
          description: "提示框距离顶部的距离 单位 'px'",
          dataTypes: "Number",
          default: "30",
        },
      ],
    };
  },

  components: {},

  methods: {
    handleSuccess() {
      this.$Flymessage({
        type: "success",
        content: "这是一条成功的提示",
      });
    },
    handleError() {
      this.$Flymessage({
        type: "error",
        content: "这是一条error的提示",
      });
    },
    handleWarning() {
      this.$Flymessage({
        type: "warning",
        content: "这是一条warning的提示",
      });
    },
    handleInfo() {
      this.$Flymessage({
        type: "info",
        content: "这是一条info的提示",
      });
    },
  },

  computed: {},

  mounted() {},
};
</script>
<style lang='scss'>
</style>