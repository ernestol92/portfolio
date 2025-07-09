import React, { useState } from 'react'

const RefTest = () => {
    const [count, setCount] = useState(0)
    
    function subHandler(){
        if(count>0){
            setCount(prev => prev - 1)
        }
    }

    function addHandler(){
        setCount(prev => prev + 1)
    }
    
  return (
  <div className='d-flex'>
    <button className='btn btn-primary' onClick={subHandler}>-</button>
    <div>{count}</div>
    <button className='btn btn-primary' onClick={addHandler}>+</button>
  </div>
  )
}

export default RefTest