import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import nouser from '../Images/nouser.png';
import { getAuth, signOut } from "firebase/auth";
import { BsCartPlus } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import CustomLink from '../CustomLink/CustomLink';





const Header = () => {

    const [user] = useAuthState(auth);

    const handleSingOut = e => {
        e.preventDefault();
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // window.confirm('please reload the page!');
        });
    }

   
    

    return (

        <div>
            <nav className="relative w-full flex flex-wrap  items-center justify-between  py-4  bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar  navbar-expand-lg navbar-light  ">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">

                    {/* toogle icon with buttons starts */}
                    <button className=" navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0  focus:shadow-none focus:no-underline " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                            className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                            </path>
                        </svg>
                    </button>
                    {/* toogle icon with buttons ends */}


                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">

                        {/* website name */}
                        <Link className="h-0 flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0  mr-1 " to="/">
                            <p className="md:visible invisible text-2xl font-bold text-slate-700">Fruits Warehouse</p>
                        </Link>


                        <ul className="navbar-nav flex flex-col pl-0 list-style-none ml-auto mt-0">

                            <li className="nav-item p-2">
                                <CustomLink to='/home' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 font-semibold" >Home</CustomLink>
                            </li>
                            
                            <li className="nav-item p-2">
                                <CustomLink className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 font-semibold" to="/blog">Blogs</CustomLink>
                            </li>

                            <li className="nav-item p-2">
                                <CustomLink className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 font-semibold" to="/contact">Contact Us</CustomLink>
                            </li>

                        </ul>

                    </div>

                    <div>
                        <p className="invisible">hidden</p>
                    </div>


                    {/* cart, notification and displayImage section starts */}
                    <div className="">
                        <div className="flex items-center relative">

                            <div className="ml-12">
                                {/* This section was used to maintain gap for mobile devices */}
                            </div>



                            {/* notification section starts */}
                            <div className="dropdown relative">
                                <a className=" text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 dropdown-toggle hidden-arrow flex items-center " href="#s" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                                    {
                                        user ?
                                            <IoMdNotifications></IoMdNotifications>
                                            :
                                            <></>
                                    }

                                </a>

                                <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left p-2 list-none text-center rounded-lg shadow-lg mt-1  m-0  right-0 bg-clip-padding border-none left-auto" aria-labelledby="dropdownMenuButton1">
                                    
                                    <li className='mb-2 '>
                                        <a className="dropdown-item text-sm py-2 px-6 font-semibold rounded-lg whitespace-nowrap bg-transparent text-gray " href="#s">Thank you for <br /> chosing us</a>
                                    </li>

                                </ul>
                            </div>
                            {/* notification section ends */}


                            {/* cart btn action starts */}
                            <div className="dropdown relative">
                                <a className=" text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 dropdown-toggle hidden-arrow flex items-center " href="#s" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                                    {
                                        user ?
                                            <BsCartPlus></BsCartPlus>
                                            :
                                            <></>
                                    }

                                </a>
                                <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left p-2 list-none text-center rounded-lg shadow-lg mt-1  m-0  right-0 bg-clip-padding border-none left-auto" aria-labelledby="dropdownMenuButton1">
                                   
                                    <li className='mb-2 '>
                                        <Link to='/add-item' className="dropdown-item text-sm py-2 px-6 font-semibold rounded-lg whitespace-nowrap bg-transparent text-white bg-green-700 hover:bg-green-600" href="#s">Add items</Link>
                                    </li>
                                    
                                    <li className='mt-4 py-1'>
                                        <Link className="dropdown-item text-sm py-2 px-4 font-semibold rounded-lg whitespace-nowrap bg-transparent text-white bg-red-700 hover:bg-red-600" to="/manage-inventory">Delete items</Link>
                                    </li>

                                </ul>
                            </div>
                            {/* cart btn action ends */}



                            {/* image btn action starts */}
                            <div className="dropdown relative">
                                <a className="dropdown-toggle flex items-center hidden-arrow" href="#s" id="dropdownMenuButton2" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={user ? user.photoURL : nouser} className="rounded-full"
                                        style={{ "height": "25px", "width": "25px" }} alt="" loading="lazy" />
                                </a>

                                <ul className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-center rounded-lg shadow-lg mt-1 bg-clip-padding border-none left-auto right-0 " aria-labelledby="dropdownMenuButton2">
                                    {
                                        user ?

                                            <div className='mb-3'>
                                                <li className="py-1">
                                                    <CustomLink className=" dropdown-item text-sm py-2 bg-transparent text-gray-700 hover:bg-gray-100   px-10 font-semibold rounded-lg" to='/my-item'>My items</CustomLink>
                                                </li>

                                                <li  className="py-1">
                                                    <CustomLink className=" dropdown-item text-sm py-2 bg-transparent text-gray-700 hover:bg-gray-100  px-10 font-semibold rounded-lg" to="/manage-inventory">Manage Items</CustomLink>
                                                </li>
                                            </div>
                                            :
                                            <></>
                                    }
                                    <li className='p-3'>
                                        
                                        {
                                            user ?
                                                <Link to='/login' onClick={handleSingOut} className=" dropdown-item text-sm py-2 px-10 font-semibold rounded-lg whitespace-nowrap bg-transparent text-white bg-red-400 hover:bg-red-300">Log Out</Link>
                                                :
                                                <Link to='/login' className=" dropdown-item text-sm py-2 px-10 font-semibold rounded-lg whitespace-nowrap bg-transparent text-white  bg-blue-400 hover:bg-blue-300" href="#s">Log In</Link>
                                        }
                                    </li>

                                </ul>
                                {/* image btn action ends */}

                            </div>
                        </div>
                    </div>
                    {/* cart, notification and displayImage section ends */}

                </div>
            </nav>
        </div>



    );
};

export default Header;