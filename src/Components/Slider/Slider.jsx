import React from 'react'
import '../../features/slices/sliderSlice'
import { nextSlide, prevSlide, dotSlide } from '../../features/slices/sliderSlice'
import { useSelector, useDispatch } from 'react-redux'
import { sliderData } from '../../../src/assets/data/dummyData'
//svg files from https://heroicons.com/


const Slider = () => {
    const slideIndex = useSelector((state) => state.slider.value);
    // console.log('slideIndex', slideIndex)
    const dispatch = useDispatch()

    return (
        <div>
            <div className='relative pb-4'>
                <div>{sliderData.map((item) => (
                    <div key={item.id} className={parseInt(item.id) === slideIndex
                        ? 'opacity-100 duration-700 ease-in-out scale-100'
                        : 'opacity-0 duration-700 ease-in-out scale-95'}
                    >
                        <div>
                            {parseInt(item.id) === slideIndex && (
                                <img className='h-[850px] w-full' src={item.img} alt="shoes" />
                            )}
                        </div>
                        <div className='absolute top-44 mx-auto inset-x-1/4'>
                            <p className='text-white font-inter text-4xl font-bold tracking-normal leading-none'>
                                {parseInt(item.id) === slideIndex && item.text}
                            </p>
                        </div>
                    </div>
                ))}
                </div>
                <div className='flex absolute bottom-12 left-[45%]'>
                    {sliderData.map((dot, index) => {
                        return (
                            <div className='mr-4' key={dot.id}>
                                <div className={
                                    index === slideIndex
                                        ? 'bg-green-300 rounded-full p-4 cursor-pointer'
                                        : 'bg-white rounded-full p-4 cursor-pointer'
                                }
                                    onClick={() => dispatch(dotSlide(index))}
                                >
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <button className='duration-300 bg-white rounded-full absolute top-[50%] right-4 p-2 hover:bg-green-300 ease-in-out'
                        onClick={() => dispatch(nextSlide(slideIndex + 1))}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                        </svg>
                    </button>
                    <button className='duration-300 bg-white rounded-full absolute top-[50%] left-4 p-2 hover:bg-green-300 ease-in-out'
                        onClick={() => dispatch(prevSlide(slideIndex - 1))}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slider