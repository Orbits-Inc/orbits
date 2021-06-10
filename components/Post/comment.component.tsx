import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useEffect, useState } from "react";
import Mention from "../Misc/mention.component";
import axios from "axios";

function Comment({ comment }) {
  const [author, setAuthor] = useState(undefined);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/byId/${comment?.user_id}`
      )
      .then((res) => {
        setAuthor(res.data);
      });
  }, []);

  return (
    <>
      <div className="flex">
        <div>
          <img className="rounded-full h-12" src={author?.display_picture} />
        </div>
        <div className="ml-3">
          <div className="text-primary font-bold text-lg">
            <div className="ml-1">{author?.name}</div>
            <div className="">
              <Mention author={author} />
            </div>
          </div>
        </div>
      </div>
      <div className="article prose text-primary leading-loose font-medium">
        <ReactMarkdown remarkPlugins={[gfm]} children={comment?.content} />
      </div>
    </>
  );
}

export default Comment;
