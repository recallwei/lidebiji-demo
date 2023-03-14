import React from "react"
import clsx from "clsx"
import { navigate } from "gatsby"
import * as styles from "./index.module.css"

const Dropdown = ({ data, className }) => {
  return (
    <div className={clsx("relative", styles.dropdown, className)}>
      <div className="sm:flex items-center justify-center hover:opacity-70 active:opacity-60 transition-all select-none cursor-pointer hidden">
        <span>{data.title}</span>
        <img
          className="w-6 -m-1"
          src="/icons/arrow-down.svg"
          alt=""
        />
      </div>

      <div
        className={clsx(
          "hidden z-10 absolute left-0 right-0 m-auto bg-[#434343] shadow-lg px-2 py-1 rounded-md flex-col items-center select-none",
          styles.dropdownContent
        )}
        style={{ bottom: -(data.children.length * 40) }}
      >
        {data.children.map((child, childIndex) => (
          <span
            className={clsx(
              location.pathname === child.path && "text-blue-400",
              "cursor-pointer my-1 w-full h-8 text-center flex justify-center items-center rounded-sm hover:bg-slate-600 text-sm active:opacity-70 transition-all"
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

export default Dropdown
