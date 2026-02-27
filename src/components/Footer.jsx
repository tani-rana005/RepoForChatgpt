export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="container-main grid gap-8 py-10 md:grid-cols-4">
        <div>
          <h3 className="font-bold">About TechStore Pro</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Premium laptops and gadgets with fast delivery and genuine warranty.</p>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">support@techstorepro.com</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">+1 (800) 000-1111</p>
        </div>
        <div>
          <h3 className="font-bold">Social Media</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Instagram / X / YouTube / LinkedIn</p>
        </div>
        <div>
          <h3 className="font-bold">Policies</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Shipping, Return, Privacy, Terms</p>
        </div>
      </div>
    </footer>
  );
}
