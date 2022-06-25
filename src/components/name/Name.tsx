import { useState } from 'react';
import HS from './Name.module.css';

const Name = () => {
    const [name, setName] = useState('');

    const changeInput = (e: React.FormEvent<HTMLInputElement>) => {

        setName(e.currentTarget.value)
        console.log(name);
    }

    return (
        <div className={HS.nameContainer}>
            <label htmlFor="name"> ФИО
                <input
                    id='name'
                    onChange={changeInput}
                    className={HS.inputName}
                    type="text"
                    value={name} />
                <span className={HS.error}></span>
            </label>
        </div>
    );
}

export default Name;