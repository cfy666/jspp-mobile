<template>
  <div class="container">
    <m-header
      :backIconShow="true"
      :listIconShow="false" />
    <scroll-wrapper>
      <m-footer />
    </scroll-wrapper>
  </div>
</template>

<script>
import MHeader from '@/components/common/header';
import ScrollWrapper from '@/components/common/scrollWrapper';
import MFooter from '@/components/common/footer';
export default {
  name: 'ListPage',
  components: {
    MHeader,
    ScrollWrapper,
    MFooter
  }
}
</script>

<style>
</style>
