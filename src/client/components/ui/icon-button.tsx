import { cn } from '@/client/lib/utils'
import { LucideIcon } from 'lucide-react'
import React from 'react'

interface Props extends React.ComponentProps<"button"> {
    Icon : LucideIcon
}

const IconButton = React.forwardRef<
    React.ElementRef<"button">,
    Props
>(({className, Icon, ...props},ref) => {
  return (
    <button
    ref={ref}
    className={cn(
        "hover:text-neutral text-neutral/60",
        className
    )}
    {...props}
    >
        <Icon strokeWidth={1} size={24}/>
    </button>
  )
})
IconButton.displayName = "IconButton"

export default IconButton