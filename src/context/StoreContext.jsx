import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { seedProducts } from '../data/products';

const StoreContext = createContext(null);

const load = (key, fallback) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : fallback;
};

export function StoreProvider({ children }) {
  const [products, setProducts] = useState(() => load('products', seedProducts));
  const [cart, setCart] = useState(() => load('cart', []));
  const [wishlist, setWishlist] = useState(() => load('wishlist', []));
  const [users, setUsers] = useState(() => load('users', []));
  const [currentUser, setCurrentUser] = useState(() => load('currentUser', null));
  const [darkMode, setDarkMode] = useState(() => load('darkMode', false));

  useEffect(() => localStorage.setItem('products', JSON.stringify(products)), [products]);
  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('wishlist', JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem('users', JSON.stringify(users)), [users]);
  useEffect(() => localStorage.setItem('currentUser', JSON.stringify(currentUser)), [currentUser]);
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.qty, 0),
    [cart]
  );

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateCartQty = (id, qty) => {
    if (qty <= 0) return setCart((prev) => prev.filter((item) => item.id !== id));
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)));
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const login = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) return false;
    setCurrentUser({ email: user.email, name: user.name, role: user.role || 'user' });
    return true;
  };

  const signup = (name, email, password) => {
    if (users.some((u) => u.email === email)) return false;
    const role = users.length === 0 ? 'admin' : 'user';
    const newUser = { name, email, password, role };
    setUsers((prev) => [...prev, newUser]);
    setCurrentUser({ name, email, role });
    return true;
  };

  const logout = () => setCurrentUser(null);

  const addProduct = (product) => setProducts((prev) => [{ ...product, id: crypto.randomUUID() }, ...prev]);
  const updateProduct = (id, updates) =>
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)));
  const deleteProduct = (id) => setProducts((prev) => prev.filter((p) => p.id !== id));

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        wishlist,
        users,
        currentUser,
        darkMode,
        setDarkMode,
        cartTotal,
        addToCart,
        updateCartQty,
        toggleWishlist,
        login,
        signup,
        logout,
        addProduct,
        updateProduct,
        deleteProduct,
        setCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
