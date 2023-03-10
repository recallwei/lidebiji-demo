import React from "react"

const ServiceCard = ({ title, content, path }) => {
  return (
    <div className="rounded-sm flex flex-col gap-4 shadow-xl p-10 hover:shadow-2xl cursor-pointer">
      <div className="rounded-full w-20 h-20 m-auto flex items-center justify-center">
        <img
          src={path}
          alt={title}
        />
      </div>
      <div className="text-lg text-center font-semibold text-[#333333]">{title}</div>
      <div className="text-sm max-w-full whitespace-normal break-words text-[#999999]">
        {content}
      </div>
    </div>
  )
}

export default ServiceCard
