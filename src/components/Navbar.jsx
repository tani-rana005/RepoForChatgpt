import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function Navbar() {
  const { cart, wishlist, currentUser, logout, darkMode, setDarkMode } = useStore();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
      <div className="container-main flex items-center justify-between py-3">
        <Link to="/" className="text-xl font-extrabold text-blue-600">TechStore Pro</Link>
        <nav className="hidden items-center gap-5 md:flex">
          {['/', '/products', '/wishlist', '/cart', '/checkout', '/admin'].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-600' : 'text-slate-600 dark:text-slate-300'}`
              }
            >
              {['Home', 'Products', `Wishlist (${wishlist.length})`, `Cart (${cart.length})`, 'Checkout', 'Admin'][i]}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="btn-secondary" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light' : 'Dark'}
          </button>
          {currentUser ? (
            <button
              className="btn-secondary"
              onClick={() => {
                logout();
                navigate('/');
              }}
            >
              Logout
            </button>
          ) : (
            <Link className="btn-primary" to="/auth">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}
