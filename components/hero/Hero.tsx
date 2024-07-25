"use client"
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [links, setLinks] = useState<string[]>([]);

  const handleAddLink = () => {
    setLinks([...links, '']);
  };

  const handleLinkChange = (index: number, value: string) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const handlePlatformChange = (index: number, value: string) => {
    // Handle platform change if needed
  };

  return (
    <div className="flex w-full max-w-[1440px] mx-auto py-6 gap-8 h-[858px] p-6">
      {/* Left Side */}
      <div className="relative flex flex-col w-[560px] h-full p-6 gap-2 border border-gray-300 bg-gray-50 rounded-tl-[12px] overflow-hidden">
        {/* Phone Frame */}
        <div className="relative mx-auto border-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
          <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
            {/* Placeholder for the phone content */}
            <div className="w-[100%] h-[100%] flex flex-col items-center bg-gray-100">
              {links.map((link, index) => (
                <div key={index} className="w-[249.53px] h-[160px]">
                  <img src="/mnt/data/Frame 260 (1).png" alt="Link content" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col w-full max-w-[808px] h-full border border-gray-300 bg-gray-50">
        {/* Top Section */}
        <div className="w-full h-[80%] p-10 flex flex-col items-start gap-8 text-left border-b border-gray-300">
          <h1 className="font-sans text-3xl font-bold leading-[48px] text-[#333333]">Customize your links</h1>
          <p className="font-sans text-lg font-normal leading-[24px] text-[#737373]">
            Add/edit/remove links below and then share all your profiles with the world!
          </p>
          <button
            onClick={handleAddLink}
            className="w-full max-w-[728px] h-12 px-8 py-3 border border-[#633CFF] text-[#633CFF] font-sans text-lg font-semibold leading-[24px] rounded-tl-lg"
          >
            + Add new link
          </button>
          <div className="flex flex-col items-center gap-6 w-full max-w-[728px] h-auto bg-opacity-0 mt-6 overflow-y-auto" style={{ maxHeight: '400px' }}>
            {links.length === 0 && (
              <>
                <div className="w-[249.53px] h-[160px] bg-gray-200"></div>
                <h2 className="font-sans text-3xl font-bold leading-[48px] text-[#333333]">Let's get you started</h2>
                <p className="font-sans text-lg font-normal leading-[24px] text-[#737373] text-center">
                  Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!
                </p>
              </>
            )}
            {links.map((link, index) => (
              <div key={index} className="w-full max-w-[728px] h-auto p-4 border border-gray-300 bg-white rounded-lg flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-lg font-semibold leading-[24px] text-[#333333]">Link #{index + 1}</span>
                  <button
                    onClick={() => setLinks(links.filter((_, i) => i !== index))}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
                <label className="flex items-center gap-4">
                  <span className="font-sans text-lg font-normal leading-[24px] text-[#737373]">Platform</span>
                  <select
                    onChange={(e) => handlePlatformChange(index, e.target.value)}
                    className="w-full max-w-[200px] p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="GitHub">GitHub</option>
                    {/* Add more options as needed */}
                  </select>
                </label>
                <label className="flex items-center gap-4">
                  <span className="font-sans text-lg font-normal leading-[24px] text-[#737373]">Link</span>
                  <input
                    type="text"
                    value={link}
                    onChange={(e) => handleLinkChange(index, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="e.g. https://www.github.com/username"
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom Section */}
        <div className="w-full h-[20%] p-6 flex justify-end items-center">
          <button className="w-[91px] h-12 px-8 py-3 bg-[#BEADFF] text-white rounded opacity-50" disabled>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
