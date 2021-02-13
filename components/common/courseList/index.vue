<template>
  <div class="course-wrapper">
    <course-item
      v-for="(item, index) of courseData"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import CourseItem from './courseItem';
export default {
  name: 'CourseList',
  props: {
    courseData: Array
  },
  components: {
    CourseItem
  }
}
</script>

<style>

</style>