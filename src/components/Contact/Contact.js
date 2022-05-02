import React from 'react';
import StoreMapLocation from '../StoreMapLocation.js/StoreMapLocation';

const Contact = () => {
    return (
        <div id='contact'>
            <div>
                <section className="mb-20 text-gray-800">
                    <h2 className='text-white font-[Poppins] text-2xl font-light border-b-2 ml-5 mr-5 md:ml-64 md:mr-64 mb-10'>Get In Touch</h2>
                    <p className="text-center text-white mb-10 md:mb-14 mx-auto">
                        Did you liked my work? Do you have any suggestions to give? Send me a message.
                    </p>
                    <div className="flex flex-wrap justify-center md:flex md:justify-between">
                        <div className='w-max items-center md:ml-24'>
                            <StoreMapLocation></StoreMapLocation>
                        </div>
                        <form action="https://formspree.io/f/xqkngywv" method="POST" className="w-full md:w-96 items-center ml-5 mr-5 md:mr-24 md:mt-0 grid grid-cols-1 gap-4 mt-10">
                            <h1 className='text-xl text-white font-light'>Contact Form</h1>
                            <input className='rounded p-2' name='name' type="text" placeholder='Your Name' />
                            <input className='rounded p-2' name='email' type="email" placeholder='Your Email Address' />
                            <textarea className='rounded p-2' rows='4' placeholder='Message' name='message'/>
                            <button type="submit" className='pt-3 pb-3 pl-4 pr-4 w-80 mx-auto rounded bg-orange-600 hover:bg-orange-700 mb-5 text-white' data-mdb-ripple="true" data-mdb-ripple-color="light">Send Message</button>
                        </form>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Contact;