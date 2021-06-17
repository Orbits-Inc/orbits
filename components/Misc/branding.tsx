import Image from "next/image";

const Branding = () => {
  return (
    <>
      <div className="flex mt-7">
        <div className="m-auto">
          <div className="flex items-center">
            <Image src="/favicon.png" width={40} height={40} />
            <div className="font-black mt-1 text-2xl">orbits</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branding;
