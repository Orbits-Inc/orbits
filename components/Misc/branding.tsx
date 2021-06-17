import Image from "next/image";

const Branding = () => {
  return (
    <>
      <div className="flex">
        <div className="m-auto">
          <div className="flex items-center">
            <Image src="/logo.png" width={40} height={40} />
            <div className="font-black mt-1 text-2xl">orbits</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branding;
