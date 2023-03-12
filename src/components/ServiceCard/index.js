import React from "react"

const ServiceCard = ({ title, content, path }) => {
  return (
    <div className="rounded-sm flex flex-col shadow-xl p-10 hover:shadow-2xl cursor-pointer">
      <img
        className="mb-4 rounded-full w-20 h-20 self-center"
        src={path}
        alt={title}
      />

      <div className="text-lg text-center font-semibold text-[#333333] mb-4">{title}</div>
      <div className="text-sm max-w-full whitespace-normal break-words text-[#999999]">
        {content}
      </div>
    </div>
  )
}

export default ServiceCard
