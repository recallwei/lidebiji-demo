import clsx from 'clsx'
import React from 'react'

export default function ServiceCard({ data, className }) {
  return (
    <div
      className={clsx(
        'flex flex-col rounded-sm bg-white p-10 text-center shadow-xl hover:shadow-2xl',
        className
      )}
    >
      <img
        className="mb-4 h-20 w-20 self-center rounded-full"
        src={data.path}
        alt={data.title}
      />

      <div className="mb-4 text-center text-lg font-semibold text-[#333333]">
        {data.title}
      </div>
      <div className="max-w-full whitespace-normal break-words text-sm text-[#999999]">
        {data.content}
      </div>
    </div>
  )
}
