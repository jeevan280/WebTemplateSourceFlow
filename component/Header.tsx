'use client';
import { FC, useState } from 'react';
import { FaArrowAltCircleDown, FaBars, FaTimes } from 'react-icons/fa';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['For jobseekers', 'For clients', 'Sectors', 'Resources'];

  const linkStyle = 'flex cursor-pointer items-center gap-1 transition-colors hover:text-[#064EA4]';
  const buttonBaseStyle = 'rounded-full px-4 py-2 font-semibold transition';

  return (
    <header className="w-full border-b-4 border-gray-100 bg-white shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="font-[Consolas] text-xl font-bold whitespace-nowrap text-[#064EA4]">
          Software Recruitment co.
        </div>

        <nav className="hidden items-center gap-6 text-sm text-gray-800 md:flex lg:gap-8">
          {navItems.map((item) => (
            <div key={item} className={linkStyle}>
              <span>{item}</span>
              <FaArrowAltCircleDown style={{ color: '#064EA4' }} size={12} className="ml-1" />
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 text-sm md:flex">
          <button
            className={`${buttonBaseStyle} cursor-pointer bg-[#FCDF69] text-gray-800 hover:bg-yellow-200`}
          >
            Upload CV
          </button>
          <button
            className={`${buttonBaseStyle} cursor-pointer bg-[#F99D76] text-gray-800 hover:bg-orange-200`}
          >
            Contact us
          </button>
        </div>

        <button
          className="p-2 text-2xl text-[#064EA4] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute z-50 w-full border-t border-gray-100 bg-white shadow-lg`}
      >
        <div className="flex flex-col space-y-3 p-4">
          {navItems.map((item) => (
            <div
              key={item}
              className={`${linkStyle} border-b border-gray-100 p-2 text-base text-gray-800 last:border-b-0`}
            >
              <span>{item}</span>
              <FaArrowAltCircleDown style={{ color: '#064EA4' }} size={14} className="mt-0.5" />
            </div>
          ))}

          <div className="flex flex-col space-y-3 pt-4">
            <button className={`${buttonBaseStyle} bg-[#FCDF69] text-gray-800 hover:bg-yellow-200`}>
              Upload CV
            </button>
            <button className={`${buttonBaseStyle} bg-[#F99D76] text-gray-800 hover:bg-orange-200`}>
              Contact us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
