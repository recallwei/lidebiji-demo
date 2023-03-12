import React from "react"
import clsx from "clsx"
import * as styles from "./index.module.css"

const ImageLoop = ({ list, reverse }) => {
  return (
    <div
      className={clsx(
        "flex relative items-center gap-4",
        reverse ? styles.listReverse : styles.list,
        reverse && "flex-row-reverse"
      )}
    >
      {list.concat(list).map((item, index) => (
        <img
          key={index}
          src={item}
          alt=""
          width={200}
          height={50}
        />
      ))}
    </div>
  )
}

export default ImageLoop
