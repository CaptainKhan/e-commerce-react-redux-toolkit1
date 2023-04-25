import React from 'react'
import { useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import { login } from '../../features/slices/authSlice';
import { useDispatch } from 'react-redux';



const Login = () => {

    const intitalState = {
        name: '',
        password: '',
        image: ''
    };

    const [values, setValues] = useState(intitalState);
    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    };

    const dispatch = useDispatch();

    return (
        <div className='grid grid-cols-1 items-center justify-items-center h-screen'>
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Name"
                        size="lg"
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                    />
                    <Input
                        label="Password"
                        size="lg"
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                    <Input
                        label='Image URL address'
                        size="lg"
                        type='text'
                        name='image'
                        value={values.image}
                        onChange={onChange}
                    />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button onClick={() => dispatch(login(values))} variant="gradient" fullWidth>
                        Sign In
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Image is Optional
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login
