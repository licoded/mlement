<template>
  <div>
    <div class="flex-layout align-center" @click="changeCollapsed">
      <svg :class="['toggle-svg', collapsed ? 'collapsed' : '']" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
        <g fill="none" fill-rule="evenodd">
          <path
            d="M3.29175 4.793c-.389.392-.389 1.027 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955c.388-.392.388-1.027 0-1.419-.389-.392-1.018-.392-1.406 0l-2.298 2.317-2.307-2.327c-.194-.195-.449-.293-.703-.293-.255 0-.51.098-.703.293z"
            fill="#344563"
          />
        </g>
      </svg>
      <ml-span type="title" style="font-size: 14px; font-weight: 600;">
        {{ label }}
      </ml-span>
    </div>
    <div v-if="!collapsed" class="toggle-content">
      <slot name="default" />
    </div>
  </div>
</template>

<script>
import MlSpan from '../../span';
export default {
  name: 'MlToggleDiv',
  components: {
    MlSpan,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang="less" scoped>
@import "./src/styles/common.less";

.toggle-svg {
  font-size: 14px;
  vertical-align: baseline;
  border-radius: 3px;
  background-color: rgba(9,30,66,.08);
  cursor: pointer;
  margin: 5px;

  &.collapsed {
    transform: rotate(-90deg);
  }
}

.toggle-content {
  margin-left: 24px;
  font-size: 14px;
}
</style>
