
const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md py-6 px-8 rounded-b-2xl flex items-center justify-between border-b border-gray-700">
      <div className="flex items-center gap-3">
        <span className="text-3xl">☕</span>
        <h1 className="text-3xl font-bold tracking-wide">
          Cafe Finder
        </h1>
      </div>
      <div className="text-gray-500 text-sm font-medium">
        Find the best cafes near you
      </div>
    </header>
  );
};

export default Header;
