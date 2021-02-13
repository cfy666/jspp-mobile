<template>
  <div class="container">
    <m-header
      :backIconShow="true"
      :listIconShow="false" />
    <pulling-down-loading-text
      :loadingText="loadingText"
    />
    <scroll-wrapper :onPullDown="onPullDown">
      <m-footer />
    </scroll-wrapper>
  </div>
</template>

<script>
import MHeader from '@/components/common/header';
import ScrollWrapper from '@/components/common/scrollWrapper';
import MFooter from '@/components/common/footer';
import PullingDownLoadingText from '@/components/common/pullDownLoadingText';

import ListModel from '@/models/Index';

import { PULL_DOWN_TEXT } from '@/config/config';

const listModel = new ListModel();
export default {
  name: 'ListPage',
  components: {
    MHeader,
    ScrollWrapper,
    MFooter,
    PullingDownLoadingText
  },
  data () {
    return {
      tabData: [],
      loadingText: PULL_DOWN_TEXT.ORIGIN
    }
  },
  async asyncData () {
    const { tabData } = await listModel.getListData();

    return {
      tabData: [{ id: 0, title: '全部课程'}, ...tabData]
    }
  },
  methods: {
    async getListData() {
      const { tabData } = await listModel.getListData();

      this.tabData = [{ id: 0, title: '全部课程'}, ...tabData];
    },

    onPullDown (scroll) {
      this.loadingText = PULL_DOWN_TEXT.PULLING;
      this.getListData();

      setTimeout(() => {
        this.loadingText = PULL_DOWN_TEXT.FINISHED;

        setTimeout(() => {
          this.loadingText = PULL_DOWN_TEXT.FINISHED;
          scroll.finishPullDown();
        }, 500);

        setTimeout(() => {
          this.loadingText = PULL_DOWN_TEXT.ORIGIN;
        }, 1000);
      }, 1500);
    }
  }
}
</script>

<style>
</style>
