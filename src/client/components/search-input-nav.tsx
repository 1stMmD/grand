"use client"

import React, { useState } from 'react'
import { Icons } from './icons'

function SearchInputNav() {
  const [value, setValue] = useState<string>("")

  return (
    <div
    className='
    py-2
    px-3
    rounded-full
    bg-neutral/2
    flex
    gap-3
    items-center
    justify-center
    group
    '>
      <Icons.search
      className='
      transition-colors
      flex-shrink-0
      text-neutral/60
      group-focus-within:text-neutral
      '
      size={24}
      strokeWidth={1}
      />

      <input
      placeholder='Search Grand'
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      className='
      placeholder:text-neutral/50
      flex-shrink
      bg-transparent
      text-neutral
      text-[14px]
      outline-none
      w-[200px]
      '
      />
    </div>
  )
}

export default SearchInputNav