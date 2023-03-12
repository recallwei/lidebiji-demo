import React from "react"
import { Layout, Banner, ServiceCard, ImageLoop } from "components"
import { homePageData } from "models"

const HomePage = ({ location }) => {
  const { bannerData, serviceData, sponsorData } = homePageData

  return (
    <Layout location={location}>
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        image="/pages/index/bannerPic.png"
        background="/pages/index/background.png"
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

      <section className="w-full px-64 py-16">
        <div className="text-2xl flex items-center justify-center mb-8 text-[#3A3A3A]">
          合作伙伴
        </div>
        <div className="relative py-8 overflow-hidden w-full">
          <ImageLoop list={sponsorData} />
        </div>
      </section>
    </Layout>
  )
}

export default HomePage

export const Head = () => <title>自主运营 - 里德笔记</title>
