import { cn } from '@/client/lib/utils'
import { LucideIcon } from 'lucide-react'
import React from 'react'

interface Props extends React.ComponentProps<"button"> {
    Icon : LucideIcon,
    text : string
}

const IconButtonWithText = React.forwardRef<
    React.ElementRef<"button">,
    Props
>(({className, Icon , text, ...props},ref) => {
  return (
    <button
    ref={ref}
    className={cn(
        "hover:text-neutral text-neutral/60 text-[14px] flex items-center justify-center gap-2",
        className
    )}
    {...props}
    >
        <Icon strokeWidth={1} size={24}/>

        <span>{text}</span>
    </button>
  )
})
IconButtonWithText.displayName = "IconButtonWithText"

export default IconButtonWithText