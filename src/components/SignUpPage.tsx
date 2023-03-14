import { useState } from 'react'
import BgShapes from './bgShapes'
import UserForm from './UserForm'
import TitleSection from './TitleSection'

const SignUpPage = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(false)

  return (
    <main className='w-screen h-screen flex bg-[#eefcff] dark:bg-[#333] relative'>
      <BgShapes />
      <UserForm hasAccount={hasAccount} setHasAccount={setHasAccount} />
      <TitleSection />
    </main>
  )
}

export default SignUpPage
