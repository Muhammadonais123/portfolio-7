
import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import { Product, CartItem, Category } from './types';
import { generateProducts } from './constants';

const App: React.FC = () => {
  const [products] = useState<Product[]>(() => generateProducts(200));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === Category.ALL || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Optional: Open cart briefly to show feedback
    // setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const categories = Object.values(Category);

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar 
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} 
        onSearch={setSearchQuery} 
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <main className="flex-grow">
        <Hero />

        {/* Product Grid Section */}
        <section id="products" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Our Collection</h2>
                <p className="text-slate-500">Showing {filteredProducts.length} premium items</p>
              </div>
              
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                      selectedCategory === cat 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={handleAddToCart} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-slate-100 rounded-2xl">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">No items found</h3>
                <p className="text-slate-500">Try adjusting your search or category filters.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory(Category.ALL);}}
                  className="mt-6 text-blue-600 font-bold hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Free Global Shipping', desc: 'On all orders over $150. Fast, reliable delivery to 150+ countries.', icon: '🌍' },
              { title: 'Secure Payment', desc: 'We utilize bank-level encryption to ensure your data is always safe.', icon: '🔒' },
              { title: 'Premium Support', desc: 'Our customer care specialists are available 24/7 for any inquiries.', icon: '💬' }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;
