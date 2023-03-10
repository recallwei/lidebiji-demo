import React from "react"
import { Layout, Banner, ServiceCard } from "components"
import background from "images/pages/media/background.png"
import bannerPic from "images/pages/media/bannerPic.png"
import mediaImg from "images/pages/media/service/media.png"
import selfMediaImg from "images/pages/media/service/self-media.png"
import priceImg from "images/pages/media/service/price.png"
import selfDistributeImg from "images/pages/media/service/self-distribute.png"
import serviceImg from "images/pages/media/service/service.png"

const MediaPage = ({ location }) => {
  const bannerData = {
    title: "媒体投放",
    description: "新闻媒体发稿+自媒体推广 全网覆盖 一站式发布 多账号让您的内容引爆全网"
  }
  const serviceData = [
    {
      title: "新闻媒体",
      content: "网络媒体资源，全面覆盖门户、行业、垂直媒体，快速响应，24小时服务",
      path: mediaImg
    },
    {
      title: "自媒体渠道",
      content: "自媒体，自媒体全平台覆盖，让内容铺遍全网，形成内容矩阵，助力企业提升品牌效益",
      path: selfMediaImg
    },
    {
      title: "价格透明",
      content: "品牌可以直接查看媒体/自媒体报价，选择心仪媒体资源，无复杂谈价环节",
      path: priceImg
    },
    {
      title: "自主发布",
      content: "注册充值即可一键将稿件发布至多家媒体/自媒体账户",
      path: selfDistributeImg
    },
    {
      title: "专属服务",
      content: "与品牌一对一对接，全程指导，保证发布与售后更方便更快捷",
      path: serviceImg
    }
  ]

  return (
    <Layout location={location}>
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        image={bannerPic}
        background={background}
      />

      <section className="w-full px-64 py-16 bg-gray-100">
        <div className="text-2xl flex items-center justify-center mb-8 text-[#3A3A3A]">
          平台服务
        </div>
        <div className="grid grid-cols-3 gap-10">
          {serviceData.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              content={item.content}
              path={item.path}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default MediaPage

export const Head = () => <title>媒体投放 - 里德笔记</title>
