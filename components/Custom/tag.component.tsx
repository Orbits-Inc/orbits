import { tags } from "../../utils/popular_tags";

const Tag = ({ tag }) => {
  return (
    <button
      style={{
        outline: "none",
        backgroundColor: Object.keys(tags).includes(tag) ? tags[tag] : "gray",
      }}
      className={`rounded-md text-white text-xs font-semibold px-3 duration-300 transform hover:scale-105 py-1`}
    >
      #{tag}
    </button>
  );
};

export default Tag;
