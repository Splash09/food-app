import Image from 'next/image';
import Right from '../icons/Right';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='py-12'>
        <h1 className='text-4xl font-semibold'>
          Everything <br />
          is better
          <br /> with a&nbsp;
          <span className='text-primary'>Pizza</span>
        </h1>
        <p className='my-6 text-grey-500 text-sm'>
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life.
        </p>
        <div className='flex gap-4'>
          <button className='bg-primary rounded-full flex gap-2 uppercase items-center text-white px-4  py-2'>
            Order now
            <Right />
          </button>
          <button className='font-semibold text-grey-600 gap-2 flex px-4 py-2'>
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className='relative'>
        <Image src={'/pizza.png'} alt='pizza' layout={'fill'}></Image>
      </div>
    </section>
  );
}
