import PostCollapsed from "../components/post_collapsed.component";

const TopPosts = ({ posts }) => {
  return (
    <div class="w-full lg:w-80 md:w-64 bg-accent h-screen p-1 pt-4 flex flex-col space-y-2 overflow-y-scroll">
      {posts.map((data) => {
        return (
          <>
            <PostCollapsed post={data} />
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default TopPosts;
