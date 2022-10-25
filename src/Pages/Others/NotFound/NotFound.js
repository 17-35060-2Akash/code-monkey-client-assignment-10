import React from 'react';
import image from '../../../assets/others/dead.png';

const NotFound = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <img src={image} className='mt-5 pt-4 w-50' alt="" />
            <p className='display-3 fw-normal'>Oops!</p>
            <h3 className='display-2 fw-bolder p-4 rounded-5 mt-2 bg-warning' >404</h3>
            <h2 className='py-4 text-info display-6 fw-normal text-danger' >Sorry, Page Not Found!</h2>
        </div>
    );
};

export default NotFound;