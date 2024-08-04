// // src/app/layout.tsx
// "use client"
// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
// import { useAppStore } from '../store/useAppStore';

// const inter = Inter({ subsets: ['latin'] });


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;

// }){
// const sidebarOpen = useAppStore((state) => state.sidebarOpen); 
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="flex flex-col min-h-screen bg-white">
//           <Navbar />
//           <div className="flex flex-1">
//             <Sidebar />
//             <main className={`flex-1 bg-gray-200 ${sidebarOpen ? 'lg:ml-64' : ''} transition-all duration-300`}>
//               {children}
//             </main>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }
// src/app/layout.tsx
"use client"
import { useEffect } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppStore } from '../store/useAppStore';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarOpen = useAppStore((state) => state.sidebarOpen);
  const closeSidebar = useAppStore((state) => state.closeSidebar);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) > 10) {
        closeSidebar();
        lastScrollY = scrollY > 0 ? scrollY : 0;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [closeSidebar]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-1 bg-white">
            <Sidebar />
            <main className={`flex-1 bg-gray-200 ${sidebarOpen ? 'lg:ml-64' : ''} transition-all duration-300`}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}