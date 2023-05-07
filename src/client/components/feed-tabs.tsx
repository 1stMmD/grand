import React, { useCallback, useRef, useState } from 'react'
import { 
    TabsList,
    TabsLink,
    TabScrollButton
} from './ui/tabs'
import { Plus } from 'lucide-react'
import { Icons } from './icons'

const FeedTabs = () => {
    const [rightButton, setRightButton] = useState(false)
    const [leftButton, setLeftButton] = useState(false)

    const ListElement = useRef<HTMLDivElement >()

    const handle = useCallback((node : HTMLDivElement ) => {
        if(!node) return 

        ListElement.current = node
        const elementWidth = node.clientWidth
        const elementScrollWidth = node.scrollWidth
        const elementScrollLeft = node.scrollLeft

        if(elementWidth >= elementScrollWidth) return

        setRightButton((elementWidth + elementScrollLeft) !== elementScrollWidth)
        setLeftButton(elementScrollLeft > 0)
    },[])

    return (
        <div
        className='
        relative
        w-full
        pt-4
        '>
            <TabsList
            onScroll={(e) => {
                const node = (e.target as HTMLDivElement)
                const elementWidth = node?.clientWidth
                const elementScrollWidth = node?.scrollWidth
                const elementScrollLeft = node?.scrollLeft

                setRightButton((elementWidth + elementScrollLeft) !== elementScrollWidth)
                setLeftButton(elementScrollLeft > 0)
            }}      
            ref={handle}
            >
                
                <button
                className='
                h-fit
                w-fit
                p-[1px]
                rounded-full 
                flex 
                items-center 
                justify-center 
                text-neutral/80
                bg-background 
                hover:bg-neutral/5
                '>
                    <Plus size={20} strokeWidth={1.5}/>
                </button>

                {
                    list.map(({title , url} , idx , list) => (
                        <TabsLink
                        className={idx === list.length - 1 ? "mr-4" : ""}
                        data-state={url === "/" ? "active" : ""}
                        href={url} key={idx}>
                            {title}
                        </TabsLink>
                    ))
                }

            </TabsList>

            { leftButton ? 
            <TabScrollButton
            Icon={Icons.left}
            onClick={() => {
                ListElement.current?.scrollBy(-60,0)
            }}
            className='
            bg-gradient-to-r
            left-0
            '/> : ""}

            { rightButton ? 
            <TabScrollButton
            Icon={Icons.right}
            onClick={() => {
                ListElement.current?.scrollBy(60,0)
            }}
            className='
            right-0
            bg-gradient-to-l
            '/> : ""}
            <span className='absolute w-full h-[1px] bg-neutral/10 bottom-0 left-0 right-0'/>
        </div>
    )
}

export default FeedTabs

const list = [
    {
        title : "For you",
        url : "/"
    },
    {
        title : "Fallowing",
        url : "/feed=following"
    },
    {
        title : "javascript",
        url : "/tag=javascript"
    },
    {
        title : "typescript",
        url : "/tag=typescript"
    },
    {
        title : "react",
        url : "/tag=react"
    },
]
