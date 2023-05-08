import React from 'react'

export default function PostLayout({
    children
} : {
    children : React.ReactNode
}) {
  return (
    <html lang="en">
      <body
      className='
      relative
      '>
        {children}
      </body>
    </html>
  )
}


