import React from 'react'

const Background = () => {
  return (
   <>
        <div className='fixed z-[2] w-full h-screen flex flex-col items-center'>
    <       div className="absolute top-[5%] w-full py-10 flex justify-center">
            <h2 className="text-zinc-600 text-xs font-semibold">Documents.</h2>
            </div>
            <h1
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900"
            >
            Docs.
            </h1>
        </div>
   </>
  )
}

export default Background