import React, {useState} from 'react';
import {Button} from "helpers/Button/Button";
import styles from './HomePage.module.scss'
import {Modal} from "helpers/Modal/Modal";
import {FeedbackForm} from "components/FeedbackForm";

export const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModalHandler = () => {
        setIsOpen(true)
    }
    const closeModalHandler = () => {
        setIsOpen(false)
    }
    return (
        <div className={styles.container}>
            <Button onClick={openModalHandler}>Связаться с Администрацией</Button>
            <Modal isOpen={isOpen} onClose={closeModalHandler}>
                <FeedbackForm/>
            </Modal>
        </div>
    );
};
