import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { login, signup } = useStore();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const ok = isLogin
      ? login(form.email, form.password)
      : signup(form.name, form.email, form.password);
    if (!ok) return setError(isLogin ? 'Invalid credentials' : 'Email already exists');
    navigate('/');
  };

  return (
    <section className="container-main mt-8 flex justify-center">
      <form onSubmit={submit} className="card w-full max-w-md space-y-3">
        <h1 className="text-2xl font-bold">{isLogin ? 'Login' : 'Signup'}</h1>
        {!isLogin && <input required className="w-full rounded-lg border p-2 dark:bg-slate-800" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />}
        <input required type="email" className="w-full rounded-lg border p-2 dark:bg-slate-800" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input required type="password" className="w-full rounded-lg border p-2 dark:bg-slate-800" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button className="btn-primary w-full">{isLogin ? 'Login' : 'Create Account'}</button>
        <button type="button" className="text-sm text-blue-600" onClick={() => setIsLogin((prev) => !prev)}>
          {isLogin ? 'Need an account? Signup' : 'Already have account? Login'}
        </button>
      </form>
    </section>
  );
}
