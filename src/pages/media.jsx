import React from 'react'
import { Layout, Banner, ServiceCard, ImageLoop, SalesCard } from 'components'
import { mediaPageData } from 'models'

export function Head() {
  return <title>媒体投放 | 里德笔记</title>
}

export default function MediaPage({ location }) {
  const {
    bannerData,
    serviceData,
    sponsorDataFirstLine,
    sponsorDataSecondLine,
    sponsorDataThirdLine,
    processData,
    brandCustomerData,
    salesData
  } = mediaPageData

  return (
    <Layout location={location}>
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        image="/pages/media/bannerPic.png"
        background="/pages/media/background.png"
      />

      <section className="w-full bg-gray-100 px-4 py-16 xl:px-64">
        <div className="mb-8 flex items-center justify-center text-2xl text-[#3A3A3A]">
          平台服务
        </div>
        <div className="flex flex-wrap justify-center gap-16">
          {serviceData.map((item, index) => (
            <ServiceCard
              className="grow sm:flex-[0_0_28%]"
              key={index}
              data={item}
            />
          ))}
        </div>
      </section>

      <section className="w-full py-16 sm:px-4 xl:px-64">
        <div className="mb-8 flex items-center justify-center text-2xl text-[#3A3A3A]">
          媒体资源
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

      <section className="relative w-full bg-[#333333] px-4 pt-16 text-white max-sm:pb-80 sm:pb-60 xl:px-64 xl:pb-60">
        <div className="mb-8 flex items-center justify-center text-2xl ">
          投放流程
        </div>
        <div className="grid grid-cols-1 md:grid-cols-11">
          {processData.map((item, index) => (
            <div key={index}>
              {item.arrow ? (
                <div className="flex h-24 items-center justify-center">
                  <img
                    className="rotate-90 md:rotate-0"
                    width={18}
                    src="icons/arrow-right.svg"
                    alt=""
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-[1.5px] border-white">
                    <img
                      width={40}
                      src={item.iconPath}
                      alt=""
                    />
                  </div>
                  <div className="mt-6 whitespace-nowrap tracking-widest">
                    {item.title}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          className="absolute inset-x-0 bottom-[-200px] z-10 m-auto mx-4 rounded-xl bg-cover bg-center px-2 py-4 text-[#3A3A3A] shadow-2xl sm:bottom-[-180px] sm:mx-24 sm:px-4 sm:py-14 xl:bottom-[-150px] xl:mx-64 xl:px-36"
          style={{
            backgroundImage: 'url(/pages/media/process/background.png)'
          }}
        >
          <div className="mb-8 flex items-center justify-center text-2xl">
            品牌客户
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-16 xl:gap-16">
            {brandCustomerData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <span className="mb-3 text-4xl font-bold text-red-500">
                  {item.numText}
                </span>
                <span className="mb-1 text-lg">{item.title}</span>
                <span className="text-sm">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 px-4 pb-16 pt-60 xl:px-64">
        <div className="mb-8 flex items-center justify-center text-2xl text-[#3A3A3A]">
          软文营销优势
        </div>
        <div className="grid grid-cols-1 justify-center gap-16 sm:grid-cols-3">
          {salesData.map((item, index) => (
            <SalesCard
              key={index}
              data={item}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}
