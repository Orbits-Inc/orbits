import ProfileCrumb from "../../components/Misc/profilecrumb.component";
import NothingFound from "./nothingFound.component";

function People({ people }: any): JSX.Element {
  if (people?.length > 0) {
    return (
      <div className="flex flex-col text-primary">
        <div className="mb-3 font-bold text-xl text-primary">People</div>
        {people?.map((data: any, key: any) => (
          <div
            key={key}
            className={`cursor-pointer hover:bg-gray-100 duration-300 p-3 pt-4 border-l border-r border-b border-gray-300 ${
              key === 0 ? "rounded-t-xl border-t" : "rounded-none"
            } ${key === people?.length - 1 ? "rounded-b-xl" : "rounded-none"}`}
          >
            <ProfileCrumb user={data} />
          </div>
        ))}
      </div>
    );
  }
  return <NothingFound />;
}

export default People;
