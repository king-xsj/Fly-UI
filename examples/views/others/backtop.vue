<!-- 返回顶部 -->
<template>
  <div class="content-box">
    <h2 class="demo-title">Backtop 返回顶部</h2>
   <fly-show-block
      :height="200"
      :title="'普通按钮'"
      introduction="基础按钮的用法"
      id="button-Simple"
    >
      <template v-slot:showPart>
          滚动页面
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
  data () {
    return {
      code:`<fly-backtop :visibilityHeight="300" />`,
      thead:["参数", "说明", "类型", "默认值"],
      api:[{
          parameter: "visibilityHeight",
          description: "滚动页面多高时出现返回顶部按钮",
          dataTypes: "Number",
          default: "500",
        },
        {
          parameter: "target",
          description: "在哪里滚动需要返回顶部按钮",
          dataTypes: "String",
          default: "window",
        }]
    };
  },

  components: {},

  methods: {},

  computed: {},

  mounted(){},

}

</script>
<style lang='scss'>
</style>