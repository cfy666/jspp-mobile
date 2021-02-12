import HTTP from '@/utils/http';

export default class IndexModel extends HTTP {
  getHomeData () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: 'api/get_home_data',
        success (data) {
          resolve(data);
        },
        error (err) {
          reject(err);
        }
      })
    })
  }
}