import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center justify-between'>
      <Link className='text-primary font-semibold text-2xl' href=''>
        {' '}
        ST PiZZA
      </Link>
      <nav className='flex items-center gap-8 text-grey-500 font-semibold'>
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>AboutUs</Link>
        <Link href={''}>Contact</Link>
      </nav>
      <nav className='flex items-center gap-8 text-grey-500 font-semibold'>
        <Link href={'/login'}>Login</Link>
        <Link
          className='bg-primary rounded-full text-white px-8 py-2'
          href={'/register'}
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
