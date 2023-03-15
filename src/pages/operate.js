import React from "react"
import { Layout, Banner, ServiceCard, ImageLoop, TargetCard } from "components"
import { homePageData } from "models"
import { openWindow } from "utils"

const OperatePage = ({ location }) => {
  const {
    bannerData,
    serviceData,
    sponsorDataFirstLine,
    sponsorDataSecondLine,
    sponsorDataThirdLine,
    targetData
  } = homePageData

  return (
    <Layout location={location}>
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        image="/pages/operate/bannerPic.png"
        background="/pages/operate/background.png"
      />

      <section className="w-full px-4 xl:px-64 py-16 bg-gray-100">
        <div className="text-2xl flex items-center justify-center mb-8 text-[#3A3A3A]">
          平台服务
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
          {serviceData.map((item, index) => (
            <ServiceCard
              key={index}
              data={item}
            />
          ))}
        </div>
      </section>

      <section className="w-full px-4 sm:px-4 xl:px-64 py-16">
        <div className="text-2xl flex items-center justify-center mb-8 text-[#3A3A3A]">
          合作伙伴
        </div>
        <div className="py-8 overflow-hidden w-full">
          <ImageLoop
            list={sponsorDataFirstLine}
            className="mb-4"
          />
          <ImageLoop
            list={sponsorDataSecondLine}
            reverse
            className="mb-4"
          />
          <ImageLoop list={sponsorDataThirdLine} />
        </div>
      </section>

      <section className="w-full px-4 xl:px-64 py-16 bg-gray-100">
        <div className="text-2xl flex items-center justify-center mb-8 text-[#3A3A3A]">
          部分案例
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-16">
          {targetData.map((item, index) => (
            <TargetCard
              key={index}
              data={item}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-12 cursor-pointer active:opacity-70">
          <div className="text-[#2878FC] text-center mr-2">查看更多</div>
          <img
            width="14"
            height="14"
            src="/icons/arrow-down.png"
            alt=""
          />
        </div>
      </section>

      <section
        className="w-full h-[188px] px-4 xl:px-64 py-16 text-white flex flex-col justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(/pages/operate/consult/background.png)` }}
      >
        <div className="text-2xl mb-4">预约咨询</div>
        <div className="text-lg mb-4">想要获得专属演示，请与我们取得联系。</div>
        <div
          onClick={() => openWindow("mailto: bd@leadingcloud.xyz")}
          className="text-sm bg-white text-[#2878FC] rounded-3xl font-semibold py-2 px-8 cursor-pointer active:opacity-70"
        >
          联系我们
        </div>
      </section>
    </Layout>
  )
}

export default OperatePage

export const Head = () => <title>自主运营 | 里德笔记</title>
