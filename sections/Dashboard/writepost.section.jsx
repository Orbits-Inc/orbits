import { useAuth } from "../../utils/providers/auth.provider";
import CustomButton from "../../components/Custom/custombutton.component";
import { Edit2, Image, Video, FileText } from "react-feather";

function WritePost() {
  const { user } = useAuth();

  return (
    <div className="flex space-x-4 p-6 bg-white rounded-xl border border-white300">
      <div className="">
        <div className="h-12 w-12">
          <img
            className="rounded-full w-12 h-12"
            src={`${user ? user.photoURL : "/default.svg"}`}
          />
        </div>
      </div>
      <div className="text-secondary w-full">
        <CustomButton
          title="Start a post"
          className="mb-4 w-full text-left text-sm font-medium rounded-full p-3 px-6 text-black300 border border-white500"
          logo={<Edit2 className="inline mr-3 mb-1" size="16" />}
        />
        <div className="ml-5 flex text-xs space-x-6 font-medium">
          <div className="cursor-pointer hover:text-blue-700 duration-300 flex items-center space-x-2">
            <Image size="18" /> <div>Image</div>
          </div>
          <div className="cursor-pointer hover:text-blue-700 duration-300 flex items-center space-x-2">
            <Video size="18" /> <div>GIF</div>
          </div>
          <div className="cursor-pointer hover:text-blue-700 duration-300 flex items-center space-x-2">
            <FileText size="18" /> <div>Article</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritePost;
