import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const { products } = useStore();
  return (
    <>
      <section className="container-main mt-8 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white">
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Discover Next-Gen Laptops & Digital Gadgets</h1>
        <p className="mt-4 max-w-2xl text-lg text-blue-100">Upgrade your setup with curated devices for work, gaming, and creativity.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/products" className="rounded-xl bg-white px-5 py-3 font-semibold text-blue-700">Shop Now</Link>
          <Link to="/products" className="rounded-xl border border-white px-5 py-3 font-semibold">View Products</Link>
        </div>
      </section>

      <section className="container-main mt-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Trending Products</h2>
          <Link to="/products" className="text-blue-600">See all</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </>
  );
}
