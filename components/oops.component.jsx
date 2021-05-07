import Navbar from "./navbar.component";
const OopsPage = ({ msg }) => {
  return (
    <div id="parent" class={`parent oops text-white h-screen`}>
      <Navbar classextend="p-6 py-3 lg:py-6 md:py-6 lg:px-24 md:px-24" logintext="text-white" />
      <div
        id="child"
        class={`child p-8 err-msg text-5xl text-center w-full font-bold text-center mt-11/12`}
      >
        oops!
        <br />
        <div class="block font-medium text-xl mt-10">{msg || ""}</div>
      </div>
    </div>
  );
};

export default OopsPage;
