import React from "react"
import { footerData, COPY_RIGHT } from "models"

const Footer = () => {
  return (
    <>
      <div className="bg-[#797979] w-full grid max-sm:grid-cols-1 sm:grid-cols-3 text-white max-sm:px-4 sm:px-4 xl:px-64">
        {footerData.map((item, index) => (
          <div
            className="max-sm:p-4 sm:p-12 flex flex-col"
            key={index}
          >
            <div className="text-lg mb-5">{item.title}</div>
            {item.content.map((contentItem, contentIndex) => (
              <div
                className="text-sm mb-2"
                key={contentIndex}
              >
                {contentItem}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="h-10 bg-[#424242] w-full flex items-center justify-center text-white text-xs">
        {COPY_RIGHT}
      </div>
    </>
  )
}

export default Footer
