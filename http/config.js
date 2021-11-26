/**
 * 小程序配置文件
 */

const baseURL = 'https://miniapp.aifitpro.aicare.net.cn/'


const config = {
  GetDiscoverList: baseURL + "api/miniapp/discoveryList",
  GetArticleById: baseURL + "api/miniapp/discoveryById",
  // baseUrl: function getBaseURL() {
  //   return baseURL
  // }

}


module.exports = baseURL
module.exports = config //下面这个代码会覆盖上面那句