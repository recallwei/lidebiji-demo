import React from 'react'

export default function TargetCard({ data }) {
  return (
    <div className="flex flex-col rounded-sm bg-white shadow-xl hover:shadow-2xl">
      <img
        className="w-full"
        src={data.imgPath}
        alt=""
      />

      <div className="max-w-full grow whitespace-normal break-words p-4 text-sm text-[#999999]">
        <div className="mb-2 flex items-center justify-center">
          <img
            className="w-5"
            src={data.iconPath}
            alt=""
          />
          <div className="ml-2 whitespace-nowrap text-xl text-[#333333]">
            {data.title}
          </div>
        </div>

        <div className="text-center text-[#999999]">{data.description}</div>
      </div>
    </div>
  )
}
