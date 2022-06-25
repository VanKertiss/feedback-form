import { useState } from 'react';
import HS from './Phone.module.css';

const Phone = () => {
    const [phone, setPhone] = useState('');

    const changeInput = (e:React.FormEvent<HTMLInputElement>) => {
        setPhone(e.currentTarget.value)
        console.log(phone);
    }

    return (
        <div className={HS.phoneContainer}>
            <label htmlFor="phone"> Телефон
                <input 
                id='phone' 
                onInput={changeInput} 
                className={HS.inputPhone} 
                type="phone" 
                value={phone} />
                <span className={HS.error}></span>
            </label>
        </div>
    );
};

export default Phone;