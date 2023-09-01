import clsx from 'clsx'
import { navigate } from 'gatsby'
import * as styles from './index.module.css'
import React from 'react'

export default function Dropdown({ data, className, location }) {
  return (
    <div className={clsx('relative', styles.dropdown, className)}>
      <div className="hidden cursor-pointer select-none items-center justify-center transition-all hover:opacity-70 active:opacity-60 sm:flex">
        <span>{data.title}</span>
        <img
          className="-m-1 w-6"
          src="/icons/arrow-down.svg"
          alt=""
        />
      </div>

      <div
        className={clsx(
          'absolute inset-x-0 z-10 m-auto hidden select-none flex-col items-center rounded-md bg-[#434343] px-2 py-1 shadow-lg',
          styles.dropdownContent
        )}
        style={{ bottom: -(data.children.length * 40) }}
      >
        {data.children.map((child, childIndex) => (
          <span
            className={clsx(
              location.pathname === child.path && 'text-blue-400',
              'my-1 flex h-8 w-full cursor-pointer items-center justify-center rounded-sm text-center text-sm transition-all hover:bg-slate-600 active:opacity-70'
            )}
            key={childIndex}
            onClick={() => navigate(child.path)}
          >
            {child.title}
          </span>
        ))}
      </div>
    </div>
  )
}
