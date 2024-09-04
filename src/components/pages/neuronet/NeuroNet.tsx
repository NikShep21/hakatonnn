import React, { useState, FormEvent, useRef, useEffect } from 'react';
import styles from './NeuroNet.module.scss';
import submitIcon from '../../../assets/submit.png';

interface Message {
    text: string;
    sender: 'user' | 'server';
}

const NeuroNet: React.FC = () => {
    const [response, setResponse] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isSending, setIsSending] = useState<boolean>(false); 
    const windowRef = useRef<HTMLDivElement | null>(null); 
    const inputRef = useRef<HTMLInputElement | null>(null); 

    const sendData = async (e: FormEvent) => {
        e.preventDefault();

        if (isSending) return;

        setIsSending(true); 
        const userMessage: Message = { text: response, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        setResponse(''); 

        try {
            const res = await fetch('https://positive-negative.onrender.com/classify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: response }),
            });

            const data = await res.json();

            const serverMessage: Message = { text: data.class_name, sender: 'server' };
            setMessages((prevMessages) => [...prevMessages, serverMessage]);
        } catch (error) {
            console.error('Error:', error);
        }

        setIsSending(false); 

        
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    
    useEffect(() => {
        if (windowRef.current) {
            windowRef.current.scrollTop = windowRef.current.scrollHeight;
        }
        if (!isSending && inputRef.current) {
            inputRef.current.focus(); 
        }
    }, [messages, isSending]);

    return (
        <>
            <div className={styles.window} ref={windowRef}>
                {messages && messages.length > 0 ? null : (
                    <div className={styles.text}>
                        Напишите отзыв о чем либо для модели, и она ответит вам, позитивный он или негативный
                    </div>
                )}

                {messages.map((msg, index) => (
                    <div key={index} className={styles.messageWrapper}>
                        <div
                            className={
                                msg.sender === 'user' ? styles.userMessage : styles.serverMessage
                            }
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
            <form className={styles.form} onSubmit={sendData}>
                <div className={styles.containerForm}>
                    <input
                        ref={inputRef} 
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                        className={styles.input}
                        placeholder="Напишите отзыв"
                        type="text"
                        disabled={isSending} 
                    />
                    <button type="submit" className={styles.button} disabled={isSending}>
                        <img className={styles.img} src={submitIcon} />
                    </button>
                </div>
            </form>
        </>
    );
};

export default NeuroNet;