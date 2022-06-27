import { useState } from 'react';
import HS from '../../App.module.css';

const Message = () => {
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState('');

    const changeInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value);
        setMessageError(e.currentTarget.value.length < 10 ? 'длинна сообщения не менее 10-и символов' : '');
    }

    return (
        <div className={HS.messageContainer}>
            <label htmlFor="email"> Сообщение</label>
            <div className={HS.inputContainer}>
                <textarea
                    id='message'
                    onInput={changeInput}
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