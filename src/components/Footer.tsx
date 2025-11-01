// import Link from "next/link";

// export const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-12">
//       <div className="container grid md:grid-cols-2 gap-8">
//         <div>
//           <h3 className="text-xl font-bold text-white">Nexaform</h3>
//           <p className="mt-4 text-sm">
//             Simplifying Enterprise Asset Management with expertise, solutions,
//             and innovation.
//           </p>
//         </div>

//         <div className="flex space-x-8">
//           <div>
//             <h4 className="font-semibold text-white">Company</h4>
//             <ul className="mt-2 space-y-1 text-sm">
//               <li><Link href="/about">About</Link></li>
//               <li><Link href="/contact">Contact</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold text-white">Resources</h4>
//             <ul className="mt-2 space-y-1 text-sm">
//               <li><Link href="/">Solutions</Link></li>
//               <li><Link href="/">Products</Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 text-center text-xs text-gray-500">
//         © {new Date().getFullYear()} Nexaform. All rights reserved.
//       </div>
//     </footer>
//   );
// };
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'; // Added more icons

export const Footer = () => {
  return (
    // Dark background, increased padding, subtle top border for separation
    <footer id="contact-footer" className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-orange-600/30">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-8">

          {/* Column 1: Brand Info & Contact */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-extrabold text-orange-600 tracking-wider">
              NEXAFORM
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Technology Solutions
            </p>
            <p className="mt-4 text-xs">
              Simplifying Enterprise Asset Management with expertise and innovation.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Column 2: Asset Management Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 border-b border-gray-700 pb-1">Asset Management</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/am-link-1" className="hover:text-orange-500 transition-colors">EAM Strategy</Link></li>
              <li><Link href="/am-link-2" className="hover:text-orange-500 transition-colors">CMMS Implementation</Link></li>
              <li><Link href="/am-link-3" className="hover:text-orange-500 transition-colors">IoT Integration</Link></li>
            </ul>
          </div>

          {/* Column 3: Products & Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-3 border-b border-gray-700 pb-1">Products & Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-orange-500 transition-colors">All Products</Link></li>
              <li><Link href="/solutions" className="hover:text-orange-500 transition-colors">Industry Solutions</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Consulting Services</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Resources & Company */}
          <div>
            <h4 className="font-semibold text-white mb-3 border-b border-gray-700 pb-1">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-orange-500 transition-colors">Blog & News</Link></li>
              <li><Link href="/case-studies" className="hover:text-orange-500 transition-colors">Case Studies</Link></li>
              <li><Link href="/webinars" className="hover:text-orange-500 transition-colors">Webinars</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-3 border-b border-gray-700 pb-1">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-orange-600 flex-shrink-0" />
                <span>123 Tech Drive, Suite 400, Innovation City, CA 90210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <Link href="mailto:info@nexaform.com" className="hover:text-white transition-colors">info@nexaform.com</Link>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <Link href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} Nexaform. All Rights Reserved.
          </p>
          <div className="mt-2 md:mt-0 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};