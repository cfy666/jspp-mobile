const URL = {
  TX_CLASS: '//ke.qq.com/course/',
  IMG_BASE: '//qndn76llb.hd-bkt.clouddn.com/',
  API_BASE_URL: process.env.NODE_ENV === 'production'
                                      ? 'http://xxx'
                                      : 'http://localhost:3008/'
}

export {
  URL
}