import React, { useState, useEffect, Link } from 'react'
import { FormControl, FormControlLabel, FormLabel, Grid,RadioGroup,TextField, Radio } from '@mui/material';
import { useForm } from './components/useForm';
import {useNavigate, Router, Routes, BrowserRouter} from 'react-router-dom'
import { Button } from './components/Button'
import { setForm } from './services/formService'

const initialValues = {
    givenNameA: '',
    middleNameA: '',
    familyNameA: '',
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

export default function Form() {
    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if ('givenNameA' in fieldValues)
            temp.givenNameA = fieldValues.givenNameA ? "" : "This field is required."
        setErrors({
            ...temp
        })
    }

    useEffect(() => {
        const data = localStorage.getItem("formData");
        setValues({...values, data});
      }, [])

    const{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm

    }=useForm(initialValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
    }

    const navigate = useNavigate();
    const routeChange = () => {
        let path = '/review';
        navigate(path);
        setForm(values);
    }

    return (
        <form margin={1} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}></Grid>
                    <TextField
                    variant='outlined'
                    label='Given Name'
                    name='givenNameA'
                    value={values.givenNameA}
                    onChange={handleInputChange}
                    />
                    <TextField
                    variant='outlined'
                    label='Family Name'
                    shrink={true}
                    name='familyNameA'
                    value={values.familyNameA}
                    onChange={handleInputChange}
                    />
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Type of Housing</FormLabel>
                        <RadioGroup
                            row
                            name='houseType'
                            value={values.houseType}
                            onChange={handleInputChange}>
                            <FormControlLabel value="Apartment" control={<Radio/>} label="Apartment"/>
                            <FormControlLabel value="Flat" control={<Radio/>} label="Flat"/>
                            <FormControlLabel value="House" control={<Radio/>} label="House"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            <Button onClick={routeChange} text='Next'/>
        </form>
    )
}