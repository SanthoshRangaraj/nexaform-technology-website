// import Link from 'next/link';
// import Image from 'next/image';
// import { ChevronDown } from 'lucide-react';

// // Define the structure for navigation items
// interface NavItem {
//   name: string;
//   href: string;
//   hasDropdown: boolean;
// }

// const navItems: NavItem[] = [
//   { name: 'Asset Management', href: '/asset-management', hasDropdown: false },
//   { name: 'Products', href: '/products', hasDropdown: false },
//   { name: 'Solutions', href: '/solutions', hasDropdown: false },
//   { name: 'Industries', href: '/industries', hasDropdown: false },
//   { name: 'Resources', href: '/resources', hasDropdown: false },
//   { name: 'Company', href: '/company', hasDropdown: false },
// ];

// const Navbar = () => {
//   return (
//     // Fixed dark header with a horizontal padding for desktop view
//     <header className="sticky top-0 z-50 bg-white shadow-lg">
//       <nav className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        
//         {/* Logo Section */}
//         <Link href="/" className="flex flex-col">
//           <div className="flex items-center space-x-2">
//             {/* Placeholder for the blue/orange lightning design. Use an <Image> component here if it's an actual asset. */}
//             {/* <div className="w-4 h-8 bg-gradient-to-br from-blue-700 to-orange-600 rounded-sm transform skew-x-[-15deg] opacity-75"></div>
            
//             <span className="text-3xl font-extrabold text-orange-600 tracking-wider">
//               NEXAFORM
//             </span> */}
//              <Image
//               src="/assets/nexaform-Logo.png"
//               alt="NEXAFORM Logo Icon"
//               width={150} // The width in pixels, matching the old w-4 (16px)
//               height={150} // The height in pixels, matching the old h-8 (32px)
//               className="transform skew-x-[-15deg]" // Optional: Keep the skew effect if desired
//             />
//           </div>
//           {/* <span className="text-[10px] font-medium text-gray-400 mt-[-4px] ml-6">
//             TECHNOLOGY SOLUTIONS
//           </span> */}
//         </Link>

//         {/* Navigation Links - Hidden on mobile, visible on large screens */}
//         <div className="hidden lg:flex items-center space-x-6" >
//           {navItems.map((item) => (
//             <div key={item.name} className="relative group">
//               <Link
//                 href={item.href}
//                 className="flex items-center text-deep-blue text-base font-medium transition duration-200 hover:text-orange-500"
//               >
//                 {item.name}
//                 {item.hasDropdown && (
//                   <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
//                 )}
//               </Link>
//               {/* Dropdown Placeholder (Hidden by default) */}
//               {/* Add your actual dropdown menu structure here */}
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="hidden lg:block">
//           <Link href="/contact" passHref>
//             <button className="px-6 py-3 rounded-xl text-white text-lg font-semibold bg-orange-600 transition duration-300 ease-in-out shadow-lg shadow-orange-700/50 hover:bg-orange-700">
//               Let's Talk
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Menu Button - You'll need to implement the mobile menu drawer */}
//         {/* <div className="lg:hidden">
//           <button className="text-white">
//             <Menu className="w-6 h-6" />
//           </button>
//         </div> */}

//       </nav>
//     </header>
//   );
// };

// export default Navbar;

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // For checking current page
import { ChevronDown, Menu, X } from 'lucide-react';

// Define the structure for navigation items
interface NavItem {
  name: string;
  href: string;
  hasDropdown: boolean;
}

// Update the 'Asset Management' href to point to the homepage anchor ID
const navItems: NavItem[] = [
  { name: 'Asset Management', href: '/#asset-lifecycle', hasDropdown: false },
  { name: 'Products', href: '/#Hero', hasDropdown: false },
  { name: 'Solutions', href: '/#Hero', hasDropdown: false },
  { name: 'Industries', href: '/#Hero', hasDropdown: false },
  { name: 'Resources', href: '/#Hero', hasDropdown: false },
  { name: 'Company', href: '/#Hero', hasDropdown: false },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Custom function to handle internal anchor links for smooth scrolling
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if the link is an anchor link AND we are on the homepage
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const targetId = href.substring(2); // Remove '/#'
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        // Close the mobile menu after clicking
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    } else if (isMenuOpen) {
      // If we are navigating to a new page (e.g., /products), just close the menu
      setIsMenuOpen(false);
    }
  };


  return (
    <header className="sticky top-0 z-100 bg-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        
        {/* Logo Section */}
        <Link href="/" className="flex flex-col">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/nexaform-Logo.png"
              alt="NEXAFORM Logo Icon"
              width={150} 
              height={150} 
              className="w-auto h-10 object-contain" // Set visible size (e.g., h-10)
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6" >
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                // Call the custom handler for desktop links
                onClick={(e) => handleLinkClick(e, item.href)} 
                className="flex items-center text-gray-800 text-base font-medium transition duration-200 hover:text-orange-500"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <Link href="/#Contact" passHref>
            <button className="px-6 py-3 rounded-xl text-white text-lg font-semibold bg-orange-600 transition duration-300 ease-in-out shadow-lg shadow-orange-700/50 hover:bg-orange-700">
              Let&apos;s Talk
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isMenuOpen ? (
              <X className="w-7 h-7 text-orange-600" />
            ) : (
              <Menu className="w-7 h-7 text-gray-800" />
            )}
          </button>
        </div>

      </nav>

      {/* Mobile Menu Drawer/Sidebar */}
      <div 
        className={`fixed inset-0 top-[70px] bg-white transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden z-40`}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          {/* Mobile Navigation Links */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)} // Call custom handler for mobile links
              className="text-xl font-medium text-gray-800 hover:text-orange-600 transition duration-200 w-full text-center py-3 border-b border-gray-100"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile CTA Button */}
          <Link href="/#Contact" passHref className="mt-4 pt-4 border-t border-gray-200 w-full text-center">
            <button onClick={toggleMenu} className="px-8 py-3 rounded-lg text-white text-lg font-semibold bg-orange-600 w-3/4 transition duration-300 hover:bg-orange-700 shadow-md">
              Let&apos;s Talk
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;