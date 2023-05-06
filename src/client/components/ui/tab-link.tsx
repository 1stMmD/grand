import { cn } from '@/client/lib/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props extends React.ComponentPropsWithoutRef<typeof Link> {
    text : string
}

const TabLink = React.forwardRef<
    React.ElementRef<typeof Link>,
    Props
>(({className, text, ...props},ref) => {
  return (
    <Link
    ref={ref}
    className={cn(
        "hover:text-neutral text-neutral/60 text-[14px] pb-4",
        className
    )}
    {...props}
    >
        {text}
    </Link>
  )
})
TabLink.displayName = "TabLink"

export default TabLink