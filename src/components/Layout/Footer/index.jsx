import { footerData, COPY_RIGHT } from 'models'
import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="grid w-full grid-cols-1 bg-[#797979] px-4 text-white sm:grid-cols-3 xl:px-64">
        {footerData.map((item, index) => (
          <div
            className="flex flex-col p-4 sm:p-12"
            key={index}
          >
            <div className="mb-5 text-lg">{item.title}</div>
            {item.content.map((contentItem, contentIndex) => (
              <div
                className="mb-2 text-sm"
                key={contentIndex}
              >
                {contentItem}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex h-10 w-full items-center justify-center bg-[#424242] text-xs text-white">
        {COPY_RIGHT}
      </div>
    </>
  )
}
