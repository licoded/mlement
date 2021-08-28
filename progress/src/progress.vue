<template>
  <div class="ml-progress">
    <div class="ml-progress-bar__outer" :style="{height: height + 'px'}">
      <div class="ml-progress-bar__inner" :style="barStyle" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MlProgress',
  props: {
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
  },
};
</script>

<style lang="less" scoped>
.ml-progress {
  display: inline-block;
  .ml-progress-bar__outer {
    background-color: #cccccc;
    .ml-progress-bar__inner{
      height: 100%;
    }
  }
}
</style>
