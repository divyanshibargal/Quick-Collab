import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Image src={'/Main_logo.png'} alt='logo' width={100} height={50}/>
    </div>
  )
}

export default Logo
