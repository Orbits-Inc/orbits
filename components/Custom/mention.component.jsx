const Mention = ({ author }) => {
  return (
    <div className="cursor-pointer text-sm font-semibold p-1 rounded-full text-accent hover:underline hover:text-secondary text-md w-auto hover:bg-blue-100 duration-300">
      @{author?.username}
    </div>
  );
};

export default Mention;
