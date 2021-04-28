const CustomInput = ({title,classextend,placeholder,type}) =>{
  return (
    <form class={`inp flex ${classextend}`}>
      <input class="outline-none rounded-none bg-transparent text-white font-medium mx-0 px-4 border-2 h-12 w-6/12 lg:w-4/12 md:4/12 border-white" placeholder={placeholder} type={type} required/>
      <button type="submit" class="cursor-pointer rounded-none outline-none bg-white text-black text-center font-bold text-xl px-5 h-12">{title}</button>
    </form>
  )
}

export default CustomInput;
