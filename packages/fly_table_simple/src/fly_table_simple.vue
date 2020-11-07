<template>
  <table class="fly_table_simple" cellpadding='0' cellspacing='0'>
    <thead :style="{ textAlign: align }">
      <tr>
        <th v-for="item in thead" :key="item">{{ item }}</th>
      </tr>
    </thead>
    <tbody :style="{ textAlign: align }">
      <tr v-for="(item_tr, index) in data" :key="index">
        <td v-for="(item_td, key) in item_tr" :key="key">
          <span v-if="item_td != '' && item_td != null">{{ item_td }}</span>
          <span v-else>—</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "fly-table-simple",
  props: {
    type: {
      type: String,
      default: "default",
    },
    thead: {
      type: Array,
      default: function () {
        if (this.type == "demo") {
          return ["参数", "说明", "类型", "默认值"];
        }else{
          return []
        }
      },
    },
    data: {
      type: Array,
      default: function () {
        return [];
      },
    },
    align: {
      type: String,
      default: "left",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.fly_table_simple {
  width: 100%;
  // border-collapse: collapse;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
  thead {
    background: #f3f3f3;
    tr {
      
      th {
        padding: 12px 15px;
        max-width: 250px;
        font-size: 14px;
        font-weight: 400;
        color: #909399;
        white-space: nowrap;
        border-left: 1px solid #dcdfe6;
        border-bottom: 1px solid #dcdfe6;
        &:first-child {
          padding-left: 10px;
          border-left: none;
        }
      }
    }
  }
  tbody {
    tr {
      td {
        padding: 12px 15px;
        // max-width: 250px;
        font-size: 14px;
        font-weight: 400;
        color: #606266;
         border-left: 1px solid #dcdfe6;
        border-bottom: 1px solid #dcdfe6;
        white-space: normal;
        &:first-child {
          padding-left: 10px;
          border-left: none;
        }
      }
      &:last-child{
        td{
          border-bottom: none;
        }
      }
    }
  }
}
</style>
