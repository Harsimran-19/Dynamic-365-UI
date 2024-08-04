// src/app/layout.tsx
"use client"
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppStore } from '../store/useAppStore';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Finance Platform',
//   description: 'A sample finance platform UI',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;

}){
const sidebarOpen = useAppStore((state) => state.sidebarOpen); 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex bg-gray-200 w-screen border">
          <Sidebar />
          <div className={`flex-1  ${sidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
            {children}</div>
        </div>
      </body>
    </html>
  );
}