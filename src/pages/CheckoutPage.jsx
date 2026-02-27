import { useState } from 'react';
import { useStore } from '../context/StoreContext';

export default function CheckoutPage() {
  const { cartTotal, setCart } = useStore();
  const [placed, setPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaced(true);
    setCart([]);
  };

  return (
    <section className="container-main mt-8">
      <h1 className="text-3xl font-bold">Checkout</h1>
      {placed ? <p className="mt-4 text-green-600">Order placed successfully!</p> : (
        <form onSubmit={handleSubmit} className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="card space-y-3">
            <h2 className="text-xl font-semibold">Billing Details</h2>
            <input required className="w-full rounded-lg border p-2 dark:bg-slate-800" placeholder="Full Name" />
            <input required className="w-full rounded-lg border p-2 dark:bg-slate-800" placeholder="Email" type="email" />
            <input required className="w-full rounded-lg border p-2 dark:bg-slate-800" placeholder="Address" />
            <input required className="w-full rounded-lg border p-2 dark:bg-slate-800" placeholder="City" />
          </div>
          <div className="card space-y-3">
            <h2 className="text-xl font-semibold">Payment</h2>
            <input required className="w-full rounded-lg border p-2 dark:bg-slate-800" placeholder="Card Number" />
            <div className="grid grid-cols-2 gap-3">
              <input required className="rounded-lg border p-2 dark:bg-slate-800" placeholder="MM/YY" />
              <input required className="rounded-lg border p-2 dark:bg-slate-800" placeholder="CVV" />
            </div>
            <p className="font-semibold">Order Total: ${cartTotal.toFixed(2)}</p>
            <button className="btn-primary w-full">Place Order</button>
          </div>
        </form>
      )}
    </section>
  );
}
