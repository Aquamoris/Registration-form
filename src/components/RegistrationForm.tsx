import React from 'react';
import {Form, Formik} from "formik";
import {Link} from "react-router-dom";
import {FieldType} from "../types/FieldType";
import FieldWithLabel from "./FieldWithLabel";
import style from "./Registration.module.scss";

interface MyFormValues {
    fio: string,
    phone: string,
    email: string,
    message: string,
}

const RegistrationForm:React.FC = () => {
    const fields: FieldType[] = [
        {name: 'fio', title: 'ФИО', placeholder: 'Епифан'},
        {name: 'phone', title: 'Телефон', placeholder: '+7 (423) 123-45-67'},
        {name: 'email', title: 'E-mail', placeholder: 'mail@example.com', type: 'email'},
        {name: 'message', title: 'Сообщение', placeholder: 'Приветствую!', isMessage: true}
    ]

    const initialValues: MyFormValues = {
        fio: '',
        phone: '',
        email: '',
        message: ''
    }

    return (
        <div className={style.formWrapper}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                <Form className={style.form}>
                    <h5 className={style.title}>Обратная форма</h5>

                    <div className={style.fieldsGap}>
                        {
                            fields.map(f => (
                                <FieldWithLabel
                                    name={f.name}
                                    title={f.title}
                                    placeholder={f.placeholder}
                                    type={f.name === 'email' ? f.type : null}
                                    isMessage={f.isMessage}
                                />
                            ))
                        }
                    </div>

                    <div className={style.policy}>
                        Отправляя форму, Вы соглашаетесь на <Link to='/'>обработку персональных данных</Link>
                    </div>

                    <button className={style.submitButton} type="submit">Отправить</button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;