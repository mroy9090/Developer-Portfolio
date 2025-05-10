export const Header = () => {
  return (
    <div className="relative top-3 w-full z-50 flex justify-center px-4">
      <nav className="flex gap-1 px-3 py-1.5 border border-white/20 rounded-full bg-gray-900/80 backdrop-blur-md shadow-lg">
        <a href="#hero" className="nav-item">Home</a>
        <a href="#project" className="nav-item">Projects</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  );
};
