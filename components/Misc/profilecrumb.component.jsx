import Mention from "./mention.component";

function ProfileCrumb({ user }) {
  return (
    <div className="flex space-x-3">
      <div>
        <img src={user.display_picture} className="rounded-full w-10" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="font-semibold text-sm">{user.name}</div>
        <div>
          <Mention user={user} />
        </div>
      </div>
    </div>
  );
}

export default ProfileCrumb;
