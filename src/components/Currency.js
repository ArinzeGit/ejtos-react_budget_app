import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setCurrency] = useState(currency);
    
    return (
        <div className='alert alert-secondary'  style={{position:'relative'}}>
            <button>Currency ({newCurrency})</button>
            <ul  style={{display: none}}>
                <li onclick="setCurrency('$ Dollar')">$ Dollar</li>
                <li onclick="setCurrency('&#163; Pound')">&#163; Pound</li>
                <li onclick="setCurrency('&#8364; Euro')">&#8364; Euro</li>
                <li onclick="setCurrency('&#8377; Ruppee')">&#8377; Ruppee</li>
            </ul>
        </div>
        );
};
export default Currency;
