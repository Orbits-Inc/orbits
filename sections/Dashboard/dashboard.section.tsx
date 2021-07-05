import Navbar from "../../components/PageAssets/navbar.component";
import TrendingSection from "./SideBar/trendingposts.sidebar";
import TrendingTags from "./SideBar/trendingtags.sidebar";
import LoginPrompt from "./SideBar/loginprompt.sidebar";
import Modal from "./modal.section";
import SearchBar from "../../components/Custom/searchbar.component";
import WritePost from "./writepost.section";
import Posts from "../Post/posts.section";
import TabChanger from "./tabchanger.section";

function Dashboard() {
  return (
    <main className="">
      <div className="flex flex-col md:flex-row lg:flex-row lg:space-x-4 md:space-x-2 text-primary">
        <Navbar />
        <div className="flex flex-col space-y-2 w-full">
          <TabChanger />
          <Modal />
          <WritePost />
          <Posts />
        </div>
        <div className="hidden lg:flex lg:flex-col space-y-2">
          <SearchBar />
          <TrendingSection />
          <TrendingTags />
          <LoginPrompt />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
