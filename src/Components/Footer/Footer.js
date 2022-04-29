/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import { SiFacebook } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { BsWhatsapp, BsMessenger, BsGithub } from 'react-icons/bs';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className=" text-center text-white" style={{ "backgroundColor": "#f1f1f1" }}>
            <div class="md:flex md:justify-between container mx-auto ">
                <div class="mb-6 md:mb-0 sm:ml-2">


                    {/* company name starts */}
                    <a className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0  mr-1 " href="#s">
                        <p className="visible font-bold text-slate-700 m-3 uppercase">Fruits warehouse</p>
                    </a>
                    {/* company name ends */}





                    {/* sign up for email starts */}
                    <div>
                        <h1 className="text-3xl h-.5 text-left ml-2 font-bold text-blue-700 ">Sign up for our newsletter</h1>
                        <div className="my-6 mx-3 flex flex-wrap">

                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />

                            <button type="button" class="text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Notify me</button>
                        </div>
                    </div>
                    {/* sign up for email ends */}



                </div>




                {/* resourses, follow and legal section starts */}
                <div class="grid grid-cols-3 gap-4 ">



                    {/* resorses section starts */}
                    <div>
                        <h2 class="my-6 text-sm font-bold text-slate-900 uppercase ">Resources</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4">
                                <a href="#local-market" class="hover:underline">Local Market</a>
                            </li>
                            <li>
                                <a href="#local-area" class="hover:underline">Local Area</a>
                            </li>
                        </ul>
                    </div>
                    {/* resorses section ends */}




                    {/* follow section starts */}
                    <div>
                        <h2 class="my-6 text-sm font-bold text-slate-900 uppercase">Follow us</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4">
                                <a target="_blank" href="https://github.com/Juniorashraf02" class="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://discord.com/channels/juniorashraf02#0658" class="hover:underline">Discord</a>
                            </li>
                        </ul>
                    </div>
                    {/* resorses section ends */}





                    {/* legal section starts */}
                    <div>
                        <h2 class="my-6 text-sm font-bold text-slate-900 uppercase">Legal</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4">
                                <a href="#privacy" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#terms" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    {/* legal section ends */}


                </div>
            </div>
            {/* resourses, follow and legal section ends */}


            {/* Social media section starts */}
            <div className=" pt-9 ">
                <div className="flex justify-center mb-9 ">
                    <a className="text-2xl" style={{ "color": "black", "marginLeft": "10px" }} target="_blank" href="https://www.facebook.com/juniorashraf02">
                        <SiFacebook></SiFacebook>
                    </a>
                    <a className="text-2xl" style={{ "color": "black", "marginLeft": "36px" }} target="_blank" href="https://www.linkedin.com/in/istiakashraf/">
                        <BsLinkedin></BsLinkedin>
                    </a>
                    <a className="text-2xl" style={{ "color": "black", "marginLeft": "36px" }} target="_blank" href="mailto:shuvo.istiak11@gmail.com">
                        <SiGmail></SiGmail>
                    </a>
                    <a className="text-2xl" style={{ "color": "black", "marginLeft": "36px" }} target="_blank" href=" https://wa.me/01612016614">
                        <BsWhatsapp></BsWhatsapp>
                    </a>
                    <a className="text-2xl" style={{ "color": "black", "marginLeft": "36px" }} target="_blank" href="http://m.me/juniorashraf02">
                        <BsMessenger></BsMessenger>
                    </a>
                    <a className="text-2xl" style={{ "color": "black", "marginLeft": "36px" }} target="_blank" href="https://github.com/Juniorashraf02">
                        <BsGithub></BsGithub>
                    </a>

                </div>
            </div>
            {/* Social media section ends */}

            <div className="text-center text-gray-700 p-4" style={{ "backgroundColor": "rgba(0, 0, 0, 0.1)" }}>
                © {year} Copyright: &nbsp;
                <a className="text-gray-800" href="https://tailwind-elements.com/">Fruits warehouse</a>
            </div>
        </footer>
    );
};

export default Footer;