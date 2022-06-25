import { useState } from 'react';
import HS from './Message.module.css';

const Message = () => {
    const [message, setMessage] = useState('');

    const changeInput = (e:React.FormEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
        console.log(message);
    }

    return (
        <div className={HS.messageContainer}>
            <label htmlFor="email"> Сообщение
                <input 
                id='message' 
                onInput={changeInput} 
                className={HS.inputMessage} 
                type="message" 
                value={message} />
                <span className={HS.error}></span>
            </label>
        </div>
    );
};

export default Message;