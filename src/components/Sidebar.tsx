// src/components/Sidebar.tsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useAppStore } from '../store/useAppStore';

const Sidebar: React.FC = () => {
  const sidebarOpen = useAppStore((state) => state.sidebarOpen);
  const [vendorsOpen, setVendorsOpen] = useState(false);

  const toggleVendors = () => setVendorsOpen(!vendorsOpen);
  const toggleSidebar = useAppStore((state) => state.toggleSidebar);
  return (
  //<aside className={`bg-white w-64 min-h-screen p-2 transition-all duration-300 fixed lg:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 border-r border-gray-200 z-50`}>
  <aside className={`bg-white w-64  h-[calc(100vh-4rem)] overflow-y-auto p-2 transition-all duration-300 ${sidebarOpen ? 'fixed left-0 z-40' : 'hidden'} lg:transition-none lg:block border-r border-gray-200`}>
      <nav className='text-black '>
        <div className="mb-4 ">
          <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-4">Favorites</h2>
          <ul>
            <li className="mb-1">
              <Link href="/vendors/all-purchase-orders" onClick={toggleSidebar} className="flex items-center text-sm text-blue-600 p-2 hover:bg-gray-100">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                All purchase orders
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/vendors/all-vendors" onClick={toggleSidebar}  className="flex items-center text-sm text-blue-600 p-2 hover:bg-gray-100">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                All vendors
              </Link>
            </li>
            {/* Add more favorite items here */}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-4">Recent</h2>
          <ul>
            <li className="mb-1">
              <button onClick={toggleVendors} className="flex items-center w-full text-left text-sm p-2 hover:bg-gray-100">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                Vendors
              </button>
              {vendorsOpen && (
                <ul className="ml-6">
                  <li>
                    <Link href="/vendors/all-vendors" className="block text-sm p-2 hover:bg-gray-100">
                      All vendors
                    </Link>
                  </li>
                  <li>
                    <Link href="/vendors/purchase-options" className="block text-sm p-2 hover:bg-gray-100">
                      Purchase options
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-4">Modules</h2>
          <ul>
            {['Accounts payable', 'Accounts receivable', 'Audit workbench', 'Budgeting', 'Cash and bank management', 'Common'].map((item, index) => (
              <li key={index} className="mb-1">
                <Link href="#" className="flex items-center text-sm p-2 hover:bg-gray-100">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;