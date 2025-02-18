import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Image src={'/QuickCollab_logo.png'} alt='logo' width={100} height={50}/>
    </div>
  )
}

export default Logo
