import React from 'react';

const Error = ({ message }) => {
    return (
        <span className="badge badge-danger">{message}</span>
    );
};

export default Error;