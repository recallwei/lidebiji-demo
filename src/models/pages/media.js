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

const processData = [
  {
    title: "01.注册登录",
    iconPath: "/pages/media/process/注册登录.png"
  },
  {
    title: "02.充值费用",
    iconPath: "/pages/media/process/充值费用.png"
  },
  {
    title: "03.编辑稿件",
    iconPath: "/pages/media/process/编辑稿件.png"
  },
  {
    title: "04.选择媒体",
    iconPath: "/pages/media/process/选择媒体.png"
  },
  {
    title: "05.确认下单",
    iconPath: "/pages/media/process/确认下单.png"
  },
  {
    title: "06.等待发布回链",
    iconPath: "/pages/media/process/等待发布回链.png"
  }
]

const brandCustomerData = [
  {
    title: "入驻媒体",
    description: "新闻媒体、自媒体、社交媒体",
    numText: "20w+"
  },
  {
    title: "品牌客户",
    description: "多年沉淀深得行业广泛认可与好评",
    numText: "10w+"
  },
  {
    title: "日均发稿",
    description: "资源众多、响应快速，部分资源支持7*24小时发布稿件",
    numText: "5w+"
  }
]

const salesData = [
  {
    title: "公信力强",
    imgPath: "/pages/media/sales/公信力强.png",
    iconPath: "/pages/media/sales/公信力强-icon.png",
    description: "通过官媒网站、权威媒体发布品牌内容，更易打造品牌专业形象、提升公信力"
  },
  {
    title: "精准投放",
    imgPath: "/pages/media/sales/精准投放.png",
    iconPath: "/pages/media/sales/精准投放-icon.png",
    description: "企业可根据行业属性、产品受众精准选择媒体/自媒体类型，直接聚焦潜在用户群体"
  },
  {
    title: "成本更低",
    imgPath: "/pages/media/sales/成本更低.png",
    iconPath: "/pages/media/sales/成本更低-icon.png",
    description: "一篇软文经撰写发布后，无后续的费用，而其他广告形式按日或周期付费，成本高昂"
  },
  {
    title: "全面覆盖",
    imgPath: "/pages/media/sales/全面覆盖.png",
    iconPath: "/pages/media/sales/全面覆盖-icon.png",
    description: "内容可以从品宣、使用场景、用户痛点、差异化优势等多种角度出发，全面覆盖宣传重点"
  },
  {
    title: "持续影响",
    imgPath: "/pages/media/sales/持续影响.png",
    iconPath: "/pages/media/sales/持续影响-icon.png",
    description: "软文发布后可以长期保留，持续产生影响力，若是被搜索引擎收录，还可以提升SEO"
  },
  {
    title: "操作灵活",
    imgPath: "/pages/media/sales/操作灵活.png",
    iconPath: "/pages/media/sales/操作灵活-icon.png",
    description: "传统广告的效果通常受限于推荐量、推荐时段等问题，而软文从定题到发布则便于灵活调整"
  }
]

export const mediaPageData = {
  bannerData,
  serviceData,
  sponsorData,
  processData,
  brandCustomerData,
  salesData
}
