import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard';
import { Button } from '@material-tailwind/react'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";


export const FilteredProducts = () => {

    const products = useSelector(state => state.products.filteredProducts);
    const { type } = useParams();

    const genderButtons = ['male', 'female'];


    return (
        <div>
            <div className='pt-16'>
                <div className="pl-14">
                    <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none'>
                        {type}
                    </h1>
                    <div className='flex items-center justify-between py-8'>
                        <div className='flex items-center'>
                            {genderButtons.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Button
                                            color='gray'
                                            size='lg'
                                            variant='outlined'
                                            ripple={true}
                                            className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'
                                        >
                                            {item}
                                        </Button>
                                    </div>
                                )
                            })}
                            <Button
                                color='gray'
                                size='lg'
                                variant='outlined'
                                ripple={true}
                                className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'
                            >
                                High Price
                            </Button>
                            <Menu>
                                <MenuHandler>
                                    <Button
                                        color='gray'
                                        size='lg'
                                        variant='outlined'
                                        ripple={true}
                                        className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'
                                    >
                                        Select a Color
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem>Menu Item 1</MenuItem>
                                    <MenuItem>Menu Item 2</MenuItem>
                                    <MenuItem>Menu Item 3</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 justify-items-center py-8 gap-12'>
                    {products.filter((product) => product.type === type).map((product, index) => {
                        return (
                            <div key={index}>
                                <ProductCard
                                    id={product.id}
                                    name={product.name}
                                    text={product.text}
                                    img={product.img}
                                    price={product.price}
                                    colors={product.color}
                                >
                                </ProductCard>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default FilteredProducts;