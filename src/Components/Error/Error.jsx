import React from 'react'
import { Alert } from "@material-tailwind/react";


const Error = () => {
    return (
        <div className='grid grid-cols-1 items-center justify-items-center'>
            <div className='w-[96]'>
                <Alert color="red" className='text-xl h-screen font-inter font-bold'>
                   Sorry no products match your filter search... Clear the filter and try again you mf 😥👊.
                </Alert>
            </div>
        </div>
    )
}

export default Error
