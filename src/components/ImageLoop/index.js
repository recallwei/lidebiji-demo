import React from "react"
import clsx from "clsx"
import * as styles from "./index.module.css"

const ImageLoop = ({ list, reverse, className }) => {
  return (
    <div
      className={clsx(
        "flex relative items-center gap-4",
        reverse ? styles.listReverse : styles.list,
        reverse && "flex-row-reverse",
        className
      )}
    >
      {list
        .concat(list)
        .concat(list)
        .map((item, index) => (
          <img
            className="bg-white shadow-lg p-4 rounded-sm"
            key={index}
            src={item}
            alt=""
            width={200}
          />
        ))}
    </div>
  )
}

export default ImageLoop
