import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/client/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuContent = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({className, ...props}, ref) => (
    <DropdownMenuPrimitive.Content
    ref={ref}
    className={cn(
        "min-w-[min(264px,90vw)] border-[1px] rounded-[3px]",
        className
    )}
    {...props}
    />
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuSubTrigger = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>
>(({className, ...props}, ref) => (
    <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
        "",
        className
    )}
    {...props}
    />
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({className, ...props}, ref) => (
    <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
        `flex outline-none px-6 py-2 gap-4 transition-colors
        hover:text-neutral text-neutral/70 font-[400]
        cursor-pointer text-[14px] items-center`,
        className
    )}
    {...props}
    />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuLabel = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({className, ...props}, ref) => (
    <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
        `flex outline-none px-6 py-2 gap-4 transition-colors
        text-neutral/70 font-[400]
        cursor-default text-[13px] items-center`,
        className
    )}
    {...props}
    />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({className, ...props}, ref) => (
    <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(
        "h-[1px] w-full bg-neutral/10",
        className
    )}
    {...props}
    />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

export {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
    DropdownMenuLabel
}