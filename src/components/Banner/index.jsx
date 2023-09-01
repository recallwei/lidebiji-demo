import React from 'react'

export default function Banner({ title, description, image, background }) {
  return (
    <div
      className="flex h-[400px] w-full flex-col justify-center bg-cover bg-center p-4 text-white sm:flex-row xl:h-[550px] xl:px-64 ultra:h-[800px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col justify-center text-center md:text-left">
        <span className="mb-3 whitespace-nowrap text-3xl sm:mb-6">{title}</span>
        <span className="whitespace-normal break-words text-sm md:max-w-[320px]">
          {description}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-center sm:ml-4 sm:mt-0 xl:ml-16 ultra:ml-64">
        <img
          className="w-[350px] rounded-xl sm:w-[400px] lg:w-[500px] xl:w-[700px] ultra:w-[1000px]"
          src={image}
          alt=""
        />
      </div>
    </div>
  )
}
