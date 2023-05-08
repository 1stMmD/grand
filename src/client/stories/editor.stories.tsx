import PostLayout from "@/app/editor/[post]/layout"
import PostPage from "@/app/editor/[post]/page"

export default {
    title : "Editor",
    component : PostPage
}

export const Primary = () => ( 
    <PostLayout>
        <PostPage/>
    </PostLayout> 
)