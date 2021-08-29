<template>
  <span class="ml-status-span" :style="{ backgroundColor: color, borderColor: color }">
    {{ title }}
  </span>
</template>

<script>
const mapColor = {
  bootstrap: '#42526e',
  doing: '#0052cc',
  done: '#00875a',
};

const mapTitle = {
  bootstrap: '未开始',
  doing: '处理中',
  done: '完成',
};

export default {
  name: 'MlStatus',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    color() {
      return mapColor[this.type];
    },
    title() {
      return mapTitle[this.type];
    },
  },
};
</script>

<style lang="less" scoped>
.ml-status-span {
  color: #fff;
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  padding: 2px 5px;
  border-radius: 3px;
}
</style>
