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
            <AvatarImage alt="picture" src={user.image}/>
        ) : (
            <AvatarFallback>
                <span className='sr-only'>{user.name}</span>
                <Icons.user className="h-4 aspect-square"/>
            </AvatarFallback>
        )}
    </Avatar>
  )
}

export default UserAvatar