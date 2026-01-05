
import React, { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  onSearch: (query: string) => void;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onSearch, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <span className="text-2xl font-bold text-slate-800 hidden sm:block">Lumina</span>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search products..."
              className="w-full bg-slate-100 border-none rounded-full py-2 px-6 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              onChange={(e) => onSearch(e.target.value)}
            />
            <svg className="absolute right-4 top-2.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenCart}
            className="relative p-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger Mobile */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-fade-in shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <input 
              type="text" 
              placeholder="Search products..."
              className="w-full bg-slate-100 border-none rounded-full py-2 px-6 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => onSearch(e.target.value)}
            />
            <div className="flex flex-col gap-3 font-medium text-slate-700">
              <a href="#" className="hover:text-blue-600">Home</a>
              <a href="#products" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Shop</a>
              <a href="#" className="hover:text-blue-600">About</a>
              <a href="#" className="hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
