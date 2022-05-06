import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import MyItemDetails from './MyItemDetails/MyItemDetails';
import { Helmet } from 'react-helmet-async';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myitems, setmyitems] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `https://young-gorge-41222.herokuapp.com/myitem?email=${email}`
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setmyitems(data);
                // console.log(data);
            })
    }, [user]);




    const handleDelete = id => {
        const proceed = window.confirm('Deleted items can not be recoverd. Do you want to proceed?');
        if (proceed) {
            const url = `https://young-gorge-41222.herokuapp.com/items/${id}`
            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json()).then(data => {
                console.log(data);
                const remaining = myitems.filter(product => product._id !== id);

                setmyitems(remaining);

            });
        }
    }



    return (
        <div>
            <Helmet>
                <title>My items - Fruits Warehouse</title>
            </Helmet>
            <h1 className='text-2xl text-blue-700 mt-10 font-semibold'>Your Added Item: {myitems.length}</h1>
            {
                myitems.map(myitem => <MyItemDetails key={myitem._id} myitem={myitem} handleDelete={handleDelete} />)
            }
        </div>
    );
};

export default MyItems;