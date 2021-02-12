const navData = require('../configs/nav'),
      linkData = require('../configs/link'),
      { searchData } = require('../libs/utils');

const { getSliderData } = require('../services/Slider'),
      { getRecomCourseData } = require('../services/RecomCourse'),
      { getCollectinData } = require('../services/Collection'),
      { getStarTeacherData } = require('../services/Teacher'),
      { getCourseCategory } = require('../services/CourseTab'),
      { getCourseData } = require('../services/Coures');

class Home {
  async getHomeData (ctx, next) {
    const sliderData = await getSliderData(),
          recomCourseData = await getRecomCourseData();
      
    ctx.body = {
      sliderData,
      navData,
      linkData,
      recomCourseData
    }
  }

  async getListData (ctx, next) {
    
    ctx.body = {

    }
  }

}

module.exports = new Home();