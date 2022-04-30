import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {

    return (

       <div>
            <nav className="relative w-full flex flex-wrap  items-center justify-between  py-4  bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar  navbar-expand-lg navbar-light  ">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className=" navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0  focus:shadow-none focus:no-underline " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    <Link className="h-0 flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0  mr-1 " to="/">
                        <p className="md:visible invisible text-2xl font-bold text-slate-700">Fruits warehouse</p>
                    </Link>

        
                    <ul className="navbar-nav flex flex-col pl-0 list-style-none ml-auto mt-0">
                        <li className="nav-item p-2">
                            <Link to='/home' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >Home</Link>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#inventory">Inventory</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#s">Blogs</a>
                        </li>
                        <li className="nav-item p-2">
                            <Link to="/login" className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >Log In</Link>
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



                        {/* cart section starts */}
                        <a className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" href="#s">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
                                className="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
                                </path>
                            </svg>
                        </a>
                        {/* cart section ends */}


                        {/* notification btn action starts */}
                        <div className="dropdown relative">
                            <a className=" text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 dropdown-toggle hidden-arrow flex items-center " href="#s" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell"
                                    className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor"
                                        d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z">
                                    </path>
                                </svg>
                                <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">1</span>
                            </a>
                            <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-right rounded-lg shadow-lg mt-1  m-0  right-0 bg-clip-padding border-none left-auto" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <a className=" dropdown-item text-sm py-2  font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 pr-3" href="#s">Action</a>
                                </li>
                                <li>
                                    <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#s">Another action</a>
                                </li>

                            </ul>
                        </div>
                        {/* notification btn action ends */}



                        {/* image btn action starts */}
                        <div className="dropdown relative">
                            <a className="dropdown-toggle flex items-center hidden-arrow" href="#s" id="dropdownMenuButton2" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-full"
                                    style={{ "height": "25px", "width": "25px" }} alt="" loading="lazy" />
                            </a>

                            <ul className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-right rounded-lg shadow-lg mt-1 bg-clip-padding border-none left-auto right-0 " aria-labelledby="dropdownMenuButton2">
                                <li>
                                    <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#s">Action</a>
                                </li>
                                <li>
                                    <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#s">Another action</a>
                                </li>
                                <li>
                                    <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#s">Something else here</a>
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