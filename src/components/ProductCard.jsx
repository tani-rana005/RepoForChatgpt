import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function ProductCard({ product }) {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const wished = wishlist.includes(product.id);

  return (
    <div className="card group">
      <img src={product.image} alt={product.name} className="h-44 w-full rounded-xl object-cover" />
      <div className="mt-3 space-y-1">
        <p className="text-xs text-slate-500 dark:text-slate-400">{product.brand} • {product.category}</p>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="font-bold text-blue-600">${product.price}</p>
        <p className="text-sm">⭐ {product.rating}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <Link to={`/products/${product.id}`} className="btn-secondary w-full text-center">View</Link>
        <button onClick={() => addToCart(product)} className="btn-primary w-full">Add to Cart</button>
      </div>
      <button
        className="mt-2 text-sm font-medium text-pink-500"
        onClick={() => toggleWishlist(product.id)}
      >
        {wished ? '♥ Remove Wishlist' : '♡ Add Wishlist'}
      </button>
    </div>
  );
}
