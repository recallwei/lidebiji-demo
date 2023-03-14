import React from "react"
import clsx from "clsx"
import { navigate } from "gatsby"
import * as styles from "./index.module.css"

const Dropdown = ({ data }) => {
  return (
    <div className={clsx("relative", styles.dropdown)}>
      <div className="sm:flex items-center justify-center hover:opacity-70 active:opacity-60 transition-all select-none cursor-pointer hidden ml-10">
        <span>{data.title}</span>
        <img
          className="w-6"
          src="/icons/arrow-down.svg"
          alt=""
        />
      </div>

      <div
        className={clsx(
          "hidden z-10 absolute -bottom-[70px] -right-2 m-auto bg-[#424242] border-[1px] border-gray-200 shadow-lg p-1 rounded-sm flex-col items-center",
          styles.dropdownContent
        )}
      >
        {data.children.map((child, childIndex) => (
          <span
            className="cursor-pointer px-2 mt-2 first:mt-0"
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

export default Dropdown
