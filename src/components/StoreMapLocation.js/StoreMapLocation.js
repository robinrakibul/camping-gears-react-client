import React from 'react';
import Iframe from 'react-iframe';

const StoreMapLocation = () => {
    return (
        <div>
            <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.65890250301!2d90.32726109792911!3d23.81046589717431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1651312429873!5m2!1sen!2sbd"
                className="h-96 w-full border-2 rounded-lg shadow-lg" allowFullScreen="" loading="lazy"></Iframe>
        </div>
    );
};

export default StoreMapLocation;