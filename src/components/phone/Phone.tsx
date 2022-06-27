import { useState } from 'react';
import HS from '../../App.module.css';

const Phone = () => {
    const [phone, setPhone] = useState('');

    const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
        setPhone(e.currentTarget.value)
        console.log(phone);
    }

    return (
        <div className={HS.formItem}>
            <label htmlFor="phone"> Телефон</label>
            <input
                id='phone'
                onInput={changeInput}
                className={HS.inputPhone}
                type="tel"
                value={phone} />
            <span className={HS.error}></span>

        </div>
    );
};

export default Phone;