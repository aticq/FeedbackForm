import React, {ButtonHTMLAttributes, FC} from 'react';
import styles from "./Modal.module.scss";

interface ModalPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    isOpen:boolean,
    onClose:()=>void
}

export const Modal: FC<ModalPropsType> = (props) => {
    const { isOpen, onClose, children } = props;
    if (!isOpen) return null;
    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    X
                </button>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}
