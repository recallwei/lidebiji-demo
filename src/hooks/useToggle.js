import React, { useState } from "react"

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)
  return [value, () => setValue(!value)]
}

export default useToggle
