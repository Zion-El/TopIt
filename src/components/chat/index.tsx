import React, {useState} from 'react'

const Chat = () => {

    const [count, setCount] = useState(1)
  return (
    <div>
        <div className='relative'>
            <button><img src="/images/svgs/chat.svg" alt="" /></button>
            <span className='absolute rounded-full'>{count}</span>
        </div>
      
    </div>
  )
}

export default Chat

