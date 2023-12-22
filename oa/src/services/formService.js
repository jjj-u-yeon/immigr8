import * as React from 'react'

const KEYS ={
    employees:'employees',
    employeeId:'employeeId'
}


export function setForm(data) {
    localStorage.setItem('formData', JSON.stringify(data))

}

export function getForm(field) {
    //console.log(localStorage.getItem("fromData"))
    let res = JSON.parse(JSON.stringify(localStorage.getItem("formData")));

    return res;
}