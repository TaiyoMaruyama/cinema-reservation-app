const Footer = () => {
  return (
    <div className='w-full pt-10 bg-black flex flex-col items-center'>
      <div className='flex items-center mb-4'>
        <div className='bg-white w-36 h-0.5 m-2' />
        <p>映画のひとときを、贅沢な体験へ。</p>
        <div className='bg-white w-36 h-0.5 m-2' />
      </div>
      <div className='flex items-center'>
        <p>提供:</p>
        <div className='w-28 pl-2'>
          <a href='https://www.themoviedb.org/'>
            <img
              src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
              alt=''
            />
          </a>
        </div>
      </div>
      <p className='mt-8'>©2024 Maruyama Taiyo</p>
    </div>
  )
}

export default Footer
