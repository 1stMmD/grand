"use client"

import { Icons } from '@/client/components/icons'
import './globals.css'
import UserAccountNav from '@/client/components/user-account-nav'
import IconButton from '@/client/components/ui/icon-button'
import { useMediaQuery } from '@/client/hooks/useMediaQuery'
import IconButtonWithText from '@/client/components/ui/icon-button-with-text'

export const metadata = {
  title: 'Grand',
  icons : {
    icon : "/icon.svg",
    type : "image/svg"
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
        className='
        flex justify-between items-center px-6 min-h-[57px]
        border-b-[1px]
        border-neutral/10
        '>
          <LeftSide/>

          <RightSide/>
        </header>
        {children}
      </body>
    </html>
  )
}

const RightSide = () => {
  const {SM , MD} = useMediaQuery()

  return (
    <div className='flex items-center justify-center gap-8'>
      {!SM ? <IconButton
      Icon={Icons.search}
      /> : ""}

      {MD ? 
      <IconButtonWithText
      Icon={Icons.edit}
      text="Write"
      /> : ""}

      <IconButton
      Icon={Icons.notification}
      />

      <UserAccountNav
      user={{
        name : "Mohammad Jamali",
        image : "https://cdn-images-1.medium.com/v2/1*Zm21cf9mb0p5Dqmlca4DUA.jpeg"
      }}
      />
    </div>
  )
}

const LeftSide = () => {
  const {SM} = useMediaQuery()

  return(
    <div
    className='
    flex
    items-center
    justify-center
    '>
      <Icons.logo className='h-6' />

      {SM ? "test" : ""}
    </div>
  )
}