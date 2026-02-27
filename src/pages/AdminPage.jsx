import { useState } from 'react';
import { useStore } from '../context/StoreContext';

const initialForm = {
  name: '',
  brand: '',
  category: 'Laptop',
  price: 0,
  rating: 4,
  image: '',
  description: '',
};

export default function AdminPage() {
  const { currentUser, products, addProduct, deleteProduct, updateProduct } = useStore();
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState('');

  if (!currentUser || currentUser.role !== 'admin') {
    return <section className="container-main mt-8">Admin access only. Signup first user to become admin.</section>;
  }

  const submit = (e) => {
    e.preventDefault();
    const payload = { ...form, price: Number(form.price), rating: Number(form.rating), reviews: [] };
    if (editingId) {
      updateProduct(editingId, payload);
      setEditingId('');
    } else addProduct(payload);
    setForm(initialForm);
  };

  return (
    <section className="container-main mt-8 grid gap-7 md:grid-cols-2">
      <form onSubmit={submit} className="card space-y-2">
        <h1 className="text-2xl font-bold">{editingId ? 'Update Product' : 'Add Product'}</h1>
        {Object.keys(initialForm).map((key) => (
          <input
            key={key}
            required={key !== 'image'}
            className="w-full rounded-lg border p-2 dark:bg-slate-800"
            placeholder={key}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        ))}
        <button className="btn-primary w-full">{editingId ? 'Update' : 'Add'} Product</button>
      </form>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Manage Products</h2>
        {products.map((p) => (
          <div key={p.id} className="card flex items-center justify-between gap-2">
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-slate-500">${p.price}</p>
            </div>
            <div className="flex gap-2">
              <button className="btn-secondary" onClick={() => { setForm({ ...p }); setEditingId(p.id); }}>Edit</button>
              <button className="rounded-xl bg-red-500 px-4 py-2 font-semibold text-white" onClick={() => deleteProduct(p.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
