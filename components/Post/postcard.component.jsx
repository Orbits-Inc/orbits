import { useApi } from "../../utils/providers/api.provider";
import { useState } from "react";
import ProfileCrumb from "../Misc/profilecrumb.component";
import Tag from "../Custom/tag.component";
import { ThumbsUp, MessageSquare, Circle, Calendar } from "react-feather";

function PostCard({ post }) {
  const { getUser } = useApi();
  const [user, setUser] = useState(undefined);
  getUser(post?.author_id)
    .then((res) => setUser(res))
    .catch((err) => console.log(err));

  return (
    <div>
      <ProfileCrumb user={user} />
      <div className="flex lg:items-center flex-col lg:flex-row space-x-0 space-y-3 lg:space-y-0 lg:space-x-3">
        <div className="w-full">
          <div className="flex space-x-3 mt-5 mb-3">
            {post?.tags.map((data, key) => (
              <Tag tag={data} />
            ))}
          </div>
          <div className="font-bold text-xl mb-1">{post?.title}</div>
          <div className="font-medium text-sm text-accent">
            {post?.description}
          </div>
        </div>
        <div>
          <div
            className="h-52 w-full lg:h-32 lg:w-60 rounded-lg"
            style={{
              backgroundImage: `url(${post?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div className="flex font-medium text-sm space-x-6 mt-4 text-accent">
        <div className="py-1 flex space-x-2">
          <ThumbsUp size="19" className="" />
          <div className="pt-1">{post?.likes.length}</div>
        </div>
        <div className="py-1 flex space-x-2">
          <div>
            <MessageSquare size="19" />
          </div>
          <div className="pt-1">{post?.comments.length}</div>
        </div>
        <div className="py-1 flex space-x-2">
          <div>
            <Calendar size="19" />
          </div>
          <div className="pt-1">{post?.date}</div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
