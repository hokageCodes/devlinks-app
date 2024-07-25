import React from 'react';
import Image from 'next/image';
import { FaLink, FaUser, FaEye } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] h-[126px] py-6 px-0 gap-2 opacity-100 mx-auto">
      <div className="w-full max-w-[1392px] h-[78px] p-4 gap-2 rounded-tl-[12px] flex justify-between items-center mx-auto bg-white">
        {/* Logo */}
        <div className="w-[52px] flex items-center space-x-2">
          <Image src="/assets/dev-logo.png" alt="Logo" width={32} height={32} className="xs:hidden" />
          <span className="hidden md:inline font-instrument-sans font-semibold text-[24px] leading-[32px] text-[#333333]">devlinks</span>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#links" className="flex items-center px-4 py-2 bg-[#EFEBFF] rounded">
            <Image src="/assets/link-icon.svg" alt="Links Icon" width={20} height={20} className="" />
            <span className="font-instrument-sans font-semibold text-[16px] leading-[24px] text-[#633CFF]">Links</span>
          </a>
          <a href="/profile" className="flex items-center px-4 py-2">
            <Image src="/assets/user-icon.svg" alt="Profile Icon" width={20} height={20} className="" />
            <span className="font-instrument-sans font-semibold text-[16px] leading-[24px] text-[#888888]">Profile Details</span>
          </a>
        </div>

        {/* Icons for mobile screens */}
        <div className="flex md:hidden justify-center items-center">
          <a href="#links" className="flex justify-center items-center p-2 w-[74px] h-[42px] rounded bg-[#EFEBFF]">
            <Image src="/assets/link-icon.svg" alt="Links Icon" width={20} height={20} className="" />
          </a>
          <a href="/profile" className="w-[74px] h-[42px] p-2 rounded">
            <Image src="/assets/user-icon.svg" alt="Profile Icon" width={20} height={20} className="" />
          </a>
        </div>

        {/* Call to Action */}
        <button className="hidden md:flex h-[46px] px-7 py-2 items-center gap-2 border-[1px] border-[#633CFF] rounded-[8px]">
          <span className="font-instrument-sans font-semibold text-[16px] leading-[24px] text-[#633CFF]">Preview</span>
        </button>

        {/* Mobile Preview Icon */}
        <button className="md:hidden p-2 border-[1px] border-[#633CFF] rounded-[8px]">
            <Image src="/assets/eye.svg" alt="Profile Icon" width={20} height={20} className="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
