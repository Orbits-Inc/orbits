interface Page404 {
  message: string;
}

const Page404 = ({ message }: Page404): JSX.Element => {
  return (
    <div id="parent" className="parent oops text-white h-screen">
      <div
        id="child"
        className="child p-8 err-msg text-5xl text-center w-full font-bold mt-11/12"
      >
        Oops!
        <br />
        <div className="block font-medium text-xl mt-10">{message || ""}</div>
      </div>
    </div>
  );
};

export default Page404;
