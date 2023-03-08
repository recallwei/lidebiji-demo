import React from "react"

const Brand = () => (
  <div className="flex items-center gap-2">
    <img
      width={48}
      height={48}
      alt="Gatsby"
      src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
    />
    <span className="text-xl tracking-widest">站点名称</span>
  </div>
)

const NavList = () => {
  const navList = ["首页", "商家", "创作者", "定价", "博客"]
  return (
    <div className="flex gap-8 items-center grow">
      {navList.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  )
}

const LoginArea = () => <div>登录</div>

const Header = () => {
  return (
    <div className="bg-[#424242] w-full h-16 px-40 flex items-center justify-between text-white gap-20">
      <Brand />
      <NavList />
      <LoginArea />
    </div>
  )
}

export default Header
