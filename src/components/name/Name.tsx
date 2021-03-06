import { useState } from 'react';
import { useDispatch } from 'react-redux';
import HS from '../../App.module.css';
import { addName } from '../../store/reducer/inputDataSlice';

const Name = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const dispatch = useDispatch();

    const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
        const nameData = e.currentTarget.value.toUpperCase().replace(/ +/g, " ");
        const nameArr = e.currentTarget.value.toUpperCase().replace(/ +/g, " ").split(' ');
        setName(nameData);
        setNameError(nameArr.length !== 2
            ? 'Должно состоять из 2-ух слов'
            : nameArr[0].length < 3 || nameArr[1].length < 3
                ? 'Имя и фамилия состоят не менее чем из трех букв'
                : nameArr[0].length > 30 || nameArr[1].length > 30
                    ? 'Имя и фамилия состоят не , более чем из тридцати букв'
                    : /[A-Z]/i.test(nameData)
                        ? ' '
                        : 'Только латинские буквы');           
    }

    const addData = () => {
        dispatch(addName({name, nameError}))
    }

    return (
        <div className={HS.formItem}>
            <label htmlFor="name"> Имя и фамилия</label>
            <div className={HS.inputContainer}>
                <input
                    name='name'
                    id='name'
                    onChange={changeInput}
                    onBlur={addData}
                    className={HS.inputName}
                    type="text"
                    value={name} />
                <span className={HS.error}>{nameError}</span>
            </div>
        </div>
    );
}

export default Name;