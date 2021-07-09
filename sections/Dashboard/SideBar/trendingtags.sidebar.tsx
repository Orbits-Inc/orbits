import Switcher from "../../../components/Misc/switcher.component";
import CustomButton from "../../../components/Custom/custombutton.component";
import { ChevronRight } from "react-iconly";

function TrendingTags() {
  const tags = [
    {
      name: "SpaceExploration",
      posts: 110,
    },
    {
      name: "Astronomy",
      posts: 90,
    },
    {
      name: "EducationSystem",
      posts: 50,
    },
  ];

  return (
    <div
      id="trending-posts"
      className="px-5 py-7 rounded-xl border border-white-300 bg-white "
    >
      <div className="flex justify-between">
        <div>
          <div className="font-bold mb-1 text-primary">What's Geeking</div>
          <div className="font-medium text-xs text-accent mb-8">This Week</div>
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
      <div className="flex flex-col space-y-6 p-3">
        {tags.map((data, key) => (
          <div className="flex flex-col space-y-3">
            <div className="text-black-400 font-semibold text-sm">
              #{data.name}
            </div>
            <div className="text-black-200 font-medium text-xs">
              {data.posts} Posts
            </div>
            <div className="pt-2">
              {key !== tags?.length - 1 ? <hr /> : <></>}
            </div>
          </div>
        ))}
      </div>
      <CustomButton
        logo={<ChevronRight className="inline ml-2 pb-1" />}
        logoPosition="right"
        title="Show more"
        className="mt-2 bottom-0 w-full border-secondary border-2 text-secondary py-3 font-medium rounded-xl hover:bg-secondary hover:text-white "
      />
    </div>
  );
}

export default TrendingTags;
