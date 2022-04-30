import React from 'react';
import StoreMapLocation from '../StoreMapLocation.js/StoreMapLocation';

const Contact = () => {
    return (
        <div>
            <div className="container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12">
                <section className="mb-20 text-gray-800">
                    <h2 className='text-white font-[Poppins] text-2xl font-light border-b-2 ml-5 mr-5 md:ml-64 md:mr-64 mb-10'>Get In Touch</h2>
                    <p className="text-center text-white mb-10 md:mb-14 mx-auto">
                        Did you liked my work? Do you have any suggestions to give? Send me a message.
                    </p>
                    <div className="md:flex md:justify-between mr-5">
                        <div className='w-max ml-32'>
                            <StoreMapLocation></StoreMapLocation>
                        </div>
                        <div className="w-96 grid grid-cols-1 gap-4 mr-28">
                            <h1 className='text-xl text-white font-light'>Contact Form</h1>
                            <input className='rounded p-2' type="text" placeholder='Your Name' />
                            <input className='rounded p-2' type="text" placeholder='Your Name' />
                            <input className='rounded p-2' type="text" placeholder='Your Name' />
                            <input className='rounded p-2' type="text" placeholder='Your Name' />
                            <button className='pt-3 pb-3 pl-4 pr-4 w-80 mx-auto rounded bg-orange-600 hover:bg-orange-700 mb-5 text-white' data-mdb-ripple="true" data-mdb-ripple-color="light">Start Now</button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Contact;