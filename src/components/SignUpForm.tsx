type Props = {
  hasAccount: boolean
  setHasAccount: (a: boolean) => void
}

const SignUpForm = ({ hasAccount, setHasAccount }: Props) => {
  return (
    <article className='xl:w-1/2 w-full flex flex-col px-6 sm:px-10 md:px-20 justify-center items-center sm:max-w-xl h-full backdrop-blur-xl bg-white dark:bg-[#555] bg-opacity-[0.80] dark:bg-opacity-[0.80]'>
      <div className='flex items-center flex-col'>
        <img src='/logo.svg' alt='Eli codes logo' />
        <h2 className='font-bold text-3xl text-[#FF8D8D]'>
          Eli <span className='font-light text-xl text-[#5DC399]'>Codes</span>
        </h2>
      </div>

      {hasAccount ? (
        <form
          action=''
          className='flex flex-col items-center gap-6 w-full mt-12 mb-6'
        >
          <input type='email' className='inputStyle' placeholder='Email' />
          <input
            type='password'
            className='inputStyle'
            placeholder='Password'
          />
          <button
            type='submit'
            className='boxShadow bg-[#70EDB9] text-white text-xl font-medium py-4 w-full'
          >
            Log In
          </button>
        </form>
      ) : (
        <form
          action=''
          className='flex flex-col items-center gap-6 w-full mt-12 mb-6'
        >
          <input type='text' className='inputStyle' placeholder='Name' />
          <input type='email' className='inputStyle' placeholder='Email' />
          <input
            type='password'
            className='inputStyle'
            placeholder='Password'
          />
          <input
            type='password'
            className='inputStyle'
            placeholder='Confirm Password'
          />
          <button
            type='submit'
            className='boxShadow bg-[#70EDB9] text-white text-xl font-medium py-4 w-full'
          >
            Sign Up
          </button>
        </form>
      )}

      {hasAccount ? (
        ''
      ) : (
        <p className='mt-6 w-9/12 mx-auto font-light text-sm text-[#808080] dark:text-[#eefcff] text-center'>
          By signing up, I agree to the Privacy Policy and Terms of Service
        </p>
      )}

      <div className='mt-6 font-bold text-[#808080] text-base dark:text-[#fff] '>
        <span>{hasAccount ? 'No account? ' : 'Already have an account? '}</span>
        <button
          className='font-medium text-[#FF8D8D]'
          onClick={() => setHasAccount(!hasAccount)}
        >
          {hasAccount ? 'Create one!' : 'Sign In'}
        </button>
      </div>
    </article>
  )
}

export default SignUpForm
