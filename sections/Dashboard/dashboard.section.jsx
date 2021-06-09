import Navbar from "../../components/PageAssets/navbar.component";
import CustomButton from "../../components/Custom/custombutton.component";
import { Edit2, Clock, Home } from "react-feather";
import { usePopup } from "../../utils/providers/popup.provider";
import { useAuth } from "../../utils/providers/auth.provider";
import Modal from "./modal.section";
import SearchBar from "../../components/Custom/searchbar.component";
import TrendingPosts from "../Post/trendingposts.section";
import Switcher from "../../components/Misc/switcher.component";
import WritePost from "./writepost.section";
import Posts from "../Post/posts.section";

function Dashboard() {
  const { isOpen, setIsOpen } = usePopup();
  const { user } = useAuth();

  return (
    <main className="">
      <div className="flex flex-col lg:flex-row lg:space-x-4 text-primary">
        <Navbar />
        <div className="flex flex-col space-y-2 w-full">
          <div className="border border-white300 bg-white text-base font-bold w-full py-4 px-8 rounded-xl">
            <div className="flex justify-between items-center">
              <div>My Feed</div>
              <Switcher
                item1={{
                  logo: () => <Home size="14" />,
                  title: "For you",
                }}
                item2={{
                  logo: () => <Clock size="14" />,
                  title: "Recent",
                }}
              />
            </div>
          </div>
          <Modal />
          <WritePost />
          <Posts />
        </div>
        <div className="hidden lg:flex lg:flex-col space-y-3">
          <SearchBar />
          <div className="px-5 py-7 rounded-xl border border-white300 bg-white h-full">
            <div className="font-bold mb-1 text-primary">Top Articles</div>
            <div className="font-medium text-xs text-accent mb-5 text-primary">
              This Week
            </div>
            <TrendingPosts />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
