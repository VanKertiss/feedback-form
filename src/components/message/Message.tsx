import { useState } from 'react';
import { useDispatch } from 'react-redux';
import HS from '../../App.module.css';
import { addMessage } from '../../store/reducer/inputDataSlice';

const Message = () => {
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState('');
    const dispatch = useDispatch();

    const changeInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value);
        setMessageError(e.currentTarget.value.length < 10 ? 'длинна сообщения не менее 10-и символов' : '');
    }

    const addInfo = () => {
        dispatch(addMessage({message, messageError}))
    }

    return (
        <div className={HS.messageContainer}>
            <label htmlFor="email"> Сообщение</label>
            <div className={HS.inputContainer}>
                <textarea
                    id='message'
                    onInput={changeInput}
                    onBlur={addInfo}
                    className={HS.inputMessage}
                    value={message}
                    rows={3}
                    maxLength={300} />
                <span className={HS.error}>{messageError}</span>
            </div>
        </div>
    );
};

export default Message;