// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
//             <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
//                 <div className="md:max-w-96">
//                     <img className="w-36 h-auto" src={assets.logo} alt="logo" />
//                     <p className="mt-6 text-sm">
//                         QuickShow is your one-stop destination for booking movie tickets online. Discover the latest releases, check showtimes, and reserve your seats instantly. Enjoy a seamless, secure, and hassle-free movie-going experience with QuickShow.
//                     </p>
//                 </div>
//                 <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
//                     <div>
//                         <h2 className="font-semibold mb-5">Company</h2>
//                         <ul className="text-sm space-y-2">
//                             <li><a href="#">Home</a></li>
//                             <li><a href="#">About Us</a></li>
//                             <li><a href="#">Contact Us</a></li>
//                             <li><a href="#">Privacy Policy</a></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h2 className="font-semibold mb-5">Get in touch</h2>
//                         <div className="text-sm space-y-2">
//                             <p>+91 8249095815</p>
//                             <p>biswajeetsahu09@gmail.com</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <p className="pt-4 text-center text-sm pb-5">
//                 Copyright {new Date().getFullYear()} © Biswajeet❤️. All Right Reserved.
//             </p>
//         </footer>
//   )
// }

// export default Footer

import React from 'react'
import { assets } from '../assets/assets'
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6' // Import icons

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
        <div className="md:max-w-96">
          <img className="w-36 h-auto" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            QuickShow is your one-stop destination for booking movie tickets online. Discover the latest releases, check showtimes, and reserve your seats instantly. Enjoy a seamless, secure, and hassle-free movie-going experience with QuickShow.
          </p>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91 8249095815</p>
              <p>biswajeetsahu09@gmail.com</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/in/biswajeet-sahu-318419235/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={22} className="text-blue-600 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/_mr_biswajeet/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={22} className="text-pink-500 hover:scale-110 transition-transform" />
              </a>
              <a href="https://x.com/Biswa42" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={22} className="text-black dark:text-white hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} © Biswajeet❤️. All Right Reserved.
      </p>
    </footer>
  )
}

export default Footer
