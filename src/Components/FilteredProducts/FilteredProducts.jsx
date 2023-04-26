import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard';
import { Button } from '@material-tailwind/react'
import { useSelector, useDispatch } from 'react-redux';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import Error from '../Error/Error';
import {
    filterProducts,
    filterGender,
    sortByPrice,
    filterByColor,
    filterBySize
} from '../../features/slices/productsSlice'


export const FilteredProducts = () => {

    const products = useSelector(state => state.products.filteredProducts);
    const error = useSelector(state => state.products.error);
    const { type } = useParams();

    const genderButtons = ['male', 'female'];
    const colorButtons = ["red",
        "green",
        "purple",
        "yellow",
        "orange",
        "blue",
        "black",
        "white",
        "orange",
        "brown"
    ]
    const sizeButtons = ["XS", "S", "M", "L", "XL", "XXL"]

    const dispatch = useDispatch();

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
                                            onClick={() => dispatch(filterGender(item))}
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
                                onClick={() => dispatch(sortByPrice())}
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
                                        onClick={() => dispatch(filterByColor())}

                                    >
                                        Select a Color
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    {colorButtons.map((item, index) => {
                                        return (
                                            <MenuItem
                                                style={{ color: item }}
                                                key={index}
                                                onClick={() => dispatch(filterByColor(item))}
                                            >
                                                {item}
                                            </MenuItem>
                                        )
                                    }
                                    )}
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuHandler>
                                    <Button
                                        color='gray'
                                        size='lg'
                                        variant='outlined'
                                        ripple={true}
                                        className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'
                                        disabled={type === "Bags" || type === "Shoes"}
                                    >
                                        Select a Size
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    {sizeButtons.map((item, index) => {
                                        return (
                                            <MenuItem
                                                onClick={() => dispatch(filterBySize(item))}
                                                key={index}
                                            >
                                                {item}
                                            </MenuItem>
                                        )
                                    })}
                                </MenuList>
                            </Menu>
                        </div>
                        <div className='pr-14'>
                            <Button
                                color='gray'
                                size='lg'
                                variant='outlined'
                                ripple={true}
                                className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'
                                onClick={() => dispatch(filterProducts(type))}
                            >
                                Clear Filter
                            </Button>
                        </div>
                    </div>
                </div>
                {error ? (
                    <Error />
                )
                    :
                    (
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
                    )}
            </div>
        </div>
    )
}
export default FilteredProducts;