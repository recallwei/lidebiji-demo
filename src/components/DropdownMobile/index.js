import React from "react"
import clsx from "clsx"
import { navigate } from "gatsby"
import { useToggle } from "hooks"
//import * as styles from "./index.module.css"

const DropdownMobile = ({ data, className }) => {
  const [isShowMenu, toggleShowMenu] = useToggle(false)
  return (
    <>
      <div
        className={clsx("flex items-center cursor-pointer", className)}
        onClick={() => toggleShowMenu()}
      >
        <div
          className={clsx(
            location.pathname === data.path && "text-blue-400",
            "grow cursor-pointer hover:text-blue-400 transition-all"
          )}
        >
          {data.title}
        </div>
        <img
          className={clsx("w-6 -m-1",isShowMenu && "rotate-180")}
          src="/icons/arrow-down.svg"
          alt=""
        />
      </div>
      <div className={clsx(isShowMenu ? "max-h-[1000px]" : "max-h-0", "transition-all overflow-hidden")}>
        {data.children.map((item, index) => (
          <div
            key={index}
            className={clsx(
              location.pathname === item.path && "text-blue-400",
              "ml-6 cursor-pointer hover:text-blue-400 mb-2"
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

export default DropdownMobile
