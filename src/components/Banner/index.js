import React from "react"

const Banner = ({ title, description, image, background }) => {
  return (
    <div
      className="w-full px-4 py-4 xl:px-64 h-[400px] xl:h-[550px] ultra:h-[800px] text-white bg-cover bg-center flex flex-col sm:flex-row justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col justify-center text-center">
        <span className="text-3xl mb-3 sm:mb-6 whitespace-nowrap">{title}</span>
        <span className="md:max-w-[320px] whitespace-normal break-words text-sm">{description}</span>
      </div>

      <div className="flex items-center justify-center mt-4 sm:mt-0 sm:ml-4 xl:ml-16 ultra:ml-64">
        <img
          className="rounded-xl w-[350px] sm:w-[400px] lg:w-[500px] xl:w-[700px] ultra:w-[1000px]"
          src={image}
          alt=""
        />
      </div>
    </div>
  )
}

export default Banner
