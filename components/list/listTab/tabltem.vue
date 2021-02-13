<template>
  <li 
    :class="['tab-item', { current: index === this.$store.state.id }]"
    @click="onTabClick"
  >
    {{item.title}}
  </li>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    item: Object,
    index: Number
  },
  methods: {
    onTabClick () {
      this.$emit('onTabClick');
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-item {
  float: left;
  width: 1.2rem;
  height: 100%;
  font-size: .14rem;
  text-align: center;
  line-height: .35rem;
  border-bottom: 2px solid transparent;

  &.current {
    color: #23b8ff;
    border-color: #23b8ff;
  }
}
</style>