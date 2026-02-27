import { useParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { products, addToCart, toggleWishlist, wishlist } = useStore();
  const product = products.find((p) => p.id === id);

  if (!product) return <section className="container-main mt-8">Product not found.</section>;

  return (
    <section className="container-main mt-8 grid gap-8 md:grid-cols-2">
      <img src={product.image} alt={product.name} className="h-96 w-full rounded-2xl object-cover" />
      <div>
        <p className="text-sm text-slate-500">{product.brand} • {product.category}</p>
        <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
        <p className="mt-2 text-2xl font-extrabold text-blue-600">${product.price}</p>
        <p className="mt-4">{product.description}</p>
        <p className="mt-3">⭐ {product.rating}</p>
        <div className="mt-6 flex gap-3">
          <button className="btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
          <button className="btn-secondary" onClick={() => toggleWishlist(product.id)}>{wishlist.includes(product.id) ? 'Remove Wishlist' : 'Add Wishlist'}</button>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Reviews</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">
            {product.reviews.map((review) => <li key={review}>{review}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
