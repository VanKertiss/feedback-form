import { useState } from 'react';
import HS from './Email.module.css';

const Email = () => {
    const [email, setEmail] = useState('');

    const changeInput = (e:React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        console.log(email);
    }

    return (
        <div className={HS.emailContainer}>
            <label htmlFor="email"> Электронная почта
                <input 
                id='email' 
                onInput={changeInput} 
                className={HS.inputEmail} 
                type="email" 
                value={email} />
                <span className={HS.error}></span>
            </label>
        </div>
    );
};

export default Email;