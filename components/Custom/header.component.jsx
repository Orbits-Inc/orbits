const Header = ({ title }) => {
  return (
    <div className="block">
      <div className="logo mt-2">
        <a href="/">
          <div class="flex">
            <img
              src="/favicon.png"
              alt="logo"
              width="250px"
              className="inline mr-3 w-10"
            />
            <div className="font-black mt-1 text-2xl mr-4">orbits</div>
            <div className="mt-2 mr-4 text-gray-300 font-semibold text-xl">
              |
            </div>
            <div className="mt-2 text-accent font-semibold text-lg">
              {title}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
