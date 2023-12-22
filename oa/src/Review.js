import React, { useState, useEffect, Link } from 'react'
import { Paper, Tooltip, Select, FormControl, FormControlLabel, FormLabel, Grid,RadioGroup,TextField, Radio, Snackbar, IconButton } from '@mui/material';
import { useForm } from './components/useForm';
import {useNavigate, Router, Routes, BrowserRouter} from 'react-router-dom'
import { Button } from './components/Button'
import { getForm, setForm } from './services/formService'
import { CloseRounded, HelpOutline } from '@mui/icons-material';
import states from './consts/states.json'

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
        //Send request to the backend here
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
        <><Paper className='Paper' elevation={5}>
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
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                    <TextField
                    variant='outlined'
                    label='Middle Name (if any)'
                    name='middleNameA'
                    value={values.middleNameA}
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                    <TextField
                    required={true}
                    variant='outlined'
                    label='Family Name'
                    shrink={true}
                    name='familyNameA'
                    value={values.familyNameA}
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                    </Grid>
                <h3>Credit Card Billing Information</h3>
                <Grid item xs={12} className='input'>
                <TextField
                    required={true}
                    variant='outlined'
                    label='Given Name'
                    name='givenName'
                    value={values.givenName}
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                    <TextField
                    variant='outlined'
                    label='Middle Name (if any)'
                    name='middleName'
                    value={values.middleName}
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                    <TextField
                    required={true}
                    variant='outlined'
                    label='Family Name'
                    shrink={true}
                    name='familyName'
                    value={values.familyName}
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                </Grid>
                <Grid item xs={12} className='input'>
                <TextField
                    required={true}
                    variant='outlined'
                    label='Street Number and Name'
                    name='street'
                    value={values.street}
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                    <TextField
                    variant='outlined'
                    label='Unit Number (if applicable)'
                    name='unitNumber'
                    value={values.unitNumber}
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                    <FormControl>
                        <FormLabel>Type of Housing</FormLabel>
                        <RadioGroup
                        row
                            name='houseType'
                            value={values.houseType}
                            InputProps={{readOnly: true, disableUnderline: true}}>
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
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                    <Select InputProps={{readOnly: true, disableUnderline: true}} label="State" value={values.state} name="state" required={true}>
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
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                </Grid>
                <Grid item xs={12} className='input'>
                    <TextField
                    required={true}
                    variant='outlined'
                    label='Daytime Telephone Number'
                    name='phone'
                    value={values.phone}
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                    <TextField
                    required={true}
                    variant='outlined'
                    label='Email Address'
                    shrink={true}
                    name='email'
                    value={values.email}
                    InputProps={{readOnly: true, disableUnderline: true}}
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
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                    <TextField
                    variant='outlined'
                    label='Middle Name (if any)'
                    name='middleName'
                    value={values.middleName}
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                    <TextField
                    required={true}
                    variant='outlined'
                    label='Family Name'
                    shrink={true}
                    name='familyName'
                    value={values.familyName}
                    InputProps={{readOnly: true, disableUnderline: true}}
                    />
                </Grid>
                <Button onClick={routeChange} text='Edit'/>
                <Button onClick={handleSubmit} type='submit' text='Submit'/>
        </form>
        </Paper>
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
