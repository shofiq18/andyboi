'use client';

import React from 'react';
import { Mail, Phone, MapPin, EqualApproximatelyIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="container mx-auto px-4">
        <div className='flex justify-between'>
          <div>
            <div className="text-2xl font-bold mb-2">M&W</div>
            <div className="text-xs text-teal-400 mb-4">MOBILE AUTO MALL</div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">🌐</span>
              <select className="bg-transparent text-sm text-gray-400 border border-gray-700 rounded px-2 py-1">
                <option>Eng</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <p className="text-gray-400 text-sm mb-4">
              Your one-stop shop for buying and selling cars.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition">
                f
              </a>
              <a href="#" className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition">
                t
              </a>
              <a href="#" className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition">
                in
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Sell a Car</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                example@gmail.com
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                (480) 555-0120
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                123 Auto Lane, Carville, USA
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm">Get the latest deals and news.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 p-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>

        <div className="border-t border-gray-800 p-4">
          <div className="">
            <div className="text-base text-gray-400 text-center mb-4 md:mb-0">
              © 2024 M & W Mobile Autoent. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
