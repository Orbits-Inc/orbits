import TrendingPosts from "../../Post/trendingposts.section";
import Switcher from "../../../components/Misc/switcher.component";
import CustomButton from "../../../components/Custom/custombutton.component";
import { ChevronRight } from "react-iconly";

function TrendingSection() {
  return (
    <div
      id="trending-posts"
      className="px-5 py-7 rounded-xl border border-white-300 bg-white-default"
    >
      <div className="flex justify-between">
        <div>
          <div className="font-bold mb-1 text-primary">Top Articles</div>
          <div className="font-medium text-xs text-accent mb-5">This Week</div>
        </div>
        <div>
          <Switcher
            items={[
              {
                title: "1w",
              },
              {
                title: "1m",
              },
            ]}
            switcherItemClassName="px-2 text-gray-500 font-medium rounded-xl py-2 text-xs"
            switcherItemActiveClassName="border-none bg-blue-200 text-blue-600"
          />
        </div>
      </div>
      <TrendingPosts />
      <CustomButton
        logo={<ChevronRight className="inline ml-2 pb-1" />}
        logoPosition="right"
        title="Show more"
        className="mt-8 bottom-0 w-full border-secondary border-2 text-secondary py-3 font-medium rounded-xl hover:bg-secondary hover:text-white-default"
      />
    </div>
  );
}

export default TrendingSection;
