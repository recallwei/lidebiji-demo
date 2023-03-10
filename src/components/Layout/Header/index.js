import React from "react"
import { navigate } from "gatsby"
import clsx from "clsx"
import { menuList } from "models"
import logo from "images/logo.png"

const Brand = () => (
  <div className="flex items-center gap-2">
    <img
      src={logo}
      alt="里德笔记"
      width={128}
      height={30}
    />
  </div>
)

const NavList = ({ location }) => {
  return (
    <div className="flex gap-10 items-center grow">
      {menuList.map((item, index) => (
        <span
          key={index}
          onClick={() => navigate(item.path)}
          className={clsx(
            location.pathname === item.path && "text-blue-400",
            "cursor-pointer hover:underline underline-offset-8 hover:text-blue-400 transition-all"
          )}
        >
          {item.title}
        </span>
      ))}
    </div>
  )
}

const LoginArea = () => (
  <div className="flex items-center gap-8">
    <div>登录</div>
    <button className="bg-blue-400 px-4 py-2 rounded-md">免费试用</button>
  </div>
)

const Header = ({ location }) => {
  return (
    <div className="bg-[#424242] w-full h-16 px-40 flex items-center justify-between text-white gap-32">
      <Brand />
      <NavList location={location} />
      <LoginArea />
    </div>
  )
}

export default Header
