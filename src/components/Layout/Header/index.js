import React from "react"
import { navigate } from "gatsby"
import clsx from "clsx"
import { menuList } from "models"

const Header = ({ location }) => {
  return (
    <div className="bg-[#424242] w-full h-16 max-sm:px-4 sm:px-4 xl:px-64  flex items-center justify-between text-white whitespace-nowrap">
      <div className="flex items-center">
        <img
          className="mr-10"
          src="/logo.png"
          alt="里德笔记"
          width="128"
          height="30"
        />
        {menuList.map((item, index) => (
          <span
            key={index}
            onClick={() => navigate(item.path)}
            className={clsx(
              location.pathname === item.path && "text-blue-400",
              "cursor-pointer hover:underline underline-offset-8 hover:text-blue-400 transition-all mr-10 max-sm:hidden"
            )}
          >
            {item.title}
          </span>
        ))}
      </div>

      {/* 操作区域 */}
      <div className="flex items-center">
        <div className="mr-8">登录</div>
        <button className="bg-blue-400 px-4 py-2 rounded-md">免费试用</button>
      </div>
    </div>
  )
}

export default Header
