import React, { useState,useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState("£ Pound");
    const [listVisible, setListVisible] = useState(false);
    const handleCurrencyChange = (currency) => {
        setNewCurrency(currency);
        setListVisible(false);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency.charAt(0),
        });
    };
    
    return (
        <div className='alert alert-primary' style={{ position: 'relative' }}>
            <button style={{ width: '100%', border:'none'}} onClick={() => setListVisible(!listVisible)}>Currency ({newCurrency})</button>
            {listVisible && (
                <ul style={{ position: 'absolute',left:0,top:'60px',fontSize:'1.5em', border:'4px solid #4F7942',borderRadius:'10px', width:'100%' ,color:'black',padding:0,textAlign:'center', backgroundColor:'#50C878',listStyle: 'none' }}>
                    <li onClick={() => handleCurrencyChange('$ Dollar')} style={{ cursor: 'pointer' }}>$ Dollar</li>
                    <li onClick={() => handleCurrencyChange('£ Pound')} style={{ cursor: 'pointer' }}>£ Pound</li>
                    <li onClick={() => handleCurrencyChange('€ Euro')} style={{ cursor: 'pointer' }}>€ Euro</li>
                    <li onClick={() => handleCurrencyChange('₹ Rupee')} style={{ cursor: 'pointer' }}>₹ Rupee</li>
                </ul>
            )}
            
        </div>
        );
};
export default Currency;
