import React from 'react'
import { useForm } from 'react-hook-form';

export default function Form1() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSub = (data) => {
        delete data.phone2;
        console.log(data);
    }
    return (
        <div className='container'>
            <h1>Sign up form:</h1>
            <form onSubmit={handleSubmit(onSub)} className='col-md-6'>
                <label>Name:</label>
                <input {...register("name", {required: true, minLength:2})} type='text' className='form-control' />
                {errors.name && <p className='text-danger m-0'>* Name is required - must be at least 2 letters</p>}
                <label>Phone:</label>
                <input {...register("phone", {required: true, minLength:9})} type='text' className='form-control' />
                {errors.phone && <p className='text-danger m-0'>* Phone is required - must be at least 9 numbers</p>}
                <label>Repeat Phone:</label>
                <input {...register("phone2", {required: true, minLength:9, validate:(val) => val === getValues("phone")})} type='text' className='form-control' />
                {errors.phone2 && <p className='text-danger m-0'>* Phone are not match</p>}
                <label>Email:</label>
                <input {...register("email", {required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} type='text' className='form-control' />
                {errors.email && <p className='text-danger m-0'>* Enter valid email</p>}
                <button className='btn btn-success mt-3'>Sign up</button>
            </form>
        </div>
    )
}