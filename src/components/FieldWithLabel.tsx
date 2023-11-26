import React from 'react';
import {Field} from "formik";
import type {FieldType} from "../types/FieldType";
import cn from 'classnames';
import style from './FieldWithLabel.module.scss';

const FieldWithLabel:React.FC<FieldType> = ({name, title, placeholder, type, isMessage}) => {
    if (isMessage) {
        return (
            <div className={cn(style.inputWrapper, {
                [style.message]: true
            })}>
                <label htmlFor={name}>{title}</label>
                <Field as='textarea' id={name} name={name} placeholder={placeholder}/>
            </div>
        );
    }

    return (
        <div className={style.inputWrapper}>
            <label htmlFor={name}>{title}</label>
            <Field type={type ? type : 'text'} id={name} name={name} placeholder={placeholder}/>
        </div>
    );
};

export default FieldWithLabel;