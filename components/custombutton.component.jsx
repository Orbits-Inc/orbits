const CustomButton = ({title,classextend}) =>{
  return (<button class={`outline-none bg-white duration-500 rounded-none text-black font-bold p-1 px-4 ${classextend || ""}`}>{title}</button>)
}

export default CustomButton;
