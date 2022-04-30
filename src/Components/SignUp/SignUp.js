import React from 'react';
import { Link } from 'react-router-dom';
import { SiGoogle } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { BsGithub  } from 'react-icons/bs';

const SignUp = () => {
    return (
        <Link to='/signup'>
            <div>
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto my-28">
                    <form>

                        <p className='text-3xl font-bold text-blue-700'>Sign up now</p>
                        <div class="grid grid-cols-2 gap-4 mt-5">



                            {/* First name input field starts */}
                            <div class="form-group mb-6">
                                <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="First name" />
                            </div>
                            {/* First name input field ends */}


                            {/* Last name input field starts */}
                            <div class="form-group mb-6">
                                <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                                    aria-describedby="emailHelp124" placeholder="Last name" />
                            </div>
                            {/* Last name input field ends */}


                        </div>


                        {/* input for email address starts */}
                        <div class="form-group mb-6">
                            <input type="email" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125" placeholder="Email address" />
                        </div>
                        {/* input for email address ends */}


                        {/* input for passward  starts */}
                        <div class="form-group mb-6">
                            <input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126" placeholder="Password" />
                        </div>
                        {/* input for passward  ends */}





                        {/* sign up btn starts */}
                        <button type="submit" class=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign up</button>
                        {/* sign up btn ends */}



                        <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                            Already have an account?
                            <Link
                                to="/login"
                                class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out mb-64">Log In
                            </Link>
                        </p>

                        <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5" >
                            <p class="text-center font-semibold mx-4 mb-0 text-gray-400">Or</p>
                        </div>



                        {/* google sign up starts */}
                        <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <SiGoogle className="text-xl pr-1"></SiGoogle>
                            Sign up with Google
                        </button>
                        {/* google sign up ends */}


                        {/* facebook sign up starts */}
                        <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                            <FaFacebookF className="text-xl pr-1"></FaFacebookF>
                            Sign up with Facebook
                        </button>
                        {/* facebook sign up ends */}


                        {/* GitHub sign up starts */}
                        <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                            
                        <BsGithub className="text-xl pr-1"></BsGithub>
                            Sign up with Github
                        </button>
                        {/* GitHub sign up ends */}




                    </form>
                </div>
            </div>
        </Link>
    );
};

export default SignUp;