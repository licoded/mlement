<template>
  <span :class="['ml-span', type ? 'ml-span-'+type : '']">
    <slot name="default" />
  </span>
</template>

<script>
export default {
  name: 'MlSpan',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="less" scoped>
.ml-span-info {
  color: #6b778c;
}

.ml-span-title {
  color: #172b4d;
}
</style>
