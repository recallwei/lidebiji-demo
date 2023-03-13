const bannerData = {
  title: "自主运营",
  description:
    "针对品牌内容运营需求，提供团队分工、创作者对接、内容审核、数据统计等流程化解决方案，助力企业沉淀内容、轻松运营"
}

const serviceData = [
  {
    title: "项目管理",
    content:
      "通过项目打造标准化工作流，明晰成员协作职责，可配置预算保证项目正常运转，可视化数据轻松分析效果",
    path: "/pages/index/service/project.png"
  },
  {
    title: "任务管理",
    content: "将复杂工作拆分为细分任务，便于创作者快速理解、快速启动，便捷高效的进行任务管理",
    path: "/pages/index/service/task.png"
  },
  {
    title: "媒体资源",
    content: "平台拥有大量媒体/自媒体资源，根据品牌需求可导流至项目",
    path: "/pages/index/service/media.png"
  },
  {
    title: "在线沟通",
    content:
      "平台支持一键直联创作者，在线与创作者沟通原创需求、投放排期、呈现方式等细节，投放需求直接跟创作者谈",
    path: "/pages/index/service/chat.png"
  },
  {
    title: "素材管理",
    content: "平台提供素材存储管理功能，有效解决素材乱存、乱用、乱放等问题，帮助企业构建内容池",
    path: "/pages/index/service/material.png"
  },
  {
    title: "效果分析",
    content: "不同维度、多种视图数据统计，项目效果一目了然，驱动企业持续优化",
    path: "/pages/index/service/result.png"
  }
]

const getPath = (name) => `/pages/index/sponsor/${name}.png`

const sponsorData = [
  "宝洁",
  "飞利浦",
  "佳能",
  "康恩贝",
  "联想",
  "美的",
  "雀巢",
  "松下",
  "台铃",
  "天梭"
].map((item) => getPath(item))

const targetData = [
  {
    title: "OIU",
    tags: ["婴童家居", "品质育儿", "国货品牌"],
    description:
      "基于高线城市用户洞察，强调功能和专业背书成为qborn构建多元内容矩阵的破局点。借助高互动的优质内容，有效撬动品牌自然流量的飙升。",
    totalNum: "803w+",
    searchNum: "212%",
    path: "/pages/index/target/oiu.png"
  },
  {
    title: "台铃",
    tags: ["美好出行", "节能环保", "新能源"],
    description:
      "通过提车分享、共创等内容，聚焦年轻群体，增强品牌年轻气质。以使用体验、车辆装饰介绍产品功能卖点，打动用户，实现种草。",
    totalNum: "472w+",
    searchNum: "64%",
    path: "/pages/index/target/tai-ling.png"
  },
  {
    title: "qborn",
    tags: ["男士护肤", "美妆个护", "他经济"],
    description:
      "结合品牌特色为QIU打造【精准定位+爆文打造】的营销策略。助力品牌完成认知与转化的双赢，通过内容优化降低用户决策成本。",
    totalNum: "1278w++",
    searchNum: "139%",
    path: "/pages/index/target/qborn.png"
  },
  {
    title: "My First Book",
    tags: ["智力启蒙", "家庭早教", "早期教育"],
    description:
      "规划内容矩阵，覆盖用户数量最多的搜索引擎和垂直平台。知乎社区营销 ，知乎营销推广内容，单篇文案阅读量10万+，热门评论200+；成功获取众多高价值用户的关注。",
    totalNum: "563w+",
    searchNum: "139%",
    path: "/pages/index/target/my-first-book.png"
  },
  {
    title: "小仙炖",
    tags: ["滋补养生", "创新鲜炖", "新鲜营养"],
    description:
      "根据细分产品受众打造差异化内容，精准用户痛点，实现巨额扩圈。强调内调需要长期坚持的特性，促使用户长期复购。",
    totalNum: "2630w+",
    searchNum: "420%",
    path: "/pages/index/target/xiao-xian-dun.png"
  },
  {
    title: "乐蜗家纺",
    tags: ["时尚床品", "幸福生活", "自然健康"],
    description:
      "选取与品牌产品标签相符的小红书腰尾部达人及素人，使用产品直发图文内容。拉近品牌与消费者的距离，达成种草转化。",
    totalNum: "193w+",
    searchNum: "64%",
    path: "/pages/index/target/le-wo-jia-fang.png"
  },
  {
    title: "美赞臣",
    tags: ["母婴健康", "科研配方", "科学营养"],
    description:
      "采用新媒体全案营销的形式，通过双微、短视频、红书等平台全面曝光并传播。通过复制内容将多款产品打造成为爆品，提升用户品牌黏度。",
    totalNum: "6457w+",
    searchNum: "445%",
    path: "/pages/index/target/mei-zan-chen.png"
  },
  {
    title: "贝氪",
    tags: ["健康智能", "智慧睡眠", "智能办公"],
    description:
      "结合家居、科技、数码等领域的腰部及素人博主，通过情景展示、生活体验等方式，全方位展现产品。深度种草，进一步实现产品流量升级，预热销量转换。",
    totalNum: "358w+",
    searchNum: "41%",
    path: "/pages/index/target/bei-ke.png"
  },
  {
    title: "Five Doctors",
    tags: ["内服健康", "胶原蛋白", "科学抗老"],
    description:
      "通过打造官方账号，提高产品科学、科研配方等方面的产品背书，提升品牌信任度。结合素人账号分享产品真实测评，深度结合使用场景，提升用户感知度。",
    totalNum: "412w+",
    searchNum: "65%",
    path: "/pages/index/target/five-doctors.png"
  }
]

export const homePageData = { bannerData, serviceData, sponsorData, targetData }
