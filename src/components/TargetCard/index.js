import React from "react"

const TargetCard = ({ data, path }) => {
  return (
    <div className="rounded-sm flex flex-col shadow-xl hover:shadow-2xl cursor-pointer">
      <img
        className="h-40 w-full"
        src={path}
        alt=""
      />

      <div className="text-sm max-w-full whitespace-normal break-words text-[#999999] p-4">
        <div className="flex items-center mb-2">
          <div className="text-[#333333] text-xl">{data.title}</div>
          {data.tags.map((tag, index) => (
            <div
              key={index}
              className="text-[6px] ml-2"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="flex flex-col text-[8px]">
          <div className="text-[#333333] mb-1">项目介绍</div>
          <div className="text-[#999999]">{data.description}</div>
        </div>
      </div>

      <div className="border-t border-[#CBCBCB] flex p-4">
        <div className="flex flex-col items-center w-1/2">
          <div className="text-[#333333] text-sm mb-2">{data.totalNum}</div>
          <div className="text-[#999999] text-xs">总曝光量</div>
        </div>
        <div className="h-full w-[0px] outline-1 outline outline-[#CBCBCB] opacity-50"></div>
        <div className="flex flex-col items-center  w-1/2">
          <div className="text-[#333333] text-sm mb-2">{data.searchNum}</div>
          <div className="text-[#999999] text-xs">品牌词检索量</div>
        </div>
      </div>
    </div>
  )
}

export default TargetCard
