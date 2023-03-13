import * as Yup from 'yup';

export const companyAboutSchema = Yup.object().shape({
    cname: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required')
        .matches(/^[a-zA-Z0-9]+$/, 'Cannot contain special characters or spaces'),
    domain: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    email: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    phone: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    city: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    statement: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
    description: Yup.string()
        .max(120, 'Must be 120 characters or less')
        .required('Required')
})


export const postJobSchema = Yup.object().shape({
    title: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required')
        .matches(/^[a-zA-Z0-9]+$/, 'Cannot contain special characters or spaces'),
    level: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    type: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    compensation: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
    matchPercentage: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    description: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
    responsibilites: Yup.string()
        .max(120, 'Must be 120 characters or less')
        .required('Required')
})