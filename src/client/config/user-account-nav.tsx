export interface UserAccountNavSection {
    title: string;
    link: string;
    icon?: string;
}
export type UserAccountNavConfig = {
    sections: UserAccountNavSection[];
}[]

export const userAccountNavConfig : UserAccountNavConfig = [
    {
        sections : [
            {
                title : "Profile",
                link : "/me",
                icon : "user"
            },
            {
                title : "Library",
                link : "/me/lists",
                icon : "bookmark",
            },
            {
                title : "Stories",
                link : "/me/stories",
                icon : "fileText",
            },
            {
                title : "Stats",
                link : "/me/stats",
                icon : "barChart",
            },
        ]
    },
    {
        sections : [
            {
                title : "Setting",
                link : "/me/setting",
            },
            {
                title : "Refine recommendations",
                link : "/me/fallowing",
            },
            {
                title : "Become a member",
                link : "/plans",
            }
        ]
    },
]