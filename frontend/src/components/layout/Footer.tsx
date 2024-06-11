import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-red-700 text-white py-8 w-full  bottom-0 left-0 m-0 p">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Dating App</h2>
        </div>
        <div className="w-full md:w-2/3 flex flex-wrap justify-center md:justify-end">
          <div className="w-1/2 md:w-auto text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Features</h3>
            <ul className="mt-2">
              <li className="hover:text-gray-200"><a href="#match">Match</a></li>
              <li className="hover:text-gray-200"><a href="#chat">Chat</a></li>
              <li className="hover:text-gray-200"><a href="#discover">Discover</a></li>
              <li className="hover:text-gray-200"><a href="#profile">Profile</a></li>
            </ul>
          </div>
          <div className="w-1/2 md:w-auto text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">About Us</h3>
            <ul className="mt-2">
              <li className="hover:text-gray-200"><a href="#about">About</a></li>
              <li className="hover:text-gray-200"><a href="#team">Team</a></li>
              <li className="hover:text-gray-200"><a href="#careers">Careers</a></li>
              <li className="hover:text-gray-200"><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="w-1/2 md:w-auto text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-2">
              <li className="hover:text-gray-200"><a href="#faq">FAQ</a></li>
              <li className="hover:text-gray-200"><a href="#help">Help Center</a></li>
              <li className="hover:text-gray-200"><a href="#privacy">Privacy Policy</a></li>
              <li className="hover:text-gray-200"><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

