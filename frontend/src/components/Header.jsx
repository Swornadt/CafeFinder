
const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md py-6 px-8 rounded-b-2xl flex items-center justify-between border-b border-gray-700">
      <div className="flex items-center gap-3">
        <img src="./coffee.png" className="w-10 h-10"/>
        <h1 className="text-2xl font-bold tracking-wide">
          Mapetite
        </h1>
      </div>
      <div className="text-gray-500 text-sm font-medium">
        Quick Places Nearby to Eat!
      </div>
    </header>
  );
};

export default Header;
