import projectImg from "images/pages/index/service/project.png"
import taskImg from "images/pages/index/service/task.png"
import mediaImg from "images/pages/index/service/media.png"
import chatImg from "images/pages/index/service/chat.png"
import materialImg from "images/pages/index/service/material.png"
import resultImg from "images/pages/index/service/result.png"

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
    path: projectImg
  },
  {
    title: "任务管理",
    content: "将复杂工作拆分为细分任务，便于创作者快速理解、快速启动，便捷高效的进行任务管理",
    path: taskImg
  },
  {
    title: "媒体资源",
    content: "平台拥有大量媒体/自媒体资源，根据品牌需求可导流至项目",
    path: mediaImg
  },
  {
    title: "在线沟通",
    content:
      "平台支持一键直联创作者，在线与创作者沟通原创需求、投放排期、呈现方式等细节，投放需求直接跟创作者谈",
    path: chatImg
  },
  {
    title: "素材管理",
    content: "平台提供素材存储管理功能，有效解决素材乱存、乱用、乱放等问题，帮助企业构建内容池",
    path: materialImg
  },
  {
    title: "效果分析",
    content: "不同维度、多种视图数据统计，项目效果一目了然，驱动企业持续优化",
    path: resultImg
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

export const homePageData = { bannerData, serviceData, sponsorData }
