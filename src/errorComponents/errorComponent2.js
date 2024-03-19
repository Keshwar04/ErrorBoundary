import React, { useState } from 'react'
import {useErrorBoundary} from 'react-error-boundary'
const ErrorComponent2 = () => {
  const [count, setCount] = useState(1)
 
  const {showBoundary} = useErrorBoundary()

  const handleClick = () => {
    try{
      if (count === 5) {
        throw new Error('increment exceeded')
      }else{
        setCount(count + 1)
      }
    }catch(err){
      showBoundary(err)
    }
  }
  return (
    <div>
      <div>Child Error Component</div>
      <p>count:{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ErrorComponent2