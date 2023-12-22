import React, { useState } from 'react'
import { getForm } from '../services/formService';

export function useForm(initialValues, validateOnChange = false, validate) {


    const [values, setValues] = useState(() => {

        const storedValue = getForm();
        return storedValue ? JSON.parse(storedValue) : initialValues
    });
    const [errors, setErrors] = useState([]);

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        if(validateOnChange){
            validate({[name]: value})
        }
    }
    const resetForm = () => {
        setValues(initialValues);
        alert("are you here")
        localStorage.removeItem("formData")
        setErrors({});
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}



