import FeedTabs from "@/client/components/feed-tabs"
import Page from "./layout"

export default {
    title : "App",
    component : Page
}

export const Primary = () => (
    <Page>
        <main className="flex w-ful relative px-6">
            <FeedTabs/>
        </main>
    </Page>
)