import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

export function Head() {
  return <title>里德笔记</title>
}

export default function HomePage() {
  useEffect(() => navigate('/media'), [])
  return <>首页</>
}
