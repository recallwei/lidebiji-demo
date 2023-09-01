import React from 'react'

export default function TargetCard({ data }) {
  return (
    <div className="flex flex-col rounded-sm bg-white shadow-xl hover:shadow-2xl">
      <img
        className="w-full"
        src={data.path}
        alt=""
      />

      <div className="max-w-full grow whitespace-normal break-words p-4 text-sm text-[#999999]">
        <div className="mb-2 flex flex-col justify-center whitespace-nowrap">
          <div className="mb-1 mr-2 text-2xl text-[#333333]">{data.title}</div>
          <div className="flex">
            {data.tags.map((tag, index) => (
              <div
                key={index}
                className="mr-2 text-xs"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-1 text-[#333333]">项目介绍</div>
          <div className="text-[#999999]">{data.description}</div>
        </div>
      </div>

      <div className="flex border-t border-[#CBCBCB] p-4">
        <div className="flex w-1/2 flex-col items-center">
          <div className="mb-2 text-sm text-[#333333]">{data.totalNum}</div>
          <div className="text-xs text-[#999999]">总曝光量</div>
        </div>
        <div className="h-full w-[0px] opacity-50 outline outline-1 outline-[#CBCBCB]" />
        <div className="flex w-1/2 flex-col  items-center">
          <div className="mb-2 text-sm text-[#333333]">{data.searchNum}</div>
          <div className="text-xs text-[#999999]">品牌词检索量</div>
        </div>
      </div>
    </div>
  )
}
