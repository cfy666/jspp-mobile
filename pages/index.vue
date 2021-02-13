<template>
  <div class="container">
    <m-header
    :backIconShow="false"
    :listIconShow="true" />
    <pulling-down-loading-text
      :loadingText="loadingText"
      :topPosition=".44"
    />
    <scroll-wrapper :onPullDown="onPullDown">
      <m-swiper :sliderData="sliderData" 
      />
      <main-title
        title="前端进修班"
        :linkShow="true"
      />
      <course-nav :navData="navData"/>
      <main-title
        title="平台合作方"
        :linkShow="true"
      />
      <cooperation :linkData="linkData"
      />
      <main-title
        title="官方推荐课程"
        :linkShow="true"
      />
      <recom-course
        :recomCourseData="recomCourseData"
       />
      <collection :collectionData="collectionData" 
      />
      <main-title
        title="全网优秀老师"
        :linkShow="true"
      />
      <teacher :teacherData="teacherData" />
      <m-footer />
    </scroll-wrapper>
  </div>
</template>

<script>
import MHeader from '@/components/common/header';
import ScrollWrapper from '@/components/common/scrollWrapper';
import MFooter from '@/components/common/footer';
import MSwiper from '@/components/index/swiper';
import MainTitle from '@/components/common/mainTitle';
import CourseNav from '@/components/index/courseNav';
import Cooperation from '@/components/index/cooperation';
import RecomCourse from '@/components/index/recomCourse';
import Collection from '@/components/index/collection';
import Teacher from '@/components/index/teacher';
import PullingDownLoadingText from '@/components/common/pullDownLoadingText';

import IndexModel from '@/models/Index';

import { PULL_DOWN_TEXT } from '@/config/config';

const indexModel = new IndexModel;
export default {
  name: 'IndexPage',
  components: {
    MHeader,
    ScrollWrapper,
    MFooter,
    MSwiper,
    MainTitle,
    CourseNav,
    Cooperation,
    RecomCourse,
    Collection,
    Teacher,
    PullingDownLoadingText
  },
  data () {
    return {
      sliderData: [],
      navData: [],
      linkData: [],
      recomCourseData: [],
      collectionData: [],
      teacherData: [],
      loadingText: PULL_DOWN_TEXT.ORIGIN
    }
  },
  async asyncData () {
    const { sliderData, navData, linkData, recomCourseData, collectionData, teacherData } = await indexModel.getHomeData();

    return {
      sliderData,
      navData,
      linkData,
      recomCourseData,
      collectionData,
      teacherData
    }
  },
  methods: {
    async getHomeData () {
      const { sliderData, navData, linkData, recomCourseData, collectionData, teacherData } = await indexModel.getHomeData();

      this.sliderData = sliderData;                
      this.navData = navData;
      this.linkData = linkData;
      this.recomCourseData = recomCourseData;
      this.collectionData = collectionData;
      this.teacherData = teacherData;
    },

    onPullDown (scroll) {
      this.loadingText = PULL_DOWN_TEXT.PULLING;
      this.getHomeData();

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
