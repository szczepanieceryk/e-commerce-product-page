import React from 'react';
import logo from '../assets/images/logo.svg';
import hamburgerIcon from '../assets/images/icon-menu.svg';
import cartIcon from '../assets/images/icon-cart.svg';
import userAvatar from '../assets/images/image-avatar.png';

interface NavigationProps {
  cartItemQunatity: number;
  isCartOpen: boolean;
  setIsCartOpen: (v: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isCartOpen, cartItemQunatity, setIsCartOpen }) => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto p-5 md:p-[2rem] shadow-sm">
        <div className="flex flex-wrap justify-between items-center align-items-cnter">
          <div>
            <img src={hamburgerIcon} alt="" className="inline mr-4 cursor-pointer md:hidden" />
            <img src={logo} alt="" className="inline h-auto w-[120px] cursor-pointer md:mr-4" />
            <div className="inline-block">
              <ul className="hidden md:flex items-center">
                <li className="mx-5">
                  <a href="" className="font-extralight">
                    Collections
                  </a>
                </li>
                <li className="mx-5">
                  <a href="" className="font-extralight">
                    Men
                  </a>
                </li>
                <li className="mx-5">
                  <a href="" className="font-extralight">
                    Women
                  </a>
                </li>
                <li className="mx-5">
                  <a href="" className="font-extralight">
                    About
                  </a>
                </li>
                <li className="mx-5">
                  <a href="" className="font-extralight">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="inline relative">
              {cartItemQunatity > 0 && (
                <span className="absolute -top-3 right-3 py-[2px] px-[5px] text-[8px] text-white bg-orange-500 rounded-md">
                  {cartItemQunatity}
                </span>
              )}
              <img
                src={cartIcon}
                alt=""
                className="inline mr-4 cursor-pointer"
                onClick={() => setIsCartOpen(!isCartOpen)}
              />
            </div>

            <img
              src={userAvatar}
              alt=""
              className="inline h-7 md:h-10 w-7 md:w-10 cursor-pointer border-2 rounded-2xl border-transparent hover:border-orange-500"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
