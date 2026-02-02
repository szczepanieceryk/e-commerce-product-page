import React from 'react';

const Desktopnavigation: React.FC = () => {
  return (
    <div className="hidden md:inline-block">
      <ul className="md:flex items-center">
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
  );
};

export default Desktopnavigation;
