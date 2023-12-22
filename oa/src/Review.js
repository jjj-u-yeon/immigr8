import React, { useState, useEffect, Link } from 'react'
import { FormControl, FormControlLabel, FormLabel, Grid,RadioGroup,TextField, Radio } from '@mui/material';
import { useForm } from './components/useForm';
import {useNavigate, Router, Routes, BrowserRouter} from 'react-router-dom'
import { Button } from './components/Button'
import { getForm, setForm } from './services/formService'

const initialValues = {
    givenNameA: getForm("givenNameA"),
    middleNameA: '',
    familyNameA: getForm("familyNameA"),
    givenNameC: '',
    middleNameC: '',
    familyNameC: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    houseType: 'House',
    creditExpiry: new Date(),
}

export default function Review() {

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if ('givenNameA' in fieldValues)
            temp.givenNameA = fieldValues.givenNameA ? "" : "This field is required."
        setErrors({
            ...temp
        })
    }

    const{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm

    }=useForm(initialValues, true, validate);

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("u good to submit?")
        setForm(values)
        resetForm()
    }

    const navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }

    return (
        <>
            <Button onClick={routeChange} text='Edit'/>
            <Button onClick={handleSubmit} type='submit' text='Submit'/>
        <div>
        </div>
        </>
    )
    }
