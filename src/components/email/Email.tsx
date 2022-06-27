import { useState } from 'react';
import HS from '../../App.module.css';
import { useDispatch } from 'react-redux';
import { addEmail } from '../../store/reducer/inputDataSlice';

const Email = () => {
    const [email, setEmail] = useState('');
    const [emailError, seEmailError] = useState('');
    const dispatch = useDispatch();

    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        seEmailError(reg.test(e.currentTarget.value) === false
            ? 'Введите корректный e-mail'
            : '')
    }

    const addInfo = () => {
        dispatch(addEmail({email, emailError}))
    }

    return (
        <div className={HS.formItem}>
            <label htmlFor="email"> Электронная почта</label>
            <div className={HS.inputContainer}>
                <input
                    name='email'
                    id='email'
                    onInput={changeInput}
                    onBlur={addInfo}
                    className={HS.inputEmail}
                    type="email"
                    value={email} />
                <span className={HS.error}>{emailError}</span>
            </div>
        </div>
    );
};

export default Email;