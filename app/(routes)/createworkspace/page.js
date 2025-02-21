'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function CreateWorkspace() {
    const[coverImage, setcoverImage]=useState('/cover.png')
return (
    <div className='p-10 md:px-36 lg:px-52 xl:px-80 py-20'>
        <div>
            <div>
                <Image src={coverImage} width={400} height={400} className='w-full h-[150px] object-cover
                rounded-t-xl' />
            </div>
        </div>
    </div>
)
}

export default CreateWorkspace
