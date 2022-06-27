import { useState } from 'react';
import HS from '../../App.module.css';
import { useDispatch } from 'react-redux';
import { addPhone } from '../../store/reducer/inputDataSlice';

const Phone = () => {
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();

    const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
        setPhone(e.currentTarget.value)
    }

    const addInfo = () => {
        dispatch(addPhone({phone, phoneError: ''}))
    }

    return (
        <div className={HS.formItem}>
            <label htmlFor="phone"> Телефон</label>
            <div className={HS.inputContainer}>
                <input
                    name='phone'
                    id='phone'
                    onInput={changeInput}
                    onBlur={addInfo}
                    className={HS.inputPhone}
                    type="tel"
                    value={phone} />
                <span className={HS.error}></span>
            </div>
        </div>
    );
};

export default Phone;