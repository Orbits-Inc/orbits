import { useApi } from "../../utils/providers/api.provider";
import { useEffect, useState } from "react";
import { Post } from "../../types/data.types";
import ProfileCrumb from "../Misc/profilecrumb.component";
import Tag from "../Custom/tag.component";
import { Heart2, Chat, Bookmark, Calendar } from "react-iconly";
import SkeletonPost from "../Skeletons/SkeletonPost";

interface PostCard {
  post: Post;
}

const PostCard = ({ post }: PostCard): JSX.Element => {
  const { getUser } = useApi();
  const { user, isLoading }: any = getUser(post.author_id);

  const [isBookmarked, setIsBookmarked] = useState(false);

  const EngageSection = () => {
    return (
      <div className="flex justify-between lg:justify-start md:justify-start space-x-8 mt-2">
        <div className="flex font-medium text-sm space-x-8 text-white-800">
          <div className="py-1 flex space-x-2">
            <Heart2 size="20" />
            <div className="pt-1">{post?.likes.length}</div>
          </div>
          <div className="py-1 flex space-x-2">
            <Chat size="20" />
            <div className="pt-1">{post?.comments.length}</div>
          </div>
        </div>
        <div
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`cursor-pointer ${
            isBookmarked ? "text-secondary" : "text-white-800"
          } mt-1`}
        >
          <Bookmark set={isBookmarked ? "bold" : "light"} size="21" />
        </div>
      </div>
    );
  };

  if (user && post) {
    return (
      <div>
        <div className="flex flex-col lg:flex-row md:flex-row justify-between mb-3 lg:mb-4">
          <div className="flex space-x-2">
            <ProfileCrumb user={user} />
            <div className="mt-6 text-white-800 flex space-x-1 text-xs">
              <div>
                <Calendar size="small" className="pb-1" />
              </div>
              <div className="">{post?.date}</div>
            </div>
          </div>
          <div className="flex space-x-3 mt-3 lg:mt-5 md:mt-5">
            {post?.tags.map((data, idx) => (
              <Tag noColor tag={data} key={idx} />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:items-center lg:items-center md:flex-row lg:flex-row space-x-0 space-y-3 lg:space-y-0 lg:space-x-3 md:space-x-3">
          <div className="w-full">
            <div className="font-bold text-xl mb-2 text-black-700">
              {post?.title}
            </div>
            <div className="leading-relaxed font-medium text-sm mb-1 lg:mb-none md:mb-none text-black-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </div>
            <div className="hidden md:block lg:block">
              <EngageSection />
            </div>
          </div>
          <div>
            <div
              className="h-40 md:h-32 md:w-60 w-full lg:h-32 lg:w-60 rounded-lg"
              style={{
                backgroundImage: `url("${post?.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
        <div className="block md:hidden lg:hidden mt-4">
          <EngageSection />
        </div>
      </div>
    );
  }
  return <SkeletonPost />;
};

export default PostCard;
