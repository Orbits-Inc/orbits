import { useApi } from "../../utils/providers/api.provider";
import { useState } from "react";
import ProfileCrumb from "../Misc/profilecrumb.component";
import Tag from "../Custom/tag.component";
import useSWR from "swr";

import {
  ThumbsUp,
  Bookmark,
  MessageSquare,
  Circle,
  Calendar,
} from "react-feather";

function PostCard({ post }) {
  const { getUser } = useApi();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { user, isLoading, isError } = getUser(post?.author_id);

  const EngageSection=()=>{
    return(
      <div className="flex justify-between lg:justify-start md:justify-start space-x-8 mt-2">
        <div className="flex font-medium text-sm space-x-8 text-white800">
          <div className="py-1 flex space-x-2">
            <ThumbsUp size="20" className="" />
            <div className="pt-1">{post?.likes.length}</div>
          </div>
          <div className="py-1 flex space-x-2">
            <div>
              <MessageSquare size="20" />
            </div>
            <div className="pt-1">{post?.comments.length}</div>
          </div>
        </div>
        <div
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`cursor-pointer ${
            isBookmarked ? "text-secondary" : "text-white800"
          } mt-1`}
        >
          <Bookmark fill={isBookmarked ? "#347EFD" : "white"} size="21" />
        </div>
      </div>
    )
  }

  if (user && post) {
    return (
      <div>
        <div className="flex flex-col lg:flex-row md:flex-row justify-between mb-3 lg:mb-4">
        <div className="flex space-x-2">
          <ProfileCrumb user={user} />
          <div className="mt-6 text-white800 flex space-x-2 text-xs">
          <div>
            <Calendar size="12" />
          </div>
          <div className="">{post?.date}</div>
          </div>
          </div>
          <div className="flex space-x-3 mt-3 lg:mt-5 md:mt-5">
            {post?.tags.map((data, key) => (
              <Tag tag={data} />
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:items-center md:flex-row lg:flex-row space-x-0 space-y-3 lg:space-y-0 lg:space-x-3">
          <div className="w-full">
            <div className="font-bold text-xl mb-1 text-black700">{post?.title}</div>
            <div className="font-medium text-sm text-black400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </div>
            <div className="hidden md:block lg:block"><EngageSection/></div>
          </div>
          <div>
            <div
              className="h-40 md:h-32 md:w-60 w-full lg:h-32 lg:w-60 rounded-lg"
              style={{
                backgroundImage: `url(${post?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

          </div>
        </div>
          <div className="block md:hidden lg:hidden mt-4"><EngageSection/></div>
      </div>
    );
  } else if (isLoading) {
    return (
      <div>
        <div className="flex lg:items-center flex-col lg:flex-row space-x-0 space-y-3 lg:space-y-0 lg:space-x-3">
          <div className="w-full">
            <div className="flex space-x-3 mb-3">
              <div className="bg-gray-300 animate-pulse rounded-md w-20 h-6"></div>
              <div className="bg-gray-300 animate-pulse rounded-md w-20 h-6"></div>
            </div>
            <div className="font-bold text-xl rounded-lg bg-gray-300 animate-pulse mb-2 w-30 h-8"></div>
            <div className="font-medium text-sm rounded-lg bg-gray-300 text-accent w-60 h-6 animate-pulse"></div>
          </div>
          <div>
            <div className="h-40 md:h-60 w-full lg:h-32 lg:w-60 rounded-lg animate-pulse bg-gray-300"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
