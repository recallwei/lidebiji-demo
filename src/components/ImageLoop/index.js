import React, { useState, useRef, useLayoutEffect } from "react"
import clsx from "clsx"
import * as styles from "./index.module.css"

const ImageLoop = ({ list }) => {
  const [width, setWidth] = useState(0)

  const ref = useRef(null)

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth)
    console.log(ref.current.offsetWidth)
  }, [])
  return (
    <div
      ref={ref}
      key={width}
      className={clsx("flex relative items-center gap-4", styles.list)}
      style={{ "--offsetWidth": width }}
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
