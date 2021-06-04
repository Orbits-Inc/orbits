import Tag from "../Custom/tag.component";
import { ThumbsUp, MessageSquare, Circle } from "react-feather";
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
      className={`pt-4 text-sm font-semibold px-6 py-2 cursor-pointer bg-gray-100 mb-2`}
    >
      <div className="">
        <div class="flex space-x-4">
          <Tag tag={post?.tags[0]} />
          <div class="text-accent mt-2">
            <Circle size="6" fill="#9A9A9A" />
          </div>
          <div class="text-accent text-sm mt-1">{post?.read_time} mins</div>
        </div>
        <div className="break-words pt-2 text-primary font-semibold text-md">
          {post?.title}
        </div>
        <div className="flex text-accent space-x-4 text-sm">
          <Mention user={user} />
          <div className="py-1 flex space-x-1">
            <ThumbsUp size="16" className="" />
            <div class="">{post?.likes.length}</div>
          </div>
          <div className="py-1 flex space-x-1">
            <div>
              <MessageSquare size="16" />
            </div>
            <div>{post?.comments.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCrumb;
