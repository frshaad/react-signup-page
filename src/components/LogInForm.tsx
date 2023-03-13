const LogInForm = () => {
  return (
    <article className='xl:w-1/2 w-full flex flex-col px-6 sm:px-10 md:px-20 justify-center items-center sm:max-w-xl h-full backdrop-blur-xl bg-white dark:bg-[#555] bg-opacity-[0.80] dark:bg-opacity-[0.80]'>
      <div className='flex items-center flex-col'>
        <img src='/logo.svg' alt='Eli codes logo' />
        <h2 className='font-bold text-3xl text-[#FF8D8D]'>
          Eli <span className='font-light text-xl text-[#5DC399]'>Codes</span>
        </h2>
      </div>

      <h3 className='mt-12 font-bold text-2xl text-center text-[#666] dark:text-[#fff]'>
        Sign Up
      </h3>

      <form
        action=''
        className='flex flex-col items-center gap-6 w-full mt-8 mb-6'
      >
        <input type='email' className='inputStyle' placeholder='Email' />
        <input type='password' className='inputStyle' placeholder='Password' />
        <button
          type='submit'
          className='boxShadow bg-[#70EDB9] text-white text-xl font-medium py-4 w-full'
        >
          Log In
        </button>
      </form>

      <p className='mt-6 w-9/12 mx-auto font-light text-sm text-[#808080] dark:text-[#eefcff] leading-[18px] text-center'>
        By signing up, I agree to the Privacy Policy and Terms of Service
      </p>
      <div className='mt-6 font-bold text-[#808080] text-base dark:text-[#fff] '>
        <span>Already have an account? </span>
        <span className='font-medium text-[#FF8D8D]'>
          <a href='#'>Sign In</a>
        </span>
      </div>
    </article>
  )
}

export default LogInForm
