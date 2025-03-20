import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#07292F] w-full h-auto py-6 mt-5">
      <div className="flex flex-col items-center text-center space-y-2 md:flex-row md:justify-between md:space-y-0 mx-3">
        <div>
          <img src="FLogo.svg" alt="Wizia Logo" className="w-24" />
        </div>
        <div className="text-gray-300 text-sm">
          Copyright &copy; {new Date().getFullYear()} Wizia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
