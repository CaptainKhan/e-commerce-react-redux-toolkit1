import React from 'react'
import logo from '../../assets/images/logo.png'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div>
            <div className='flex items-center justify-center'>
                <hr className='h-px w-4/5 bg-gray-400 opacity-50 outlined border-none' />
            </div>
            <div className='flex items-center justify-around pt-4'>
                <img className='h-20' src={logo} alt="logo"></img>
            </div>
            <div>
                <p className='text-black text-sm font-inter leading-none tracking-normal no-underline '>
                    Copyright &copy; {year} page by Tarzan
                </p>
            </div>
        </div>
    )
}

export default Footer