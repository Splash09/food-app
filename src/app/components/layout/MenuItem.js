export default function MenuItem() {
  return (
    <div className='bg-gray-300 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25'>
      <div className='text-center'>
        <img
          src='/pizza.png'
          alt='Pizza'
          className='max-h-auto max-h-24 mx-auto block'
        />
      </div>
      <h4 className='font-semibold my-2 text-xl'>Pepperoni Pizza</h4>
      <p className='text-gray-500 text-sm'>
        {' '}
        this is as nice and delicious pizza
      </p>
      <button className='bg-primary rounded-full text-white px-6 py-3 mt-4'>
        Add to cart $12
      </button>
    </div>
  );
}
