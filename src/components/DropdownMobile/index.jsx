import clsx from 'clsx'
import { navigate } from 'gatsby'
import { useToggle } from 'hooks'
import React from 'react'

export default function DropdownMobile({ data, className, location }) {
  const [isShowMenu, toggleShowMenu] = useToggle(false)
  return (
    <>
      <div
        className={clsx('flex cursor-pointer items-center', className)}
        onClick={() => toggleShowMenu()}
      >
        <div
          className={clsx(
            location.pathname === data.path && 'text-blue-400',
            'grow cursor-pointer transition-all hover:text-blue-400'
          )}
        >
          {data.title}
        </div>
        <img
          className={clsx('-m-1 w-6', isShowMenu && 'rotate-180')}
          src="/icons/arrow-down.svg"
          alt=""
        />
      </div>
      <div
        className={clsx(
          isShowMenu ? 'max-h-[1000px]' : 'max-h-0',
          'overflow-hidden transition-all'
        )}
      >
        {data.children.map((item, index) => (
          <div
            key={index}
            className={clsx(
              location.pathname === item.path && 'text-blue-400',
              'mb-2 ml-6 cursor-pointer hover:text-blue-400'
            )}
            onClick={() => navigate(item.path)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </>
  )
}
