export const CardLoading = () => {
  return (
    <article className='bg-white shadow-md overflow-auto rounded-lg'>
      <div className='h-[12rem] bg-gray-300' />
      <div className='pt-6 pb-12 px-6'>
        <h3 className='bg-gray-300 rounded-lg py-2 mb-6' />
        <div className='grid gap-y-3'>
          <p className='bg-gray-300 rounded-lg py-2 w-[220px]' />
          <p className='bg-gray-300 rounded-lg py-2 w-[180px]' />
          <p className='bg-gray-300 rounded-lg py-2 w-[200px]' />
        </div>
      </div>
    </article>
  )
}
