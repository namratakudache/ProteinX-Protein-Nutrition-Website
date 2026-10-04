import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Toast } from './components/Toast';

import { ProductsDropsScreen } from './screens/ProductsDropsScreen';
import { OurMissionScreen } from './screens/OurMissionScreen';
import { FlavorsLabScreen } from './screens/FlavorsLabScreen';
import { CommunityHypeScreen } from './screens/CommunityHypeScreen';
import { ClubXScreen } from './screens/ClubXScreen';

import { PRODUCTS } from './data/catalog';
import { Product, CartItem } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('products-and-drops');

  // Initial cart matching the user's screenshot "Cart (2)"
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[1], // Hyper-Whey Isolate
      selectedFlavor: 'Yuzu Matcha',
      quantity: 1
    },
    {
      product: PRODUCTS[0], // Cyber-Crunch Bar
      selectedFlavor: 'Berry Glaze',
      quantity: 1
    }
  ]);

  // Modal & Drawer states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product, flavor: string, quantity = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedFlavor === flavor
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prev, { product, selectedFlavor: flavor, quantity }];
    });
    setToastMessage(`DROPPED: ${product.name} (${flavor.toUpperCase()})`);
  };

  const handleUpdateQuantity = (productId: string, flavor: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedFlavor === flavor) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string, flavor: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedFlavor === flavor))
    );
    setToastMessage('ITEM REMOVED FROM CART');
  };

  const handleOrderCompleted = () => {
    setCartItems([]);
  };

  return (
    <div className="bg-[#121316] text-[#e3e2e6] min-h-screen flex flex-col font-['Space_Grotesk'] antialiased selection:bg-[#c8f300] selection:text-[#171e00]">
      {/* Fixed Sticky Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1 bg-[#121316]">
        {currentTab === 'products-and-drops' && (
          <ProductsDropsScreen
            onAddToCart={handleAddToCart}
            onOpenProductDetail={(prod) => setSelectedProductForDetail(prod)}
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onShowToast={(msg) => setToastMessage(msg)}
          />
        )}

        {currentTab === 'our-mission' && (
          <OurMissionScreen
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onShowToast={(msg) => setToastMessage(msg)}
          />
        )}

        {currentTab === 'flavors-lab' && (
          <FlavorsLabScreen
            onAddToCart={handleAddToCart}
            onShowToast={(msg) => setToastMessage(msg)}
          />
        )}

        {currentTab === 'community-and-hype' && (
          <CommunityHypeScreen
            onShowToast={(msg) => setToastMessage(msg)}
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'club-x' && (
          <ClubXScreen
            onShowToast={(msg) => setToastMessage(msg)}
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onShowToast={(msg) => setToastMessage(msg)}
        onNavigateTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onExploreProducts={() => {
          setCurrentTab('products-and-drops');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Full Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => setSelectedProductForDetail(prod)}
        onQuickAdd={(prod, flavor) => handleAddToCart(prod, flavor, 1)}
      />

      {/* Deep-dive Product Detail Modal */}
      <ProductDetailModal
        product={selectedProductForDetail}
        onClose={() => setSelectedProductForDetail(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Kinetic Feedback Toast */}
      <Toast
        message={toastMessage}
        onClear={() => setToastMessage(null)}
      />
    </div>
  );
}
