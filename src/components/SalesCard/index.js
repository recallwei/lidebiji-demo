import React from "react"

const TargetCard = ({ data }) => {
  return (
    <div className="bg-white rounded-sm flex flex-col shadow-xl hover:shadow-2xl">
      <img
        className="w-full"
        src={data.imgPath}
        alt=""
      />

      <div className="text-sm max-w-full whitespace-normal break-words text-[#999999] p-4 grow">
        <div className="flex justify-center items-center mb-2">
          <img
            className="w-5"
            src={data.iconPath}
            alt=""
          />
          <div className="text-[#333333] text-xl ml-2 whitespace-nowrap">{data.title}</div>
        </div>

        <div className="text-[#999999] text-center">{data.description}</div>
      </div>
    </div>
  )
}

export default TargetCard
