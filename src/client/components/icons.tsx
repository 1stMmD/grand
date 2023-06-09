import { Bell, ChevronLeft, ChevronRight, Edit } from "lucide-react"
import { BarChart, Bookmark, Edit3, LucideIcon, Pencil } from "lucide-react"
import {
    Search,
    Moon,
    Sun,
    LucideProps,
    User,
    ChevronDown,
    FileText,
} from "lucide-react"

export const Icons  : {
    [name : string] : LucideIcon
} = {
    logo : ({...props} : LucideProps) => (
        <svg 
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="logo"
        role="img"
        viewBox="0 0 25 15" 
        xmlns="http://www.w3.org/2000/svg"
        {...props} 
        >
            <path
            fill="currentColor"
            d="M17.5 15C15.5109 15 13.6032 14.2098 12.1967 12.8033C10.7902 11.3968 10 9.48912 10 7.5C10 5.51088 10.7902 3.60322 12.1967 2.1967C13.6032 0.790175 15.5109 0 17.5 0C19.4891 0 21.3968 0.790175 22.8033 2.1967C24.2098 3.60322 25 5.51088 25 7.5C25 9.48912 24.2098 11.3968 22.8033 12.8033C21.3968 14.2098 19.4891 15 17.5 15ZM6.25 13.75C4.375 13.75 3.125 10.9512 3.125 7.5C3.125 4.04875 4.375 1.25 6.25 1.25C8.125 1.25 9.375 4.04875 9.375 7.5C9.375 10.9512 8.125 13.75 6.25 13.75ZM1.25 13.125C0.775 13.125 0.360001 12.0912 0.150001 10.3175L0.0912499 9.76375L0.0675011 9.47L0.0300002 8.8525L0.0174999 8.52875L0.00250101 7.8525L0 7.5L0.00250101 7.1475L0.0174999 6.47125L0.0300002 6.14625L0.0675011 5.53L0.0924993 5.23625L0.148749 4.6825C0.359999 2.9075 0.77375 1.875 1.25 1.875C1.725 1.875 2.14 2.90875 2.35 4.6825L2.40875 5.23625C2.41736 5.33411 2.42527 5.43203 2.4325 5.53L2.47 6.1475C2.47484 6.25539 2.479 6.36331 2.4825 6.47125L2.4975 7.1475V7.8525L2.4825 8.52875L2.47 8.85375L2.4325 9.47L2.4075 9.76375L2.35125 10.3175C2.14 12.0925 1.72625 13.125 1.25 13.125Z"
            />
        </svg>
    ) ,
    search : Search,
    moon : Moon,
    sun : Sun,
    user : User,
    left : ChevronLeft,
    right : ChevronRight,
    down : ChevronDown,
    fileText : FileText,
    bookmark : Bookmark,
    barChart : BarChart,
    edit : Edit,
    notification : Bell
}