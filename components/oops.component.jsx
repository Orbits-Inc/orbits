import Navbar from "./navbar.component"
const OopsPage = ({msg}) =>{
  return (
    <div id="parent" class={`oops text-white h-screen`}>
      <Navbar classextend="p-6 lg:px-20 md:px-20" logintext="text-white"/>
      <div id="child" class={`p-8 err-msg text-5xl text-center w-full font-bold text-center mt-11/12`}>
      oops!<br/>
      <div class="block font-medium text-xl mt-10">{msg || ""}</div>
      </div>
    </div>
  )
}

export default OopsPage;
