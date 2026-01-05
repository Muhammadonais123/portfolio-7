
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-white">Lumina</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Leading the way in premium e-commerce since 2024. Quality products, exceptional service, and global delivery.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition-colors">Facebook</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Categories</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Home & Living</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Beauty & Health</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-sm mb-4">Subscribe to get special offers and once-in-a-lifetime deals.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-slate-800 border-none rounded px-4 py-2 text-white w-full focus:ring-1 focus:ring-blue-500 outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; 2024 Lumina E-Commerce Inc. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
