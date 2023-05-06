import { Fragment } from "react"
import { Icons } from "./icons"
import { 
    DropdownMenu,
    DropdownMenuPortal,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuLabel
} from "./ui/dropdown-menu"
import UserAvatar from "./user-avatar"
import { usePathname } from "next/navigation"
import { UserAccountNavSection, userAccountNavConfig } from "../config/user-account-nav"
import Link from "next/link"

function UserAccountNav({ user } : { user : { name : string, image : string }}) {
    const pathname = usePathname()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center justify-center cursor-pointer gap-1">
                    <UserAvatar
                    user={user}
                    />

                    <Icons.down
                    className="w-3 aspect-square text-neutral/80"
                    />
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
                <DropdownMenuContent className="
                max-h-[calc(100vh_-_60px)] overflow-y-auto z-[50] relative
                m-2 bg-background
                ">
                    <div
                    className="
                    flex
                    flex-col
                    py-4
                    ">
                        <Link href={"/write"}>
                            <DropdownMenuItem>
                                 <Icons.edit strokeWidth={1} />
                                <span>{"Write"}</span>
                            </DropdownMenuItem>
                        </Link>
                    </div>

                    <DropdownMenuSeparator className="w-[24px] -my-2 mx-6"/>

                    {userAccountNavConfig.map(({sections} : { sections : UserAccountNavSection[] }, idx, list) => (
                        <Fragment
                        key={idx}>
                            <div
                            className="
                            flex
                            flex-col
                            py-4
                            ">
                                {sections.map(({icon, title, link} : UserAccountNavSection) => {
                                    const Icon = icon ? Icons[icon] : null
                                    const selected = pathname === link

                                    return(
                                        <Link href={link} key={title}>
                                            <DropdownMenuItem
                                            className={selected ? "text-neutral" : ""}
                                            >
                                                { Icon ? <Icon strokeWidth={selected ? 2 : 1} /> : "" }
                                                <span>{title}</span>
                                            </DropdownMenuItem>
                                        </Link>
                                    )
                                })}
                            </div>

                            <DropdownMenuSeparator/>
                        </Fragment>
                    ))}

                    <div
                    className="
                    flex
                    flex-col
                    py-4
                    ">
                        <DropdownMenuItem className="py-0">
                                Sign out
                        </DropdownMenuItem>

                        <DropdownMenuLabel className="py-0">
                                test@gmail.com
                        </DropdownMenuLabel>
                    </div>
                </DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenu>
    )
}

export default UserAccountNav