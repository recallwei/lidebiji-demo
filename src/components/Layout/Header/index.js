import React from "react"
import { navigate } from "gatsby"
import clsx from "clsx"
import { menuList } from "models"
import { useToggle } from "hooks"

const Header = ({ location }) => {
  const [isShowMenu, toggleShowMenu] = useToggle(false)
  return (
    <>
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
        <div className="flex items-center max-sm:hidden">
          <div className="mr-8">登录</div>
          <button className="bg-blue-400 px-4 py-2 rounded-md">免费试用</button>
        </div>

        {/* 手机端菜单 */}
        <div className="flex items-center sm:hidden">
          <img
            onClick={() => toggleShowMenu()}
            className="cursor-pointer active:opacity-70 transition-all"
            width="28"
            src="/icons/menu.svg"
            alt=""
          />
        </div>
      </div>
      <div
        className={clsx(
          "bg-[#424242] w-full transition-[height] duration-300 ease-out overflow-hidden flex flex-col px-4 text-white",
          isShowMenu ? "h-[300px]" : "h-0"
        )}
      >
        {menuList.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className={clsx(
              location.pathname === item.path && "text-blue-400",
              "cursor-pointer hover:underline underline-offset-8 hover:text-blue-400 transition-all mb-2"
            )}
          >
            {item.title}
          </div>
        ))}
        <div className="border-t-[0.5px] border-white w-full h-1 mt-0.5" />
        <div className="mt-2">登录</div>
        <button className="bg-blue-400 px-4 py-2 rounded-md mt-2 w-28">免费试用</button>
      </div>
    </>
  )
}

export default Header
