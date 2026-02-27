import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';

export default function WishlistPage() {
  const { products, wishlist } = useStore();
  const wishedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <section className="container-main mt-8">
      <h1 className="text-3xl font-bold">Wishlist</h1>
      {!wishedProducts.length ? <p className="mt-4">No products in wishlist yet.</p> : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {wishedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </section>
  );
}
