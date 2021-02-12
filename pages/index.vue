<template>
  <div class="container">
    <m-header
    :backIconShow="false"
    :listIconShow="true" />
    <scroll-wrapper>
      <m-swiper :sliderData="sliderData" />
      <main-title
        title="前端进修班"
        :linkShow="true"
       />
      <course-nav :navData="navData"/>
      <main-title
        title="平台合作方"
        :linkShow="true"
       />
       <cooperation :linkData="linkData" />
      <main-title
        title="官方推荐课程"
        :linkShow="true"
        />
      <recom-course
        :recomCourseData="recomCourseData"
       />
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

import IndexModel from '@/models/Index';

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
    RecomCourse
  },
  data () {
    return {
      sliderData: [],
      navData: [],
      linkData: [],
      recomCourseData: []
    }
  },
  async asyncData () {
    const { sliderData, navData, linkData, recomCourseData } = await indexModel.getHomeData();

    return {
      sliderData,
      navData,
      linkData,
      recomCourseData
    }
  }
}
</script>

<style>
</style>
