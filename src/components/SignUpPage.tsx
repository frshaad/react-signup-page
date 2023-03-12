import BgShapes from './bgShapes'
import SignUpForm from './SignUpForm'
import TitleSection from './TitleSection'

const SignUpPage = () => (
  <main className='w-screen h-screen bg-[#eefcff] dark:bg-[#333] relative'>
    <BgShapes />
    <SignUpForm />
    <TitleSection />
  </main>
)

export default SignUpPage
