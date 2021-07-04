import { tags } from "../../utils/popular_tags";

interface Tag {
  tag: string;
  noColor?: boolean;
}

const Tag = ({ tag, noColor }: Tag) => {
  return (
    <button
      style={{
        outline: "none",
        backgroundColor:
          noColor || !Object.keys(tags).includes(tag) ? "#EAEAEA" : tags[tag],
      }}
      className={`${
        noColor || !Object.keys(tags).includes(tag)
          ? "text-black-700"
          : "text-white-default"
      } rounded-md text-xs font-semibold px-3 duration-300 transform hover:scale-105 py-1`}
    >
      #{tag}
    </button>
  );
};

export default Tag;
