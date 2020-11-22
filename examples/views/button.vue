<template>
  <div class="content-box">
    <h2 class="demo-title">Button 按钮</h2>
    <p class="demo-introduction">常用按钮介绍</p>

    <fly-anchor>
      <fly-anchor-link href="button-Simple" title="普通按钮" />
      <fly-anchor-link href="button-Black" title="暗色按钮" />
      <fly-anchor-link href="button-Line" title="线性按钮" />
     
    </fly-anchor>

    <!-- 基础用法DEMO -->
    <fly-show-block
      :height="200"
      :title="'普通按钮'"
      introduction="基础按钮的用法"
      id="button-Simple"
    >
      <template v-slot:showPart>
        <div class="codepadding">
          <fly-button>Default</fly-button>
          <fly-button type="primary">Primary</fly-button>
          <fly-button type="success">Success</fly-button>
          <fly-button type="danger">Danger</fly-button>
          <fly-button type="warning">Warning</fly-button>
          <fly-button type="info">info</fly-button>
          <fly-button type="text">text</fly-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(simple.code.html) }}</code>
      </template>
    </fly-show-block>
    <fly-show-block
      :height="200"
      :title="'圆角按钮'"
      introduction="圆角按钮用法"
      id="button-Black"
    >
      <template v-slot:showPart>
        <div class="codepadding">
          <fly-button round>Default</fly-button>
          <fly-button type="primary" round>Primary</fly-button>
          <fly-button type="success" round>Success</fly-button>
          <fly-button type="danger" round>Danger</fly-button>
          <fly-button type="warning" round>Warning</fly-button>
          <fly-button type="info" round>info</fly-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(simple.code.roundHtml) }}</code>
      </template>
    </fly-show-block>
    <!-- 基础用法DEMO -->
    <fly-show-block
      :height="200"
      :title="'禁用按钮'"
      introduction="按钮不可用状态"
      id="button-Line"
    >
      <template v-slot:showPart>
        <div class="codepadding">
          <fly-button disabled>Default</fly-button>
          <fly-button type="primary" disabled>Primary</fly-button>
          <fly-button type="success" disabled>Success</fly-button>
          <fly-button type="danger" disabled>Danger</fly-button>
          <fly-button type="warning" disabled>Warning</fly-button>
          <fly-button type="info" disabled>info</fly-button>
          <fly-button type="text" disabled>text</fly-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(simple.code.disabledHtml) }}</code>
      </template>
    </fly-show-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <fly-table-simple :data="api" :thead="thead" />
    </div>
  </div>
</template>

<script>
export default {
  name: "button-demo",
  data() {
    return {
      thead: ["参数", "说明", "类型", "默认值"],
      // a: document.getElementById("router_view_box"),
      simple: {
        code: {
          html: `
            <fly-button>Default</fly-button>
            <fly-button type="primary">Primary</fly-button>
            <fly-button type="success">Success</fly-button>
            <fly-button type="danger">Danger</fly-button>
            <fly-button type="warning">Warning</fly-button>
            <fly-button type="info">info</fly-button>
            <fly-button type="text">text</fly-button>
          `,
          roundHtml:`
          <fly-button round>Default</fly-button>
          <fly-button type="primary" round>Primary</fly-button>
          <fly-button type="success" round>Success</fly-button>
          <fly-button type="danger" round>Danger</fly-button>
          <fly-button type="warning" round>Warning</fly-button>
          <fly-button type="info" round>info</fly-button>
          `,
          disabledHtml:`
           <fly-button disabled>Default</fly-button>
          <fly-button type="primary" disabled>Primary</fly-button>
          <fly-button type="success" disabled>Success</fly-button>
          <fly-button type="danger" disabled>Danger</fly-button>
          <fly-button type="warning" disabled>Warning</fly-button>
          <fly-button type="info" disabled>info</fly-button>
          <fly-button type="text" disabled>text</fly-button>
          `
        },
      },
      api: [
        {
          parameter: "type",
          description:
            "设置按钮类型,default / primary / success  / danger / warn / info / text",
          dataTypes: "String",
          default: "default",
        },
        {
          parameter: "size",
          description: "暂未开发",
          dataTypes: "String",
          default: "medium",
        },
        {
          parameter: "circle",
          description: "是否圆形按钮,true/false",
          dataTypes: "Boolean",
          default: "false",
        },
        {
          parameter: "round",
          description: "是否椭圆按钮,true/false",
          dataTypes: "Boolean",
          default: "false",
        },

        {
          parameter: "disabled",
          description: "是否禁用按钮,true/false",
          dataTypes: "Boolean",
          default: "false",
        },

        {
          parameter: "icon",
          description: "暂未开发",
          dataTypes: "String",
          default: "",
        },
      ],
    };
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
.codepadding {
  padding: 7px;
}
</style>

