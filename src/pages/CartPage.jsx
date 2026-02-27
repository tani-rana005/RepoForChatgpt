import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function CartPage() {
  const { cart, updateCartQty, cartTotal } = useStore();

  return (
    <section className="container-main mt-8">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      {!cart.length ? <p className="mt-4">Your cart is empty.</p> : (
        <div className="mt-5 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="card flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-slate-500">${item.price} each</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="btn-secondary" onClick={() => updateCartQty(item.id, item.qty - 1)}>-</button>
                <span>{item.qty}</span>
                <button className="btn-secondary" onClick={() => updateCartQty(item.id, item.qty + 1)}>+</button>
              </div>
              <p className="font-semibold">${item.price * item.qty}</p>
            </div>
          ))}
          <div className="card text-right">
            <p className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</p>
            <Link to="/checkout" className="btn-primary mt-3 inline-block">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </section>
  );
}
