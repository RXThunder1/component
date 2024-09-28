import React from 'react';
import './Cell.css'; // Assuming you have some CSS for styling

const Cell = ({ isOn, onClick }) => {
    return (
        <div
            className={`cell ${isOn ? 'on' : 'off'}`}
            onClick={onClick}
            style={{
                width: '50px',
                height: '50px',
                backgroundColor: isOn ? 'yellow' : 'gray',
                border: '1px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
            }}
        />
    );
};

export default Cell;