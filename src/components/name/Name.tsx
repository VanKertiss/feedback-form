import { useState } from 'react';
import HS from '../../App.module.css';

const Name = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('')

    const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value.toUpperCase().replace(/ +/g," "));

        const nameArr = e.currentTarget.value.toUpperCase().replace(/ +/g," ").split(' ');
        console.log(nameArr);

        setNameError(nameArr.length !== 2
            ? 'Должно состоять из 2-ух слов'
            : nameArr[0].length < 3 || +nameArr[1].length < 3
                ? 'Имя и фамилия состоят не менее чем из трех букв'
                : nameArr[0].length > 30 || +nameArr[1].length > 30
                    ? 'Имя и фамилия состоят не , более чем из тридцати букв'
                    : !/[A-Z]/i.test(e.currentTarget.value.toUpperCase())
                        ? 'Только латинские буквы' 
                        : '' );
    }

    return (
        <div className={HS.formItem}>
            <label htmlFor="name"> Имя и фамилия</label>
            <input
                id='name'
                onChange={changeInput}
                className={HS.inputName}
                type="text"
                value={name} />
            <span className={HS.error}>{nameError}</span>

        </div>
    );
}

export default Name;