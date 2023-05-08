"use client"

import React , {useCallback, useEffect , useRef, useState} from 'react'
import EditorJS from '@editorjs/editorjs'
import TextareaAutoSize from 'react-textarea-autosize'
import "@/client/styles/editor.css"

interface props {
    editorRef : EditorJS
}

function Editor() {
    const ref = useRef<EditorJS>()
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const [isSaving, setIsSaving] = useState<boolean>(false)

    const initializeEditor = useCallback(async () => {
        const EditorJS = (await import("@editorjs/editorjs")).default
        const code = (await import("@editorjs/code")).default
        const list = (await import("@editorjs/list")).default
        const table = (await import("@editorjs/table")).default
        const inlineCode = (await import("@editorjs/inline-code")).default
        const embed = (await import("@editorjs/embed")).default
        const linkTool = (await import("@editorjs/link")).default
        const header = (await import("@editorjs/header")).default
        const image = (await import("@editorjs/image")).default

        if(ref.current) return

        const editor = new EditorJS({
            holder : "editor",
            onReady() {
                ref.current = editor
            },
            placeholder : "Write your amazing story...",
            autofocus : false,
            tools : {
                header,
                code,
                inlineCode,
                table,
                list,
                embed,
                linkTool,
                image : image
            }
        })
    },[])

    useEffect(() => {
        if(typeof window !== undefined) setIsMounted(true)
    },[])

    useEffect(() => {
        if(isMounted){
            initializeEditor()

            return () => {
                ref.current?.destroy()
                ref.current = undefined
            }
        }
    },[initializeEditor, isMounted])

    return (
        <div 
        className='
        relative max-w-full w-full
        flex flex-col
        text-neutral
        '>
            <TextareaAutoSize
            className="resize-none outline-none min-w-0 text-5xl font-bold"
            id="title"
            autoFocus={true}
            defaultValue={"untitled"}
            placeholder='Story title'
            />

            <div
            id="editor"
            className='
            w-full
            h-fit
            text-inherit
            '
            />
            
        </div>
    )
}

export default Editor