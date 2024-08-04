// src/app/vendors/all-vendors/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import VendorTable from '../../../components/VendorTable';

interface Vendor {
  vendorAccount: string;
  name: string;
  vendorHold: string;
  phone: string;
  extension: string;
  primaryContact: string;
  group: string;
  currency: string;
  priceGroup: string;
}

const AllVendorsPage: React.FC = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<'grid' | 'detail'>('grid');

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await fetch('/api/vendors/all-vendors');
        if (!response.ok) {
          throw new Error('Failed to fetch vendors');
        }
        const data = await response.json();
        setVendors(data);
        setIsLoading(false);
      } catch (err) {
        setError('Error fetching vendors. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchVendors();
  }, []);

  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className=" w-screen min-h-screen text-black lg:w-full bg-gray-200">
<div className="bg-[#0078D4] text-white mb-4 ">
  <div className="flex  lg:font-normal items-start  lg:items-center justify-start flex-col lg:flex-row space-x-2 px-2">
    <div className='flex'>
    <button className="px-3 py-1  hover:bg-blue-700">Edit</button>
    <button className="px-3 py-1  hover:bg-blue-700">+ New</button>
    <button className="px-3 py-1  hover:bg-blue-700">Delete</button>
    <button className="px-3 py-1  hover:bg-blue-700">VENDOR</button>
    </div>
    <div className=''>
    <button className="px-1 lg:px-3 py-1 hover:bg-blue-700">Procurement</button>
    <button className="px-1 lg:px-3 py-1 hover:bg-blue-700">Invoice</button>
    <button className="px-1 lg:px-3 py-1 hover:bg-blue-700">General</button>
    <button className="px-1 lg:px-3 py-1 lg:bg-white lg:text-[#0078D4] hover:bg-gray-200">OPTIONS</button>
    </div>
    <div className="ml-auto hidden lg:block">
      <button className="px-3 py-1 hover:bg-blue-700 ">
        <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  </div>
</div>
<div className="bg-gray-200 mb-2 lg:mb-4 lg:p-2 text-sm overflow-x-auto">
  <div className="flex lg:space-x-8 mx-2 lg:mx-10">
          <div className='hidden md:block'>
            <p className="font-semibold">PERSONALIZE</p>
            <button className="text-gray-700  mt-2">Always open for editing</button>
            <button className="text-gray-700 mt-2 block">Personalize this form</button>
            <button className="text-gray-700 mt-2 block">Add to workspace</button>
          </div>
          <div className='black border black'></div>
          <div className='hidden md:block'>
            <p className="font-semibold">PAGE OPTIONS</p>
            <button className="text-gray-700 mt-2">Security diagnostics</button>
            <button className="text-gray-700 block mt-2">Advanced Filter/Sort</button>
            </div>
            <div className='mt-4'>
              <button className='text-gray-700 mt-3 ml-1'>Record Info</button>
            <button className="text-blue-600 mt-2 block">
              <select
                className="text-black flex bg-gray-200"
                value={view}
                onChange={(e) => setView(e.target.value as 'grid' | 'detail')}
              >
                <option value="grid">Change View</option>
                <option value="grid">Grid view</option>
                <option value="detail">Detail view</option>
              </select>
            </button>
          </div>
          <div className='black border'></div>
          <div className='hidden lg:block'>
            <p className="font-semibold">SHARE</p>
            <button className="text-gray-700 mt-2">Get a link</button>
            <button className="text-gray-700 mt-2 block">Create alert rule</button>
            <button className="text-gray-700 mt-2 block">Manage my alerts</button>
          </div>
        


  </div>
</div>

<hr className="h-px mx-2 lg:mx-10 bg-gray-200 border-0 dark:bg-gray-400" />

<div className="mt-2 ml-2 mb-5 pt-5 border pl-4 w-full bg-gray-200">
  {view === 'grid' ? (
    <div>
      <h2 className="text-[#0078D4] text-sm font-semibold mb-2">ALL VENDORS</h2>
      <input type="text" placeholder="Filter" className="border p-2 w-1/2 lg:w-64" />
    </div>
  ) : (
    <h2 className="text-[#0078D4] text-sm font-semibold mb-2 ml-4">ALL VENDORS</h2>
  )}
</div>
<VendorTable vendors={vendors} view={view} />
</div>
  );
};

export default AllVendorsPage;