import React from 'react';

const SingleItem = ({item}) => {
    return (
        <div>
            <h1>{item._id}</h1>
        </div>
    );
};

export default SingleItem;