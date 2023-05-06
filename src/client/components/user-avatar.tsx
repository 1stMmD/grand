import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Icons } from './icons'

interface user {
    name ?: string,
    image ?: string 
}

interface props {
    user : user
}

function UserAvatar({
    user , ...props
} : props) {
  return (
    <Avatar {...props}>
        {user.image ? (
            <AvatarImage alt={user.name} src={user.image}/>
        ) : (
            <AvatarFallback className='bg-neutral/10'>
                <span className='sr-only'>{user.name}</span>
                <Icons.user strokeWidth={1} className="h-5 aspect-square text-neutral"/>
            </AvatarFallback>
        )}
    </Avatar>
  )
}

export default UserAvatar