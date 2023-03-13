const bannerData = {
  title: "媒体投放",
  description: "新闻媒体发稿+自媒体推广 全网覆盖 一站式发布 多账号让您的内容引爆全网"
}

const serviceData = [
  {
    title: "新闻媒体",
    content: "网络媒体资源，全面覆盖门户、行业、垂直媒体，快速响应，24小时服务",
    path: "/pages/media/service/media.png"
  },
  {
    title: "自媒体渠道",
    content: "自媒体，自媒体全平台覆盖，让内容铺遍全网，形成内容矩阵，助力企业提升品牌效益",
    path: "/pages/media/service/self-media.png"
  },
  {
    title: "价格透明",
    content: "品牌可以直接查看媒体/自媒体报价，选择心仪媒体资源，无复杂谈价环节",
    path: "/pages/media/service/price.png"
  },
  {
    title: "自主发布",
    content: "注册充值即可一键将稿件发布至多家媒体/自媒体账户",
    path: "/pages/media/service/self-distribute.png"
  },
  {
    title: "专属服务",
    content: "与品牌一对一对接，全程指导，保证发布与售后更方便更快捷",
    path: "/pages/media/service/service.png"
  }
]

const getPath = (name) => `/pages/media/sponsor/${name}.png`

const sponsorData = [
  "央视网",
  "人民网",
  "中华网",
  "黑马网",
  "环球网",
  "腾讯网",
  "光明网",
  "36kr",
  "慧聪网",
  "凤凰网",
  "网易新闻",
  "知乎",
  "搜狐",
  "今日头条",
  "百家号",
  "一点资讯",
  "新浪网",
  "汽车之家",
  "中金在线",
  "雪球",
  "蓝鲸教育",
  "易车",
  "zaker",
  "虎嗅",
  "钛媒体"
].map((item) => getPath(item))

export const mediaPageData = { bannerData, serviceData, sponsorData }
