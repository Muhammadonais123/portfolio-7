
import React from 'react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove }) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Your Shopping Bag</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-slate-400">
                <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-lg">Your cart is empty</p>
                <button onClick={onClose} className="mt-4 text-blue-600 font-bold hover:underline">Start Shopping</button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.image} className="w-20 h-24 object-cover rounded-lg bg-slate-50" />
                  <div className="flex-grow">
                    <h3 className="font-bold text-slate-800 line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 mb-2">${item.price} x {item.quantity}</p>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-xs text-red-500 hover:underline font-medium"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="font-bold text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <div className="flex items-center justify-between mb-6">
                <span className="text-slate-600 font-medium">Subtotal</span>
                <span className="text-2xl font-extrabold text-slate-900">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
                Checkout Now
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">Taxes and shipping calculated at checkout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
