import React from 'react'
import { Layout, Banner, ServiceCard, ImageLoop, TargetCard } from 'components'
import { homePageData } from 'models'
import { openWindow } from 'utils'

export function Head() {
  return <title>自主运营 | 里德笔记</title>
}

export default function OperatePage({ location }) {
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

      <section className="w-full bg-gray-100 px-4 py-16 xl:px-64">
        <div className="mb-8 flex items-center justify-center text-2xl text-[#3A3A3A]">
          平台服务
        </div>
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-3">
          {serviceData.map((item, index) => (
            <ServiceCard
              key={index}
              data={item}
            />
          ))}
        </div>
      </section>

      <section className="w-full px-4 py-16 sm:px-4 xl:px-64">
        <div className="mb-8 flex items-center justify-center text-2xl text-[#3A3A3A]">
          合作伙伴
        </div>
        <div className="w-full overflow-hidden py-8">
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

      <section className="w-full bg-gray-100 px-4 py-16 xl:px-64">
        <div className="mb-8 flex items-center justify-center text-2xl text-[#3A3A3A]">
          部分案例
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-16 sm:grid-cols-3">
          {targetData.map((item, index) => (
            <TargetCard
              key={index}
              data={item}
            />
          ))}
        </div>
        <div className="mt-12 flex cursor-pointer items-center justify-center active:opacity-70">
          <div className="mr-2 text-center text-[#2878FC]">查看更多</div>
          <img
            width="14"
            height="14"
            src="/icons/arrow-down.png"
            alt=""
          />
        </div>
      </section>

      <section
        className="flex h-[188px] w-full flex-col items-center justify-center bg-cover bg-no-repeat px-4 py-16 text-white xl:px-64"
        style={{
          backgroundImage: 'url(/pages/operate/consult/background.png)'
        }}
      >
        <div className="mb-4 text-2xl">预约咨询</div>
        <div className="mb-4 text-lg">想要获得专属演示，请与我们取得联系。</div>
        <div
          onClick={() => openWindow('mailto: bd@leadingcloud.xyz')}
          className="cursor-pointer rounded-3xl bg-white px-8 py-2 text-sm font-semibold text-[#2878FC] active:opacity-70"
        >
          联系我们
        </div>
      </section>
    </Layout>
  )
}
