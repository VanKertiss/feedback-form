import { useState } from 'react';
import HS from '../../App.module.css';
import { useDispatch } from 'react-redux';
import { addDate } from '../../store/reducer/inputDataSlice';

const Date = () => {
    const [date, setDate] = useState('');
    const dispatch = useDispatch();

    const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
        setDate(e.currentTarget.value);
    }

    const addInfo = () => {
        dispatch(addDate({date, dateError: ''}))
    }

    return (
        <div className={HS.formItem}>
            <label htmlFor="date"> Дата рождения</label>
            <div className={HS.inputContainer}>
                <input
                    name='date'
                    id='date'
                    onInput={changeInput}
                    onBlur={addInfo}
                    className={HS.inputDate}
                    type="date"
                    value={date} />
                <span className={HS.error}></span>
            </div>
        </div>
    );
}

export default Date;