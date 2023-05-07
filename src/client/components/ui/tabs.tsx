import * as React from "react"
import { cn } from "@/client/lib/utils";
import Link from "next/link";
import { Icons } from "../icons";
import { LucideIcon } from "lucide-react";


const TabsList = React.forwardRef<
    React.ElementRef<"div">,
    React.ComponentPropsWithoutRef<"div">
>(({className, ...props}, ref) => (
    <div
    ref={ref}
    className={cn(
        "relative flex-shrink-0 min-w-full max-w-full overflow-x-hidden flex gap-6 scroll-smooth snap-y snap-mandatory",
        className
    )}
    {...props}
    />
))
TabsList.displayName = "TabsList"


const TabsLink = React.forwardRef<
    React.ElementRef<typeof Link>,
    React.ComponentPropsWithoutRef<typeof Link>
>(({className, ...props}, ref) => (
    <Link
    ref={ref}
    className={cn(
        `flex-shrink-0 text-[14px] text-neutral/60 hover:text-neutral pb-4
        data-[state=active]:border-b-[1px] data-[state=active]:text-neutral 
        border-neutral data-[state=active]:pb-[15px] snap-start`,
        className
    )}
    {...props}
    />
))
TabsLink.displayName = "TabsLink"

interface TabScrollButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    Icon : LucideIcon
}

const TabScrollButton = React.forwardRef<
        React.ElementRef<"button">,
        TabScrollButtonProps
>(({Icon, className,...props}) => (
    <button
    className={cn(
       `absolute top-0 bottom-0 flex items-center justify-center 
        px-2 from-white from-50% to-transparent text-neutral/60 hover:text-neutral
        transition-colors`,
        className
    )}
    {...props}>
        <Icon
        size={24}
        strokeWidth={1}
        />
    </button>
))

TabScrollButton.displayName = "TabScrollButton"

export {
    TabsList,
    TabsLink,
    TabScrollButton
}