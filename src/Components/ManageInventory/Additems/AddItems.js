import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const AddItems = () => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = `http://localhost:5000/items`
    fetch(url, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(
      res => res.json()
    ).then(result => {
      console.log(result);
    });

    window.confirm('successfully added item')
    

    // const url2 = `http://localhost:5000/newItem`
    // fetch(url2,{
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }).then(response => response.json()).then(data => console.log(data))
  };

 

  // if (user) {
  //   console.log(user);
  // }

  return (



    <form className='md:w-1/2 container mx-auto mt-20 px-5' onSubmit={handleSubmit(onSubmit)}>

      <div className="md:flex gap-10">




        <div className='md:w-1/2'>
        <h1 className='text-2xl font-bold text-slate-500 my-5'>User Information</h1>
          
          

          <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("email",)} placeholder="email"  value={user?.email}  />

          <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("username",)} placeholder="username" value={user?.displayName} readOnly  />
          
          
        </div>




        <div className='md:flex md:items-center md:flex-wrap mb-6 md:w-1/2'>
         
          <h1 className='text-2xl font-bold text-slate-500 my-5'>Enter Item Details</h1>
          
          <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("img",)} placeholder="Enter the image link of your product" />
          
          <input name='fruitName' className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("name",)} placeholder="Name of your product" />
          
          <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("supplier",)} placeholder="Supplier name" />
          
          <textarea className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("description",)} placeholder="Tell us about your product" />
          
          <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("price",)} placeholder="Price" type="number" />
          
          <input name="addedQuantity" className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("quantity",)} placeholder="Quantity" type="number" />

          <input className="rounded-lg text-white bg-slate-500 mt-5 px-3 py-2.5 justify-center" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default AddItems;
