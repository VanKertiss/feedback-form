import { useState } from 'react';
import HS from './Date.module.css';

const Date = () => {
    const [date, setDate] = useState('');

    const changeInput = (e:React.FormEvent<HTMLInputElement>) => {
        setDate(e.currentTarget.value);
        console.log(date);
    }

    return (
        <div className={HS.dateContainer}>
            <label htmlFor="date"> Дата рождения
                <input 
                id='date' 
                onInput={changeInput} 
                className={HS.inputDate} 
                type="date" 
                value={date} />
                <span className={HS.error}></span>
            </label>
        </div>
    );
}

export default Date;