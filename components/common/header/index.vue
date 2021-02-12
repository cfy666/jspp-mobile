<template>
  <header class="header">
    <header-back-icon :backIconShow="backIconShow" />
    <header-logo />
    <header-list-icon :listIconShow="listIconShow" />
  </header>
</template>

<script>
import HeaderBackIcon from './backIcon';
import HeaderLogo from './logo';
import HeaderListIcon from './listIcon';
export default {
  name: 'MHeader',
  components: {
    HeaderBackIcon,
    HeaderLogo,
    HeaderListIcon
  },
  props: {
    backIconShow: {
      type: Boolean,
      default () {
        return false;
      }
    },
    listIconShow: {
      type: Boolean,
      default () {
        return true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
 .header {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   height: .44rem;
   background-color: #fff;
   border-bottom: .01rem solid #ddd;
 }
</style>