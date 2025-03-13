import React, { useState } from 'react'
import CoverPicker from '../../../../components/ui/CoverPicker'
import Image from 'next/image'

function DocumentInfo() {
const [coverImage,setCoverImage]=useState('/cover.png')
    return (
    <div>
         {/* Cover */}
        <CoverPicker>
        <div className="relative group">
        <h2 className="hidden absolute p-4 w-full h-full items-center group-hover:flex justify-center">
            Change cover
        </h2>
        <div className="group-hover:opacity-40 ">
            <Image
            src={coverImage}
            width={400}
            height={400}
            className="w-full h-[180px] object-cover
                rounded-t-xl"
            alt="CoverImage"
            />
        </div>
        </div>

        </CoverPicker>

        {/* Emoji Picker  */}

        {/* File name */}
    </div>
)
}

export default DocumentInfo
