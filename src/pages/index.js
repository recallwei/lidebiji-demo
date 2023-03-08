import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Layout } from "../components"

const TempIcon = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={48}
      width={48}
      color="white"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
        <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
        <path d="M3 6v13"></path>
        <path d="M12 6v13"></path>
        <path d="M21 6v13"></path>
      </g>
    </svg>
  </>
)

const HomePage = () => {
  const serviceData = [
    {
      title: "项目管理",
      content:
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      title: "项目管理",
      content:
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      title: "项目管理",
      content:
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      title: "项目管理",
      content:
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      title: "项目管理",
      content:
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      title: "项目管理",
      content:
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }
  ]

  const sponsorData = new Array(12).fill(undefined)

  return (
    <Layout>
      <section className="relative w-full h-96 bg-slate-400 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="absolute left-56 top-0 bottom-0 m-auto flex flex-col gap-2 justify-center">
          <span className="text-2xl">媒体投放</span>
          <span className="w-[200px] whitespace-normal break-words">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </section>

      <section className="w-full px-48 py-10 bg-gray-100">
        <div className="text-xl flex items-center justify-center mb-8">平台服务</div>
        <div className="grid grid-cols-3 gap-32">
          {serviceData.map((item, index) => (
            <div
              className="rounded-sm flex flex-col gap-4 shadow-xl p-10"
              key={index}
            >
              <div className="bg-red-500 rounded-full w-20 h-20 m-auto flex items-center justify-center">
                <TempIcon />
              </div>
              <div className="text-lg text-center font-semibold">{item.title}</div>
              <div className="text-sm max-w-full whitespace-normal break-words">{item.content}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-48 py-10">
        <div className="text-xl flex items-center justify-center mb-8">合作伙伴</div>
        <div className="grid grid-cols-5 gap-32 py-8">
          {sponsorData.map((_, index) => (
            <StaticImage
              key={index}
              src={"../images/microsoft.png"}
              alt="microsoft"
              width={280}
              height={60}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default HomePage

export const Head = () => <title>Gatsby Demo</title>
