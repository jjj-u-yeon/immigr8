import React, { useState, useEffect, Link } from 'react'
import { Paper,FormControl, FormControlLabel, FormLabel, Grid,RadioGroup,TextField, Radio, Select, Tooltip, IconButton } from '@mui/material';
import {HelpOutline} from '@mui/icons-material';
import { useForm } from './components/useForm';
import {useNavigate, Router, Routes, BrowserRouter} from 'react-router-dom'
import { Button } from './components/Button'
import { setForm } from './services/formService'
import states from './consts/states.json'
import './App.css';
import {DateField} from '@mui/material'

const initialValues = {
    givenNameA: '',
    middleNameA: '',
    familyNameA: '',
    givenName: '',
    middleName: '',
    familyName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    houseType: 'House',
    unitNumber: '',
    zipCode: '',
    creditNum: '',
    creditType: '',
    creditExpiry: new Date(),
    authorizedAmount: '',
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
        <Paper className='Paper' elevation={5}>
        <form spacing={2} onSubmit={handleSubmit}>
            <Grid >
                <h3>Applicant's/Petitioner's/Requester's Information</h3>
                <Grid  xs={12} className='input'>
                    <TextField
                    required={true}
                    variant='outlined'
                    label='Given Name'
                    name='givenNameA'
                    value={values.givenNameA}
                    onChange={handleInputChange}
                    />
                    <TextField
                    variant='outlined'
                    label='Middle Name (if any)'
                    name='middleNameA'
                    value={values.middleNameA}
                    onChange={handleInputChange}
                    />
                    <TextField
                    required={true}
                    variant='outlined'
                    label='Family Name'
                    shrink={true}
                    name='familyNameA'
                    value={values.familyNameA}
                    onChange={handleInputChange}
                    />
                    </Grid>
                <h3>Credit Card Billing Information</h3>
                <Tooltip title="Credit Card Holder's Name as it appears on the card" placement='bottom'>
                    <HelpOutline/>
                </Tooltip>
                <Grid item xs={12} className='input'>
                <TextField
                    required={true}
                    variant='outlined'
                    label='Given Name'
                    name='givenName'
                    value={values.givenName}
                    onChange={handleInputChange}
                    />
                    <TextField
                    variant='outlined'
                    label='Middle Name (if any)'
                    name='middleName'
                    value={values.middleName}
                    onChange={handleInputChange}
                    />
                    <TextField
                    required={true}
                    variant='outlined'
                    label='Family Name'
                    shrink={true}
                    name='familyName'
                    value={values.familyName}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} className='input'>
                <TextField
                    required={true}
                    variant='outlined'
                    label='Street Number and Name'
                    name='street'
                    value={values.street}
                    onChange={handleInputChange}
                    />
                    <TextField
                    variant='outlined'
                    label='Unit Number (if applicable)'
                    name='unitNumber'
                    value={values.unitNumber}
                    onChange={handleInputChange}
                    />
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
                <Grid item xs={12} className='input'>
                <TextField
                    required={true}
                    variant='outlined'
                    label='City or Town'
                    name='city'
                    value={values.city}
                    onChange={handleInputChange}
                    />
                    <Select onChange={handleInputChange} label="State" value={values.state} name="state" required={true}>
                        {states.map(item => (
                            <option>
                                {item.abbreviation}
                            </option>
                        ))}
                    </Select>
                    <TextField
                    required={true}
                    variant='outlined'
                    label='ZIP Code'
                    shrink={true}
                    name='zipCode'
                    value={values.zipCode}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} className='input'>
                    <TextField
                    required={true}
                    variant='outlined'
                    label='Daytime Telephone Number'
                    name='phone'
                    value={values.phone}
                    onChange={handleInputChange}
                    />
                    <TextField
                    required={true}
                    variant='outlined'
                    label='Email Address'
                    shrink={true}
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <h3>Credit Card Information</h3>
                <Grid item xs={12} className='input'>
                <TextField
                    required={true}
                    variant='outlined'
                    label='Credit Card Number'
                    name='creditNum'
                    value={values.creditNum}
                    onChange={handleInputChange}
                    />
                    <TextField
                    variant='outlined'
                    label='Middle Name (if any)'
                    name='middleName'
                    value={values.middleName}
                    onChange={handleInputChange}
                    />
                    <TextField
                    required={true}
                    variant='outlined'
                    label='Family Name'
                    shrink={true}
                    name='familyName'
                    value={values.familyName}
                    onChange={handleInputChange}
                    />
                </Grid>
            <Button onClick={routeChange} text='Next' className="input"/>
        </form>
        </Paper>
    )
}