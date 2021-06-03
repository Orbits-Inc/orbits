import Comment from "../../components/Post/comment.component";
import CustomButton from "../../components/Custom/custombutton.component";

function Comments({ comments }) {
  return (
    <div>
      <div className="font-bold text-2xl text-primary mb-4">
        Comments
        <hr />
      </div>
      <form className={`w-full w-80 rounded-lg bg-gray-200 inline-flex mb-8`}>
        <textarea
          className="py-4 px-4 h-12 outline-none w-full text-sm text-primary px-1 bg-transparent rounded-lg"
          placeholder="Write down your comment..."
          required
        ></textarea>
        <CustomButton
          title="Submit"
          className="px-10 bg-secondary text-white"
        />
      </form>
      <div className="flex flex-col space-y-6">
        {comments.map((data, key) => (
          <div>
            <Comment comment={data} key={key} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
