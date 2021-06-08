import ProfileCrumb from "../Misc/profilecrumb.component";
import Tag from "../Custom/tag.component";
import { ThumbsUp, MessageSquare, Calendar } from "react-feather";

function PostCard({ post }) {
  const user = post.author;
  if (user && post) {
    return (
      <div>
        <ProfileCrumb user={user} />
        <div className="flex lg:items-center flex-col lg:flex-row space-x-0 space-y-3 lg:space-y-0 lg:space-x-3">
          <div className="w-full">
            <div className="flex space-x-3 mt-5 mb-3">
              {post?.tags.map((data, key) => (
                <Tag tag={data} key={key} />
              ))}
            </div>
            <div className="font-bold text-xl mb-1">{post?.title}</div>
            <div className="font-medium text-sm text-accent">
              {post?.description}
            </div>
          </div>
          <div>
            <div
              className="h-40 md:h-60 w-full lg:h-32 lg:w-60 rounded-lg"
              style={{
                backgroundImage: `url(${post?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
        <div className="flex font-medium text-sm space-x-6 mt-4 text-gray-500">
          <div className="py-1 flex space-x-2">
            <ThumbsUp size="19" className="" />
            <div className="">{post?.likes.length}</div>
          </div>
          <div className="py-1 flex space-x-2">
            <div>
              <MessageSquare size="19" />
            </div>
            <div className="">{post?.comments.length}</div>
          </div>
          <div className="py-1 flex space-x-2">
            <div>
              <Calendar size="19" />
            </div>
            <div className="">{post?.date}</div>
          </div>
        </div>
      </div>
    );
  } else {
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
