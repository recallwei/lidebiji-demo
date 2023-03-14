import React from "react"
import { Layout, Banner, ServiceCard, ImageLoop, SalesCard } from "components"
import { mediaPageData } from "models"

const MediaPage = () => {
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
    <Layout>
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        image="/pages/media/bannerPic.png"
        background="/pages/media/background.png"
      />

      <section className="w-full px-4 xl:px-64 py-16 bg-gray-100">
        <div className="text-2xl flex items-center justify-center mb-8 text-[#3A3A3A]">
          平台服务
        </div>
        <div className="flex flex-wrap justify-center gap-16">
          {serviceData.map((item, index) => (
            <ServiceCard
              className="sm:flex-[0_0_28%] "
              key={index}
              data={item}
            />
          ))}
        </div>
      </section>

      <section className="w-full sm:px-4 xl:px-64 py-16">
        <div className="text-2xl flex items-center justify-center mb-8 text-[#3A3A3A]">
          媒体资源
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

      <section className="relative w-full px-4 xl:px-64 pt-16 max-sm:pb-80 sm:pb-60 xl:pb-60 bg-[#333333] text-white">
        <div className="text-2xl flex items-center justify-center mb-8 ">投放流程</div>
        <div className="grid grid-cols-1 sm:grid-cols-11">
          {processData.map((item, index) => (
            <div key={index}>
              {item.arrow ? (
                <div className="h-24 flex items-center justify-center">
                  <img
                    className="rotate-90"
                    width={18}
                    src="icons/arrow-right.svg"
                    alt=""
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-white border-[1.5px] flex items-center justify-center">
                    <img
                      width={40}
                      src={item.iconPath}
                      alt=""
                    />
                  </div>
                  <div className="mt-6 tracking-widest whitespace-nowrap">{item.title}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          className="absolute mx-4 sm:mx-24 xl:mx-64 py-4 sm:py-14 px-2 sm:px-4 xl:px-36 rounded-xl z-10 -bottom-[200px] sm:-bottom-[180px] xl:-bottom-[150px] right-0 left-0 m-auto shadow-2xl bg-center bg-cover text-[#3A3A3A]"
          style={{ backgroundImage: `url(/pages/media/process/background.png)` }}
        >
          <div className="text-2xl flex items-center justify-center mb-8">品牌客户</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 xl:gap-16">
            {brandCustomerData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <span className="mb-3 text-red-500 text-4xl font-bold">{item.numText}</span>
                <span className="mb-1 text-lg">{item.title}</span>
                <span className="text-sm">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 xl:px-64 pt-60 pb-16 bg-gray-100">
        <div className="text-2xl flex items-center justify-center mb-8 text-[#3A3A3A]">
          软文营销优势
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-center gap-16">
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

export default MediaPage

export const Head = () => <title>媒体投放 | 里德笔记</title>
