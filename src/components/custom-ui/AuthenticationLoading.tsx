import React from 'react'

function AuthenticationLoading() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <div className='loader'></div>
        <p className='mt-10 font-medium'>Authenticating...</p>
    </div>
  )
}

export default AuthenticationLoading