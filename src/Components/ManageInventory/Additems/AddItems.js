import React,{useEffect} from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
      console.log(data);
      const url =`http://localhost:5000/add-item`
      fetch(url,{
        method: "POST",
        headers: {
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      }).then(
        res=>res.json()
      ).then(result=>{
        console.log(result)
      })
    };

    return (
       
        

        <form className='md:w-1/2 container mx-auto mt-20 px-5' onSubmit={handleSubmit(onSubmit)}>
         <h1 className='text-2xl font-bold text-slate-500 mb-5'>Enter Item Details</h1>
         <div className='md:flex md:items-center md:flex-wrap mb-6'>
       <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("img",)}  placeholder="Enter the image link of your product"  />
        <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("name",)}  placeholder="Name of your product" />
        <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("supplier",)}  placeholder="Supplier name" />
        <textarea className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("description",)}  placeholder="Tell us about your product" />
        <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("price",)}  placeholder="Price" type="number" />
        <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("quantity",)}  placeholder="Quantity" type="number" />

        <input className="rounded-lg text-white bg-slate-500 mt-5 px-3 py-2.5 justify-center" type="submit" />
       </div>
      </form>
    );
};

export default AddItems;
                {/* placeholder="Enter the image link of your product" /> */}