import {FormikErrors, FormikTouched} from "formik";
import {MyFormValues} from "../components/RegistrationForm";

type FieldType = {
    name: string,
    title: string,
    placeholder: string,
    type?: string | null,
    isMessage?: boolean,
    errors?: FormikErrors<MyFormValues>,
    touched?: FormikTouched<MyFormValues>
}

export type {FieldType};