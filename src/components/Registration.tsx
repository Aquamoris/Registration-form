import React from 'react';
import style from './Registration.module.scss'
import RegistrationForm from "./RegistrationForm";

const Registration:React.FC = () => {
    return (
        <div className={style.wrapper}>
            <RegistrationForm />
        </div>
    );
};

export default Registration;