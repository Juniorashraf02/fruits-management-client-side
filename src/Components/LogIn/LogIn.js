import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../Images/loginImage.png';
import { SiGoogle } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail, useSignInWithFacebook, useSignInWithGithub, useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
const axios = require('axios').default;




const LogIn = () => {

    const [users, setUsers] = useState({
        email: '',
        pass: '',
    });

    const handleEmail = e => {
        const inputEmail = e.target.value;

        // console.log(inputEmail);
        setUsers({ ...users, email: inputEmail })
    }
    const handlePassword = e => {
        const inputPass = e.target.value;

        // console.log(inputPass);
        setUsers({ ...users, pass: inputPass })
    }


    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [user, loading, authError] = useAuthState(auth);

    useEffect(() => {
        const error = emailError || googleError || fbError || gitError || authError || resetError;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [emailError, googleError, fbError, gitError, authError, resetError]);

    const handleSubmit =async e => {
        e.preventDefault();
        await signInWithEmailAndPassword(users.email, users.pass);

        const email = users.email
        const {data} = await axios.post('http://localhost:5000/login', {email});
        localStorage.setItem('accessToken', data.accessToken);
        


    }
    
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";



    if (loading || googleLoading || fbLoading || gitLoading || emailLoading) {
        return <div className="mt-20 flex justify-center items-center space-x-2">
            <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="
            spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
              text-purple-500
            " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="
            spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
              text-green-500
            " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="
            spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
              text-yellow-500
            " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-gray-300" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }



    if (sending) {
        toast.success("Sending");
    }

    if (user || googleUser || emailUser || gitUser || fbUser) {

        navigate(from, { replace: true });
    }






    return (

        <section className="h-screen ">
            
            {/* dynamic title */}
            <Helmet>
                <title>Log In - warehoue mangement</title>
            </Helmet>

            <p className='text-3xl text-slate-700 font-bold mt-4'>Log In To get full experience</p>

            <div className="px-6 h-full text-gray-800">
                <div className="md:flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6 ">
                    
                    <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                        <img src={loginImage} className="w-full" alt="Sample " />
                    </div>

                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="text-lg mb-0 mr-4 text-gray-400 font-semibold">Sign in with</p>


                                {/* btn for facebook */}
                                <button onClick={() => signInWithFacebook()} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1">


                                    <FaFacebookF className="text-2xl"></FaFacebookF>
                                </button>


                                {/* btn for google  */}
                                <button onClick={() => signInWithGoogle()} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >

                                    <SiGoogle className="text-2xl"></SiGoogle>
                                </button>


                                {/* btn for linkedin */}
                                <button onClick={() => signInWithGithub()} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >

                                    <BsGithub className="text-2xl"></BsGithub>
                                </button>
                            </div>

                            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5" >
                                <p className="text-center font-semibold mx-4 mb-0 text-gray-400">Or</p>
                            </div>



                            {/* email input starts */}
                            <div className="mb-6">
                                <input onChange={handleEmail} type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                />
                            </div>
                            {/* email input starts */}



                            {/* passward input starts */}
                            <div className="mb-3">
                                <input onChange={handlePassword} type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput"
                                    placeholder="Password"
                                />
                            </div>
                            {/* passward input ends */}





                            <p onClick={async () => {
                                await sendPasswordResetEmail(users.email);
                                toast.success('Sent email');
                            }} className="cursor-pointer text-right mb-2 text-blue-600"><u>Forgot password?</u></p>


                            <div className="text-center lg:text-left">
                                <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"  >
                                    Login
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <Link
                                        to="/signup"
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out mb-64" >Register
                                    </ Link>
                                </p>
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default LogIn;