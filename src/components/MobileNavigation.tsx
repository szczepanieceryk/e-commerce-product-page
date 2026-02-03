import React, { useEffect } from 'react';
import closeMenu from '../assets/images/icon-close.svg';

interface MobileNavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    const original = document.body.style.overflow;
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = original;
    }
    return () => {
      document.body.style.overflow = original;
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* overlay */}
      <div
        aria-hidden={!isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-200 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* sliding menu: takes 3/4 of viewport width */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
        className={`fixed top-0 left-0 h-full w-3/4 bg-white z-50 md:hidden transform transition-transform duration-200 shadow-lg
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6">
          <img
            src={closeMenu}
            alt="Close menu"
            className="mb-8 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />

          <nav>
            <ul className="flex flex-col">
              <li className="mb-4">
                <a href="#" className="font-semibold" onClick={() => setIsMenuOpen(false)}>
                  Collections
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="font-semibold" onClick={() => setIsMenuOpen(false)}>
                  Men
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="font-semibold" onClick={() => setIsMenuOpen(false)}>
                  Women
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="font-semibold" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="font-semibold" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default MobileNavigation;
