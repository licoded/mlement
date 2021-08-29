<template>
  <div class="ml-progress display-center">
    <div class="ml-progress-bar__outer flex-layout" :style="{height: height + 'px', flexDirection}">
      <div class="ml-progress-bar__inner" :style="barStyle" />
    </div>
  </div>
</template>

<script>
const flexDirectionMap = {
  left: 'row',
  right: 'row-reverse',
};

export default {
  name: 'MlProgress',
  props: {
    pos: {
      type: String,
      default: 'left',
    },
    height: {
      type: Number,
      default: 10,
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: (val) => val >= 0 && val <= 100,
    },
    color: {
      type: String,
      default: '',
      required: true,
    },
  },
  computed: {
    barStyle() {
      const style = {};
      style.width = this.percentage + '%';
      style.backgroundColor = this.color;
      return style;
    },
    flexDirection() {
      return flexDirectionMap[this.pos];
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/common.less";

.ml-progress {
  display: inline-block;

  .ml-progress-bar__outer {
    width: 100%;
    background-color: #cccccc;

    .ml-progress-bar__inner{
      height: 100%;
    }
  }
}
</style>
