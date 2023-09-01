import { navigate } from 'gatsby'
import clsx from 'clsx'
import { Dropdown, DropdownMobile } from 'components'
import { useToggle } from 'hooks'
import { menuList } from 'models'
import React from 'react'

export default function Header({ location }) {
  const [isShowMenu, toggleShowMenu] = useToggle(false)
  return (
    <>
      <div className="flex h-16 w-full items-center justify-between whitespace-nowrap bg-[#424242] px-4 text-white xl:px-64">
        <div className="flex h-16 items-center">
          <img
            onClick={() => navigate('/')}
            className="mr-10 cursor-pointer"
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
              {item.type === 'dropdown' && (
                <Dropdown
                  data={item}
                  className="hidden h-full w-16 items-center justify-center md:flex lg:w-24"
                  location={location}
                />
              )}
              {item.type === 'link' && (
                <span
                  onClick={() => navigate(item.path)}
                  className={clsx(
                    location.pathname === item.path && 'text-blue-400',
                    'hidden h-full w-16 cursor-pointer select-none items-center justify-center transition-all hover:opacity-70 active:opacity-60 md:flex lg:w-24'
                  )}
                >
                  {item.title}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* 操作区域 */}
        <div className="hidden select-none items-center md:flex">
          <div className="mr-8 cursor-pointer transition-all active:opacity-70">
            登录
          </div>
          <button
            type="button"
            className="cursor-pointer rounded-md bg-blue-400 px-4 py-2 transition-all active:opacity-70"
          >
            免费试用
          </button>
        </div>

        {/* 手机端菜单 */}
        <div className="flex items-center md:hidden">
          <img
            onClick={() => toggleShowMenu()}
            className="cursor-pointer transition-all active:opacity-70"
            width="28"
            src="/icons/menu.svg"
            alt=""
          />
        </div>
      </div>
      <div
        className={clsx(
          'flex w-full flex-col overflow-hidden bg-[#424242] text-white transition-all',
          isShowMenu ? 'max-h-[1000px] p-4' : 'max-h-0 px-4'
        )}
      >
        {menuList.map((item, index) => (
          <div key={index}>
            {item.type === 'dropdown' && (
              <DropdownMobile
                data={item}
                className="mb-2"
                location={location}
              />
            )}
            {item.type === 'link' && (
              <div
                onClick={() => navigate(item.path)}
                className={clsx(
                  location.pathname === item.path && 'text-blue-400',
                  'mb-2 cursor-pointer transition-all hover:text-blue-400'
                )}
              >
                {item.title}
              </div>
            )}
          </div>
        ))}
        <div className="mt-0.5 h-1 w-full border-t-[0.5px] border-white" />
        <div className="mt-2 cursor-pointer transition-all active:opacity-70">
          登录
        </div>
        <button
          type="button"
          className="mt-2 w-28 cursor-pointer rounded-md bg-blue-400 px-4 py-2 transition-all active:opacity-70"
        >
          免费试用
        </button>
      </div>
    </>
  )
}
