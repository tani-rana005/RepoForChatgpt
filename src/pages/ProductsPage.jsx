import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';

export default function ProductsPage() {
  const { products } = useStore();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [maxPrice, setMaxPrice] = useState(3000);
  const [minRating, setMinRating] = useState(0);

  const categories = ['All', ...new Set(products.map((p) => p.category))];
  const brands = ['All', ...new Set(products.map((p) => p.brand))];

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const q = search.toLowerCase();
        return (
          (p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)) &&
          (category === 'All' || p.category === category) &&
          (brand === 'All' || p.brand === brand) &&
          p.price <= maxPrice &&
          p.rating >= minRating
        );
      }),
    [products, search, category, brand, maxPrice, minRating]
  );

  return (
    <section className="container-main mt-8">
      <h1 className="text-3xl font-bold">All Products</h1>
      <div className="card mt-4 grid gap-3 md:grid-cols-5">
        <input className="rounded-lg border p-2 dark:bg-slate-800" placeholder="Search by name/brand" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select className="rounded-lg border p-2 dark:bg-slate-800" value={category} onChange={(e) => setCategory(e.target.value)}>{categories.map((c) => <option key={c}>{c}</option>)}</select>
        <select className="rounded-lg border p-2 dark:bg-slate-800" value={brand} onChange={(e) => setBrand(e.target.value)}>{brands.map((b) => <option key={b}>{b}</option>)}</select>
        <input type="number" className="rounded-lg border p-2 dark:bg-slate-800" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value || 0))} placeholder="Max Price" />
        <input type="number" className="rounded-lg border p-2 dark:bg-slate-800" value={minRating} onChange={(e) => setMinRating(Number(e.target.value || 0))} min="0" max="5" step="0.1" placeholder="Min Rating" />
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
