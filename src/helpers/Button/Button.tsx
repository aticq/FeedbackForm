import { ButtonHTMLAttributes, FC } from 'react';
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    clear?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, clear,  ...otherProps }) => {
    const classNames = `${styles.button} ${clear ? styles.clear : ''}`;
    return (
        <button type="button" className={classNames} {...otherProps}>
            {children}
        </button>
    );
};