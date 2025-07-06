import React, { ReactNode } from 'react'
interface IProps {
  children:ReactNode
}
function Container({children}:IProps) {
  return (
    <div className='max-w-7xl mx-auto'>
      {
        children
      }
    </div>
  )
}

export default Container