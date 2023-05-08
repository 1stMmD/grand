import Editor from '@/client/components/editor'
import { Icons } from '@/client/components/icons'
import NotificationsDropdown from '@/client/components/notifications-dropdown'
import UserAccountNav from '@/client/components/user-account-nav'
import Link from 'next/link'
import React from 'react'

export default function PostPage() {
  return (
    <>
        <header
        className='
        z-[50]
        sticky top-0 flex justify-between items-center px-5 xl:px-20 min-h-[57px]
        border-b-[1px]
        border-neutral/10
        '>
            <LeftSide/>

            <RightSide/>
        </header>
        <div
        className='
        relative
        flex
        flex-col
        items-center
        w-full
        px-4
        sm:px-20
        lg:px-28
        '>
            <Editor/>
        </div>
    </>
  )
}

const LeftSide = () => {
    return(
      <div
      className='
      flex
      items-center
      justify-center
      gap-4
      '>
        <Link href="/">
          <Icons.logo className='h-6'/>
        </Link>
      </div>
    )
  }

const RightSide = () => {
    return(
        <div
        className='
        flex
        items-center
        justify-center
        '>

            <div
            className='
            flex
            items-center
            justify-center
            '>
                <NotificationsDropdown/>

                <UserAccountNav
                user={{
                    image : "",
                    name : ""
                }}
                />
            </div>

        </div>
    )
}