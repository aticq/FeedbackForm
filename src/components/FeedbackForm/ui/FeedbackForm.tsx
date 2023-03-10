import {useState, ChangeEvent, FormEvent} from 'react';
import styles from './FeedbackForm.module.scss';
import InputMask from 'react-input-mask';
import {Button} from "helpers/Button/Button";

export const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const phoneNumberHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const inputPhoneNumber = event.target.value;
        const numericPhoneNumber = inputPhoneNumber.replace(/\D/g, '');
        const formattedPhoneNumber = numericPhoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 ($2) $3-$4-$5');
        setPhone(formattedPhoneNumber);
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const regex = /[!@#$%^&*(),.?":{}|<>]/g; // Регулярное выражение для поиска специальных символов
        if (!name || regex.test(name)) {
            alert('Ошибка в имени');
        } else if (!message || regex.test(message)) {
            alert('Ошибка в сообщении');
        } else {
            const formData = {
                name: name,
                phone: phone,
                message: message
            };
            const jsonData = JSON.stringify(formData);

            const a = document.createElement('a');
            const file = new Blob([jsonData], {type: 'application/json'});
            a.href = URL.createObjectURL(file);
            a.download = 'youForm.json';
            a.click();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <div className={styles.feedbackForm}>
                    <div className={styles.title}>
                        Остались вопросы?
                        <br/>
                        Свяжитесь с нами!
                    </div>
                    <div className={styles.form}>
                        <div className={styles.input}>
                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                            <label>Имя</label>
                        </div>
                        <div className={styles.input}>
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                value={phone}
                                onChange={phoneNumberHandler}
                                required
                            />
                            <label>Номер телефона</label>
                        </div>
                        <div className={styles.input}>
                            <textarea
                                className={styles.message}
                                value={message}
                                onChange={handleMessageChange}
                                required
                            />
                            <label>Сообщение</label>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button type="submit">Отправить</Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};