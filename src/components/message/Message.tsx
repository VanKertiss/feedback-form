import { useState } from 'react';
import HS from '../../App.module.css';

const Message = () => {
    const [message, setMessage] = useState('');

    const changeInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
        console.log(message);
    }

    return (
        <div className={HS.messageContainer}>
            <label htmlFor="email"> Сообщение</label>
            <textarea
                id='message'
                onInput={changeInput}
                className={HS.inputMessage}
                value={message}
                rows= {3}
                maxLength= {300}
 />
            <span className={HS.error}></span>

        </div>
    );
};

export default Message;