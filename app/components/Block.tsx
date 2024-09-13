import React from 'react'
import LeftBlock from './LeftBlock'
import RightBlock from './RightBlock'
const Block = () => {
  return (
    <div>

    <div className=' mx-3 flex flex-row'>
      <LeftBlock />
      <RightBlock/>
    </div>
    </div>
  )
}

export default Block