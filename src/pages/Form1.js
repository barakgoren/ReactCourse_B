import React from 'react'
import {useForm} from "react-hook-form"

export default function Form1() {
  // register - נשים על כל אינפוט שקשור לטופס ייקבל פרמטר של השם שלו
  // ופרמטר את התנאים לוולזציה
  // handleSubmit - פונקציה שתעטוף את הפונקציה של המקורית של השיגור טופס
  // errors - אובייקט שיקבל מאפיינים של אינפוטים שיש בהם טעות בוולדזציה לפי הריג'סטר
  // getValues - מאפשר לי לאסוף מידע של אינפוטים שעשיתי להם ריג'יסטר בשביל לבדוק
  // אם אינפוט 1 שווה לאינפוט 2 לדוגמא
  const{register , handleSubmit ,  formState: { errors }, getValues } = useForm();

  const onSub = (data) => {
    // מחיקת מאפיין מאובייקט בג'יי אס
    delete data.phone2;
    console.log(data);
  }

  return (
    <div className='container'>
      <h1>Sign up form:</h1>
      <form onSubmit={handleSubmit(onSub)} className='col-md-6'>
        <label>Name:</label>
        <input {...register("name",{required:true, minLength:2})} type='text' className='form-control' />
        {errors.name && <div className='text-danger'>* Enter valid name (min 2 chars)</div>}
        <label>Phone:</label>
        <input {...register("phone",{required:true, minLength:9})} type='text' className='form-control' />
        {errors.phone && <div className='text-danger'>* Enter valid Phone (min 9 chars)</div>}
        <label>Enter Phone again:</label>
        <input {...register("phone2",{required:true, validate:(val) => val === getValues("phone")})} type='text' className='form-control' />
        {errors.phone2 && <div className='text-danger'>* Phones inputs not match</div>}
        <label>Email:</label>
        <input {...register("email",{required:true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} type='text' className='form-control' />
        {errors.email && <div className='text-danger'>* Enter valid email</div>}
        <button className='btn btn-success mt-3'>Sign up</button>
      </form>
    </div>
  )
}
