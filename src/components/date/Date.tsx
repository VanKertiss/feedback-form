import { useState } from 'react';
import HS from '../../App.module.css';

const Date = () => {
    const [date, setDate] = useState('');

    const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
        setDate(e.currentTarget.value);
        console.log(date);
    }

    return (
        <div className={HS.formItem}>
            <label htmlFor="date"> Дата рождения</label>
            <input
                id='date'
                onInput={changeInput}
                className={HS.inputDate}
                type="date"
                value={date} />
            <span className={HS.error}></span>

        </div>
    );
}

export default Date;