import React, { useState, useEffect } from 'react'
import { FormControl, FormControlLabel, FormLabel, Grid,RadioGroup,TextField, Radio, Button } from '@mui/material';
import { useForm } from './components/useForm';

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

export default function EmployeeForm() {

    const{
        values,
        setValues,
        handleInputChange

    }=useForm(initialValues);

    return (
        <form margin={1}>
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
            <Button variant='contained' size='large' label='submite'/>
        </form>
    )
}