import Navbar from "../../components/PageAssets/navbar.component";
import CustomButton from "../../components/Custom/custombutton.component";
import { Edit2 } from "react-feather";
import { usePopup } from "../../utils/providers/popup.provider";
import { useAuth } from "../../utils/providers/auth.provider";
import Modal from "./modal.section";
import SearchBar from "../../components/Custom/searchbar.component";
import TrendingPosts from "../Post/trendingposts.section";

function Dashboard() {
  const { isOpen, setIsOpen } = usePopup();
  const { user } = useAuth();

  return (
    <main className="overflow-x-hidden p-5 h-screen bg-white200">
      <div className="flex space-x-5 text-primary">
        <Navbar />
        <div className="flex flex-col space-y-5 w-full">
          <div className="shadow-sm bg-white text-lg font-bold w-full py-5 px-8 rounded-xl">
            <div className="flex">
              <div>My Feed</div>
            </div>
          </div>
          <Modal />
        </div>
        <div className="flex flex-col space-y-5">
          <SearchBar />
          <div className="px-5 py-8 rounded-xl bg-white h-full">
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
