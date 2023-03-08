import React from "react"

const Footer = () => {
  const footerData = [
    { title: "合作", content: ["xxxxxxxxxxxxxxxxx", "xxxxxxxxxxxxxxxxx"] },
    { title: "服务", content: ["xxxxxxxxxxxxxxxxx", "xxxxxxxxxxxxxxxxx"] },
    { title: "职业生涯", content: ["xxxxxxxxxxxxxxxxx", "xxxxxxxxxxxxxxxxx"] }
  ]

  return (
    <>
      <div className="bg-[#797979] w-full grid grid-cols-3 text-white text-xl px-20">
        {footerData.map((item) => (
          <div className="p-10 flex flex-col gap-1">
            <div>{item.title}</div>
            {item.content.map((contentItem) => (
              <div className="text-base">{contentItem}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="h-10 bg-[#424242] w-full flex items-center justify-center text-white">
        2022 xxx.com
      </div>
    </>
  )
}

export default Footer
