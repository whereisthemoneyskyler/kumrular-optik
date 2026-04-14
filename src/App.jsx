import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import CartSidebar from './components/CartSidebar';
import { supabase } from './supabaseClient';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('kumrular_admin') === 'true';
  });

  const [currentPage, setCurrentPage] = useState('home');
  const [shopFilter, setShopFilter] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch products from Supabase
  const fetchProducts = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id', { ascending: false });
    
    if (error) {
      console.error('Error fetching products:', error);
    } else {
      // Map database field 'image_url' back to our component's 'imageUrl'
      const mapped = data.map(p => ({
        ...p,
        imageUrl: p.image_url
      }));
      setProducts(mapped);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onLogin = (key) => {
    if (key === 'kumrular2026') {
      setIsLoggedIn(true);
      localStorage.setItem('kumrular_admin', 'true');
      setCurrentPage('admin');
      return true;
    }
    return false;
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('kumrular_admin');
    setCurrentPage('home');
  };

  const addProduct = async (newProduct) => {
    try {
      if (!newProduct.imageFile) {
        alert('Hata: Lütfen bir görsel seçin.');
        return;
      }

      // 1. Upload image to Supabase Storage
      const fileExt = newProduct.imageFile.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, newProduct.imageFile);

      if (uploadError) {
        console.error('Storage Upload Error:', uploadError);
        alert('Dosya Yükleme Hatası: ' + uploadError.message);
        return;
      }

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(filePath);

      // 3. Save to Database
      const { error: dbError } = await supabase
        .from('products')
        .insert([{
          name: newProduct.name,
          brand: newProduct.brand,
          category: newProduct.category,
          price: newProduct.price,
          image_url: publicUrl
        }]);
      
      if (dbError) {
        console.error('Supabase DB Error:', dbError);
        alert('Veritabanı Hatası: ' + dbError.message);
      } else {
        alert('Ürün başarıyla eklendi!');
        fetchProducts(); // Refresh list
      }
    } catch (err) {
      console.error('Unexpected Error:', err);
      alert('Beklenmedik bir hata oluştu: ' + err.message);
    }
  };

  const removeProduct = async (id) => {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
    
    if (error) {
      alert('Hata: ' + error.message);
    } else {
      fetchProducts(); // Refresh list
    }
  };

  const navigateToShop = (filter = 'All') => {
    setShopFilter(filter);
    setCurrentPage('shop');
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} onShopNavigate={navigateToShop} onAddToCart={addToCart} />;
      case 'shop':
        return <Shop initialFilter={shopFilter} onAddToCart={addToCart} products={products} />;
      case 'about':
        return <About />;
      case 'login':
        return <LoginPage onLogin={onLogin} />;
      case 'admin':
        return isLoggedIn ? (
          <AdminDashboard 
            products={products} 
            onAdd={addProduct} 
            onDelete={removeProduct} 
            onLogout={onLogout}
          />
        ) : <LoginPage onLogin={onLogin} />;
      default:
        return <Home onNavigate={setCurrentPage} onShopNavigate={navigateToShop} onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="app">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        cartCount={cart.length}
        onCartClick={() => setIsCartOpen(true)}
      />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onRemove={removeFromCart}
      />
    </div>
  );
}

export default App;
