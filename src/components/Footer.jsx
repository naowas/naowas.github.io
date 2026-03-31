export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Naowas Morshed Eimon</p>
      </div>
    </footer>
  );
}
