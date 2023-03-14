import React from "react"
import { navigate } from "gatsby"
import clsx from "clsx"
import { Dropdown } from "components"
import { useToggle } from "hooks"
import { menuList } from "models"

const Header = () => {
  const [isShowMenu, toggleShowMenu] = useToggle(false)
  return (
    <>
      <div className="bg-[#424242] w-full h-16 px-4 xl:px-64  flex items-center justify-between text-white whitespace-nowrap">
        <div className="flex items-center h-16">
          <img
            className="mr-10"
            src="/logo.png"
            alt="里德笔记"
            width="128"
            height="30"
          />
          {menuList.map((item, index) => (
            <div
              key={index}
              className="h-full"
            >
              {item.type === "dropdown" && (
                <Dropdown
                  data={item}
                  className="h-full w-24 flex items-center justify-center"
                />
              )}
              {item.type === "link" && (
                <span
                  onClick={() => navigate(item.path)}
                  className={clsx(
                    location.pathname === item.path && "text-blue-400",
                    "w-24 h-full sm:flex items-center justify-center cursor-pointer hover:opacity-70 active:opacity-60 transition-all hidden select-none"
                  )}
                >
                  {item.title}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* 操作区域 */}
        <div className="sm:flex items-center hidden select-none">
          <div className="mr-8 cursor-pointer active:opacity-70 transition-all">登录</div>
          <button className="bg-blue-400 px-4 py-2 rounded-md cursor-pointer active:opacity-70 transition-all">
            免费试用
          </button>
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
        <div className="mt-2 cursor-pointer active:opacity-70 transition-all">登录</div>
        <button className="bg-blue-400 px-4 py-2 rounded-md mt-2 w-28 cursor-pointer active:opacity-70 transition-all">
          免费试用
        </button>
      </div>
    </>
  )
}

export default Header
