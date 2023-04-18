import React from 'react'

import {Button} from '@material-tailwind/react'

const NavigateButtons = () => {

    const buttons = [
        'Hoodies',
        'Dresses',
        'Suits',
        'Shoes',
        'T-Shirts',
        'Jeans',
        'Jackets',
        'Bags'
    ]

    return (
        <div>
            <div className='flex items-center justify-center py-8'>
              {buttons.map((button, index) => {
                return <div key={index} className='mr-4'>
                <Button></Button>
                </div>
              })}
            </div>
        </div>
    )
}

export default NavigateButtons