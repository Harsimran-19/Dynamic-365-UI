// src/components/VendorTable.tsx
import React, { useState } from 'react';

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

interface VendorTableProps {
  vendors: Vendor[];
  view: 'grid' | 'detail';
}

const VendorTable: React.FC<VendorTableProps> = ({ vendors, view }) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  if (view === 'grid') {
    return (
      <div className="border px-2 md:px-5 bg-gray-200 overflow-x-auto">
        <table className="min-w-full bg-gray-200">
          <thead>
            <tr className="bg- text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <th className="py-2 px-3">Vendor account</th>
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3 hidden md:table-cell">Vendor hold</th>
              <th className="py-2 px-3 hidden md:table-cell">Phone</th>
              <th className="py-2 px-3 hidden lg:table-cell">Extension</th>
              <th className="py-2 px-3 hidden lg:table-cell">Primary contact</th>
              <th className="py-2 px-3 hidden xl:table-cell">Group</th>
              <th className="py-2 px-3 hidden xl:table-cell">Currency</th>
              <th className="py-2 px-3 hidden xl:table-cell">Price group</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {vendors.map((vendor, index) => (
              <tr 
                key={index} 
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-white'} ${hoveredRow === index ? 'bg-blue-200' : ''}`}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="py-2 px-3 text-blue-600">{vendor.vendorAccount}</td>
                <td className="py-2 px-3">{vendor.name}</td>
                <td className="py-2 px-3 hidden md:table-cell">{vendor.vendorHold}</td>
                <td className="py-2 px-3 hidden md:table-cell">{vendor.phone}</td>
                <td className="py-2 px-3 hidden lg:table-cell">{vendor.extension}</td>
                <td className="py-2 px-3 hidden lg:table-cell">{vendor.primaryContact}</td>
                <td className="py-2 px-3 hidden xl:table-cell">{vendor.group}</td>
                <td className="py-2 px-3 hidden xl:table-cell">{vendor.currency}</td>
                <td className="py-2 px-3 hidden xl:table-cell">{vendor.priceGroup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="border-t border-gray-200 mx-2 md:mx-10">
        <div className="p-4 md:p-6 py-6 md:py-10 bg-white mb-5">
          <h2 className="text-xl font-semibold mb-4">General</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">IDENTIFICATION</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Vendor account</label>
                  <input type="text" value={vendors[0].vendorAccount} readOnly className="mt-1 py-1 w-full md:w-1/2 flex text-[#0078D4] px-2 bg-gray-200 block border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <input type="text" value="Organization" readOnly className="mt-1 py-1 w-full md:w-1/2 flex px-2 bg-gray-200 block border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" value={vendors[0].name} readOnly className="mt-1 py-1 w-full md:w-1/2 flex text-[#0078D4] px-2 bg-gray-200 block border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">OTHER INFORMATION</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Search name</label>
                  <input type="text" value={vendors[0].name} readOnly className="mt-1 py-1 w-full md:w-1/2 flex px-2 bg-gray-200 block border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Group</label>
                  <input type="text" value={vendors[0].group} readOnly className="mt-1 py-1 w-full md:w-1/2 flex text-[#0078D4] px-2 bg-gray-200 block border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">VENDOR COLLABORATION</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">Collaboration activation</label>
                <input type="text" value="Not Active" readOnly className="mt-1 py-1 w-full md:w-1/2 flex px-2 bg-gray-200 block border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 bg-white p-4 md:p-6 w-full overflow-x-auto">
          <h2 className="text-xl font-semibold">Addresses</h2>
          <table className="min-w-full mt-3 divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name or description</th>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primary</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vendors[0].name}</td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">711 Louisiana<br/>Houston, TX 77020<br/>USA</td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">Business</td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default VendorTable;