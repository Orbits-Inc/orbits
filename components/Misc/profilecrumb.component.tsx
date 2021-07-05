import Mention from "./mention.component";
import { User } from "../../types/data.types";

const ProfileCrumb = ({ user }: { user: User }): JSX.Element => {
  return (
    <div className="flex space-x-3">
      <div>
        <img src={user?.display_picture} className="rounded-full w-10 h-10" />
      </div>
      <div className="">
        <p className="w-24 truncate font-semibold text-sm">{user?.name}</p>
        <div className="w-24">
          <Mention username={user?.username} />
        </div>
      </div>
    </div>
  );
};

export default ProfileCrumb;
