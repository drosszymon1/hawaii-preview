import React, { ChangeEvent, useEffect } from 'react';
import "./style.css";
import { emailRegex } from '@/constants/regex';

interface InputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ value, onChange }) => {
    const validationOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        if (e.target.value.length > 0 && !emailRegex.test(e.target.value)) {
            e.target.classList.add('error');
        } 

        if (e.target.value.length > 0 && emailRegex.test(e.target.value)) {
            e.target.classList.add('success');
        }
    };

    useEffect(() => {
        const input = document.querySelector('.input');
        input?.addEventListener('focus', () => {
            input.classList.remove('error');
            input.classList.remove('success');
        });
    }, []);

    return (
        <input className='input body1' type="text" placeholder='Email address' value={value} onChange={onChange} onBlur={(e) => validationOnBlur(e)}/>
    );
};

export default Input;