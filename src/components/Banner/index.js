import React from "react"

const Banner = ({ title, description, image, background }) => {
  return (
    <div
      className="relative w-full h-96 bg-slate-400 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute left-56 top-0 bottom-0 m-auto flex flex-col gap-6 justify-center">
        <span className="text-3xl">{title}</span>
        <span className="w-[350px] whitespace-normal break-words text-sm">{description}</span>
      </div>

      <div className="absolute right-56 top-0 bottom-0 m-auto flex items-center">
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
