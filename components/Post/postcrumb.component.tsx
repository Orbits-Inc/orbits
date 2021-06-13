import Tag from "../Custom/tag.component";
import { Heart2, Chat } from "react-iconly";
import Mention from "../Misc/mention.component";
import { useApi } from "../../utils/providers/api.provider";
import { Post, User } from "../../types/data.types";
interface PostCrumb {
  post: Post;
}

const PostCrumb = ({ post }: PostCrumb) => {
  const { getUser } = useApi();
  const { user }: { user: User } = getUser(post?.authorID);

  return (
    <div
      className={`rounded-lg duration-300 pt-4 text-sm font-semibold px-4 py-2 cursor-pointer bg-white200 mb-2`}
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
            <Mention username={user?.username} />
          </div>
          <div className="py-1 flex space-x-1">
            <Heart2 className="pb-1" />
            <div className="pt-1">{post?.likes.length}</div>
          </div>
          <div className="py-1 flex space-x-1">
            <div>
              <Chat className="pb-1" />
            </div>
            <div className="pt-1">{post?.comments.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCrumb;
