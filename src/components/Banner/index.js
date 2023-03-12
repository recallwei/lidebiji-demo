import React from "react"

const Banner = ({ title, description, image, background }) => {
  return (
    <div
      className="w-full max-sm:px-4 sm:px-4 xl:px-64 h-96 text-white bg-cover bg-center flex justify-between"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col justify-center mr-4">
        <span className="text-3xl mb-6">{title}</span>
        <span className="max-w-[320px] whitespace-normal break-words text-sm">{description}</span>
      </div>

      <div className="flex items-center">
        <img
          src={image}
          width="480"
          height="320"
          alt=""
        />
      </div>
    </div>
  )
}

export default Banner
