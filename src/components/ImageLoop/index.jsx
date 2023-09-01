import clsx from 'clsx'
import * as styles from './index.module.css'
import React from 'react'

export default function ImageLoop({ list, reverse, className }) {
  const lists = list.concat(list).concat(list)
  return (
    <div
      className={clsx(
        'relative flex items-center gap-4',
        reverse ? styles.listReverse : styles.list,
        reverse && 'flex-row-reverse',
        className
      )}
    >
      {lists.map((item, index) => (
        <img
          className="rounded-sm bg-white p-4 shadow-lg"
          key={index}
          src={item}
          alt=""
          width={200}
        />
      ))}
    </div>
  )
}
