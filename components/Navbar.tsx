import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between w-full h-24 px-8 font-mono text-sm lg:flex bg-slate-300'>
      <div>
        <p>MoonHypnose</p>
      </div>

      <div>
        <ul className='flex items-center justify-between space-x-4'>
          <Link href='/'>Accueil</Link>
          <Link href='/'>Fonctionnalités</Link>
          <Link href='/'>Contact</Link>
        </ul>
      </div>

      <div className='flex items-center justify-between space-x-4'>
        <button className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          Dashboard
        </button>
        <button className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          Log in
        </button>
      </div>
    </nav>
  );
}
