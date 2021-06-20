import { useAuth } from "../../utils/providers/auth.provider";
import CustomButton from "../../components/Custom/custombutton.component";
import { Edit, Image2, Video, Document } from "react-iconly";
import AuthRequired, { CheckAuthOn } from "../../components/Misc/authRequired";

function WritePost() {
  const { user } = useAuth();

  return (
    <div
      id="write-post"
      className="relative pb-10 lg:pb-6 md:pb-6 flex space-x-4 p-6 bg-white-default rounded-xl border border-white-300"
    >
      <div className="">
        <div className="h-12 w-12">
          <img
            className="rounded-full w-12 h-12"
            src={`${user ? user.photoURL : "/default.svg"}`}
          />
        </div>
      </div>
      <div className="text-secondary w-full">
        <AuthRequired checkAuthOn={CheckAuthOn.click}>
          <CustomButton
            title="Start a post"
            className="mb-4 w-full text-left text-sm font-medium rounded-full p-3 px-6 text-black300 border border-white500"
            logo={<Edit className="inline mr-3 pb-1" />}
          />
        </AuthRequired>
        <div className="hidden lg:block md:block">
          <div className="ml-5 flex text-xs space-x-6 font-medium">
            <div className="cursor-pointer hover:text-blue-700 duration-300 flex items-center space-x-1">
              <Image2 className="pb-1" /> <div>Image</div>
            </div>
            <div className="cursor-pointer hover:text-blue-700 duration-300 flex items-center space-x-1">
              <Video className="pb-1" /> <div>GIF</div>
            </div>
            <div className="cursor-pointer hover:text-blue-700 duration-300 flex items-center space-x-1">
              <Document className="pb-1" /> <div>Article</div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 w-full lg:hidden md:hidden">
          <div className="flex text-xs justify-between px-7 font-medium">
            <div className="cursor-pointer hover:text-blue-700 duration-300 flex items-center space-x-2">
              <Image2 /> <div>Image</div>
            </div>
            <div className="cursor-pointer hover:text-blue-700 duration-300 flex items-center space-x-2">
              <Video /> <div>GIF</div>
            </div>
            <div className="cursor-pointer hover:text-blue-700 duration-300 flex items-center space-x-2">
              <Document /> <div>Article</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritePost;
