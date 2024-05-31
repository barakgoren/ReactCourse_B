import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { AppContext } from '../context/Context1';

export default function HwForm() {
    const {loginUser} = useContext(AppContext);
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSub = (data) => {
        delete data.email2;
        loginUser(data);
    }
    return (
        <div className='container'>
            <h1>Homework form:</h1>
            <form onSubmit={handleSubmit(onSub)} className='col-md-6'>
                <label>Name:</label>
                <input {...register("name", {
                    required: true, minLength: 2, pattern: /^[A-Za-z ]+$/
                })} type='text' className='form-control' />
                {errors.name && errors.name.type === "required" && <div className='text-danger'>* Name is required</div>}
                {errors.name && errors.name.type === "minLength" && <div className='text-danger'>* Name must be valid (At least 2 characters)</div>}
                {errors.name && errors.name.type === "pattern" && <div className='text-danger'>* Name must contain only English and spaces!</div>}
                <label>Email:</label>
                <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type='text' className='form-control' />
                {errors.email && <div className='text-danger'>* Enter valid email</div>}
                <label>Repeat Email:</label>
                <input {...register("email2", { required: true, validate: (val) => val === getValues("email") })} type='text' className='form-control' />
                {errors.email2 && <div className='text-danger'>* Emails inputs not match</div>}
                <label>Password:</label>
                <input {...register("password", { required: true, minLength: 6 })} type='password' className='form-control' />
                {errors.password && <div className='text-danger'>* Enter valid password (min 6 chars)</div>}
                <button className='btn btn-success mt-3'>Sign up</button>
            </form>
        </div>
    )
}
