import React,{useState} from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import MyItemDetails from './MyItemDetails/MyItemDetails';

const MyItems = () => {
    const [user]= useAuthState(auth);
    const [myitems,setmyitems]=useState([]);
    useEffect(()=>{
        const email = user.email;
        const url = `http://localhost:5000/myitem?email=${email}`
        fetch(url)
        .then(res=> res.json())
        .then(data=>{
            setmyitems(data);
            console.log(data);
        })
    },[user]);




    const handleDelete=id=>{
        const proceed = window.confirm('Deleted items can not be recoverd. Do you want to proceed?');
        if(proceed){
            const url =`http://localhost:5000/items/${id}`
            fetch(url,{
                method: 'DELETE'
            }).then(res=>res.json()).then(data=>{
                console.log(data);
                const remaining = myitems.filter(product=>product._id !== id);

                setmyitems(remaining);
                  
            });
        }
    }



    return (
        <div>
            <h1 className='text-2xl text-blue-700 mt-10 font-semibold'>Your Added Item: {myitems.length}</h1>
            {
                myitems.map(myitem=> <MyItemDetails key={myitem.id} myitem={myitem} handleDelete={handleDelete}/>)
            }
        </div>
    );
};

export default MyItems;