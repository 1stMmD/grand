import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu"
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu"
import UserAvatar from "./user-avatar"
import IconButton from "./ui/icon-button"
import { Icons } from "./icons"

function NotificationsDropdown() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <IconButton
            className="h-fit"
            Icon={Icons.notification} 
            />
        </DropdownMenuTrigger>
        <DropdownMenuContent asChild>
            <div
            className="
            mt-2
            sm:m-2
            min-w-full
            sm:min-w-[200px]
            relative
            flex flex-col border-[1px] border-neutral/10
            rounded min-h-[80px] bg-background
            ">

            </div>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NotificationsDropdown