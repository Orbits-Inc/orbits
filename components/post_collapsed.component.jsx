import Tag from "./tag.component";
import { Droplet, MessageSquare, Circle } from "react-feather";

const PostCollapsed = ({ post }) => {
  return (
    <div className={`text-sm font-semibold px-6 py-2 cursor-pointer`}>
      <div className="">
        <div class="flex space-x-4">
          <Tag tag="space" />
          <div class="text-accent mt-2">
            <Circle size="6" fill="#9A9A9A" />
          </div>
          <div class="text-accent text-sm mt-1">{post.read_time} mins</div>
        </div>
        <div className="break-words pt-2 text-primary font-semibold text-md">
          {post.title}
        </div>
        <div className="flex text-accent space-x-4 text-sm">
          <div className="cursor-pointer p-1 rounded-full text-accent hover:underline hover:text-secondary text-md w-auto hover:bg-blue-100 duration-300">
            @{post.author.username}
          </div>
          <div className="py-1 flex space-x-1">
            <Droplet size="18" className="" />
            <div class="">{post.likes.length}</div>
          </div>
          <div className="py-1 flex space-x-1">
            <div>
              <MessageSquare size="18" />
            </div>
            <div>{post.comments.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCollapsed;
