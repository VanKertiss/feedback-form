import { useState } from 'react';
import HS from '../../App.module.css';

const Email = () => {
    const [email, setEmail] = useState('');

    const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        console.log(email);
    }

    return (
        <div className={HS.formItem}>
            <label htmlFor="email"> Электронная почта</label>
            <input
                id='email'
                onInput={changeInput}
                className={HS.inputEmail}
                type="email"
                value={email} />
            <span className={HS.error}></span>

        </div>
    );
};

export default Email;