import React from "react"
import { Layout, Banner, ServiceCard, ImageLoop } from "components"
import { mediaPageData } from "models"

const MediaPage = ({ location }) => {
  const { bannerData, serviceData, sponsorData } = mediaPageData

  return (
    <Layout location={location}>
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        image="/pages/media/bannerPic.png"
        background="/pages/media/background.png"
      />

      <section className="w-full max-sm:px-4 sm:px-4 xl:px-64 py-16 bg-gray-100">
        <div className="text-2xl flex items-center justify-center mb-8 text-[#3A3A3A]">
          平台服务
        </div>
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-3 gap-16">
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

      <section className="w-full max-sm:px-4 sm:px-4 xl:px-64 py-16">
        <div className="text-2xl flex items-center justify-center mb-8 text-[#3A3A3A]">
          媒体资源
        </div>
        <div className="relative py-8 overflow-hidden w-full">
          <ImageLoop list={sponsorData} />
          <ImageLoop
            list={sponsorData}
            reverse
          />
          <ImageLoop list={sponsorData} />
        </div>
      </section>
    </Layout>
  )
}

export default MediaPage

export const Head = () => <title>媒体投放 | 里德笔记</title>
