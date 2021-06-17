import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useEffect, useState } from "react";
import Mention from "../Misc/mention.component";
import axios from "axios";
import { CommentType, User } from "../../types/data.types";

interface CommentProps {
  comment: CommentType;
}

function Comment({ comment }: CommentProps) {
  const [author, setAuthor] = useState<User>();

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/byId/${comment.userID}`
      )
      .then((res) => {
        setAuthor(res.data);
      });
  }, []);

  return (
    <>
      <div className="flex">
        <div>
          <img className="rounded-full h-12" src={author.displayPicture} />
        </div>
        <div className="ml-3">
          <div className="text-primary font-bold text-lg">
            <div className="ml-1">{author?.name}</div>
            <div className="">
              <Mention username={author.username} />
            </div>
          </div>
        </div>
      </div>
      <div className="article prose text-primary leading-loose font-medium">
        <ReactMarkdown remarkPlugins={[gfm]} children={comment.comment} />
      </div>
    </>
  );
}

export default Comment;
