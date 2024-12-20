import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Logo */}
        <div>
          <h2 className="text-xl font-bold mb-4"><img src="/Logo.png" alt="logo" /></h2>
          <p className="text-gray-400">
          whitepace was created for the new ways we live and work. We make a better workspace around the world
          </p>
        </div>

        {/* Column 2: Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Customer stories
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Guides & tutorial
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Media List
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Whitespace LLC.
      </div>
    </footer>
  );
};

export default Footer;
