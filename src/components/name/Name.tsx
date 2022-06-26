import { useState } from 'react';
import HS from '../../App.module.css';

const Name = () => {
    const [name, setName] = useState('');

    const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        console.log(name);
    }

    return (
        <div className={HS.formItem}>
            <label htmlFor="name"> ФИО</label>
            <input
                id='name'
                onChange={changeInput}
                className={HS.inputName}
                type="text"
                value={name} />
            <span className={HS.error}></span>

        </div>
    );
}

export default Name;