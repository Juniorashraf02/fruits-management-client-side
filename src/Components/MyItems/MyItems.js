import React,{useState} from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';

const MyItems = () => {
    const [user]= useAuthState(auth);
    const [yourItem,setyourItem]=useState([]);
    useEffect(()=>{
        const email = user.email;
        const url = `http://localhost:5000/myitem?email=${email}`
        fetch(url)
        .then(res=> res.json())
        .then(data=>{
            setyourItem(data);
        })
    },[user]);
    return (
        <div>
            <h1 className='text-2xl text-blue-700 mt-10 font-semibold'>Your Added Item: {yourItem.length}</h1>
        </div>
    );
};

export default MyItems;