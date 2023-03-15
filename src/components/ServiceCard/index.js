import React from "react"
import clsx from "clsx"

const ServiceCard = ({ data, className }) => {
  return (
    <div className={clsx("rounded-sm flex flex-col shadow-xl p-10 hover:shadow-2xl text-center z-10", className)}>
      <img
        className="mb-4 rounded-full w-20 h-20 self-center"
        src={data.path}
        alt={data.title}
      />

      <div className="text-lg text-center font-semibold text-[#333333] mb-4">{data.title}</div>
      <div className="text-sm max-w-full whitespace-normal break-words text-[#999999]">
        {data.content}
      </div>
    </div>
  )
}

export default ServiceCard
