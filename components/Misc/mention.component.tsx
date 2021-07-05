interface Mention {
  username: string;
}

const Mention = ({ username }: Mention): JSX.Element => {
  return (
    <div className="truncate cursor-pointer text-xs font-semibold p-1 rounded-full text-accent hover:underline hover:text-secondary text-md w-auto hover:bg-blue-100 duration-300">
      @{username}
    </div>
  );
};

export default Mention;
