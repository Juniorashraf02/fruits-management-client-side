import React from 'react';
import img1 from '../Images/Fruits1.png';
import img2 from '../Images/Fruits2.png';
import img3 from '../Images/Fruits3.png';
import Inventory from './../Inventory/Inventory';

const Banner = () => {
    return (
        <div>


            {/* carosel starts */}
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">   
                    </button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">  
                    </button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">
                    </button>
                </div>


                
                <div className="carousel-inner relative w-full overflow-hidden">


                    {/* first picture starts */}
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={img1}
                            className="block w-full"
                            alt="..."/>
                        <div className="carousel-caption hidden md:block absolute text-center font-bold">
                            <h5 className="text-xl">Fresh Fruits</h5>
                            <p>We deliver the best fruits for you!</p>
                        </div>
                    </div>
                    {/* first picture ends */}




                    {/* Second picture starts */}
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={img2}
                            className="block w-full"
                            alt="..."/>
                        <div className="carousel-caption hidden md:block absolute text-center font-bold">
                            <h5 className="text-xl text-white">Chemical Free Fruits</h5>
                            <p className='text-white'>We have our own farm where you can get chemical free fruits</p>
                        </div>
                    </div>
                    {/* Third picture  ends*/}



                    {/* Third picture  starts*/}
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={img3}
                            className="block w-full"
                            alt="..."/>
                        <div className="carousel-caption hidden md:block absolute text-center font-bold">
                            <h5 className="text-xl text-white">Large Stock of Fruits</h5>
                            <p className="text-white">Besides our own farm, Some farmers are working with us to deliver the maximum fresh fruits to our consumers!</p>
                        </div>
                    </div>
                    {/* Third picture  ends*/}
                </div>



                {/* Previous btn starts*/}
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                {/* previous btn ends */}



                {/* Next btn starts*/}
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                {/* Next btn ends */}
            </div>
            {/* carosel ends */}


            <Inventory/>
        </div>
    );
};

export default Banner;