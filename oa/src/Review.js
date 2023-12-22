import React, { useState, useEffect, Link } from 'react'
import { FormControl, FormControlLabel, FormLabel, Grid,RadioGroup,TextField, Radio, Snackbar, IconButton } from '@mui/material';
import { useForm } from './components/useForm';
import {useNavigate, Router, Routes, BrowserRouter} from 'react-router-dom'
import { Button } from './components/Button'
import { getForm, setForm } from './services/formService'
import { CloseRounded } from '@mui/icons-material';
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

    const [open, setOpen] = React.useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(true);
        setForm(values)
        resetForm()
        navigate('/')
    }

    const navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }
    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseRounded fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
 

    return (
        <>
            <Button onClick={routeChange} text='Edit'/>
            <Button onClick={handleSubmit} type='submit' text='Submit'/>
        <div>
        </div>
        <Snackbar
                anchorOrigin={{
                    horizontal: "left",
                    vertical: "bottom",
                }}
                open={open}
                autoHideDuration={50000}
                message="The form was successfully submitted"
                onClose={handleClose}
                action={action}
            />
        </>
    )
    }
