import FeedTabs from "@/client/components/feed-tabs"
import Page from "./layout"
import Editor from "@/client/components/editor"

export default {
    title : "App",
    component : Page
}

export const Primary = () => (
    <Page>
        <main className="flex w-ful relative px-6 flex-col">
            <FeedTabs/>
            <Editor/>
        </main>
    </Page>
)