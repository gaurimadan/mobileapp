import React from 'react';
import { FiX } from 'react-icons/fi';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-20 transform transition-transform duration-300 ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto p-4">
        <div className="flex justify-end">
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
            <FiX className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <nav className="py-4">
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500 text-lg font-medium">MARKETWATCH</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500 text-lg font-medium">EXCHANGE FILES</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500 text-lg font-medium">PORTFOLIO</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500 text-lg font-medium">FUNDS</a>
         
        </nav>
       
      </div>
    </div>
  );
};

export default MobileSidebar;