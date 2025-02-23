import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'


const EmojiPickerCom = ({children , setEmojiIcon}) => {
  const [openEmojiPicker, setEmojiPicker] = useState(false)
  return (
    <div>
      <div onClick={()=>setEmojiPicker(true)}>
        {children}
    </div>
    {openEmojiPicker &&
      <div className='absolute z-10'>
        <EmojiPicker
        // emojiStyle='google'
         onEmojiClick={(e)=>{setEmojiIcon(e.emoji);
          setEmojiPicker(false);
         
         }}
        />
      </div>
    }
    
    </div>
  )
}

export default EmojiPickerCom
