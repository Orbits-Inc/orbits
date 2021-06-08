import Tag from "../Custom/tag.component";
import { ThumbsUp, MessageSquare } from "react-feather";
import Mention from "../Misc/mention.component";
import { useApi } from "../../utils/providers/api.provider";
import { useState } from "react";
const PostCrumb = ({ post }) => {
  const { getUser } = useApi();
  const [user, setUser] = useState(undefined);
  getUser(post?.author_id)
    .then((res) => setUser(res))
    .catch((err) => console.log(err));
  return (
    <div
      className={`rounded-xl duration-300 pt-4 text-sm font-semibold px-4 py-2 cursor-pointer bg-white200 mb-2`}
    >
      <div className="">
        <div className="flex">
          <Tag tag={post?.tags[0]} />
        </div>
        <div className="break-words pt-4 pb-1 text-primary font-semibold text-md">
          {post?.title}
        </div>
        <div className="flex text-accent space-x-4 text-xs">
          <div className="mt-1">
            <Mention user={user} />
          </div>
          <div className="py-1 flex space-x-1">
            <ThumbsUp size="18" className="" />
            <div className="pt-1">{post?.likes.length}</div>
          </div>
          <div className="py-1 flex space-x-1">
            <div>
              <MessageSquare size="18" />
            </div>
            <div className="pt-1">{post?.comments.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCrumb;
