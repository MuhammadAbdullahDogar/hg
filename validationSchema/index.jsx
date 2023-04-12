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



export const userAboutSchema = Yup.object().shape({
  fname: Yup.string().required('Required'),
  lname: Yup.string().required('Required'),
  email: Yup
    .string()
    .required('Required')
    .email('Invalid email format')
    .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g, 'Invalid email format')
    .max(255, 'Email must be at most 255 characters long'),
  phone: Yup
    .string()
    .required('Phone number is required')
    .matches(/^\d{10}$/g, 'Invalid phone number format'),
    title: Yup.string().max(5, 'Title must be at most 255 characters long').required('Required'),
    gender: Yup.string().max(255, 'Gender must be at most 255 characters long').required('Required'),
    // dob: Yup.string().max(255, 'Date of birth must be at most 255 characters long').required('Required'),
    city: Yup.string().max(255, 'City must be at most 255 characters long').required('Required'),
    // country: Yup.string().max(255, 'Country must be at most 255 characters long').required('Required'),
    // portfolios: Yup
    //   .array()
    //   .of(
    //     Yup.object().shape({
    //       linkType: Yup.string().max(255, 'Link type must be at most 255 characters long'),
    //       portfolioLink: Yup.string().max(255, 'Portfolio link must be at most 255 characters long'),
    //     })
    //   ),
    description: Yup.string().max(5000, 'Description must be at most 5000 characters long').required('Required')
})


// const UserSchema = Yup.object().shape({
//   role: Yup.string(),
//   fname: Yup.string().required('First name is required'),
//   lname: Yup.string().required('Last name is required'),
//   email: Yup
//     .string()
//     .required('Email is required')
//     .email('Invalid email format')
//     .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g, 'Invalid email format')
//     .max(255, 'Email must be at most 255 characters long')
//     .test('unique-email', 'Email already exists', async function (value) {
//       const user = await User.findOne({ email: value });
//       return !user;
//     }),
//   phone: Yup
//     .string()
//     .required('Phone number is required')
//     .matches(/^\d{10}$/g, 'Invalid phone number format')
//     .test('unique-phone', 'Phone number already exists', async function (value) {
//       const user = await User.findOne({ phone: value });
//       return !user;
//     }),
//   password: Yup
//     .string()
//     .required('Password is required')
//     .min(8, 'Password must be at least 8 characters long')
//     .max(255, 'Password must be at most 255 characters long')
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/,
//       'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
//     ),
//   about: Yup.object().shape({
//     title: Yup.string().max(255, 'Title must be at most 255 characters long'),
//     gender: Yup.string().max(255, 'Gender must be at most 255 characters long'),
//     dob: Yup.string().max(255, 'Date of birth must be at most 255 characters long'),
//     city: Yup.string().max(255, 'City must be at most 255 characters long'),
//     country: Yup.string().max(255, 'Country must be at most 255 characters long'),
//     portfolios: Yup
//       .array()
//       .of(
//         Yup.object().shape({
//           linkType: Yup.string().max(255, 'Link type must be at most 255 characters long'),
//           portfolioLink: Yup.string().max(255, 'Portfolio link must be at most 255 characters long'),
//         })
//       ),
//     description: Yup.string().max(5000, 'Description must be at most 5000 characters long'),
//   }),
//   academic: Yup.object().shape({
//     universityName: Yup.string().max(255, 'University name must be at most 255 characters long'),
//     major: Yup.string().max(255, 'Major must be at most 255 characters long'),
//     startingYear: Yup.string().max(255, 'Starting year must be at most 255 characters long'),
//     endingYear: Yup.string().max(255, 'Ending year must be at most 255 characters long'),
//     obtainedCgpa: Yup.string().max(255, 'Obtained CGPA must be at most 255 characters long'),
//     totalCgpa: Yup.string().max(255, 'Total CGPA must be at most 255 characters long'),
//     learning: Yup.string().max(5000, 'Learning must be at most 5000 characters long'),
//   }),
 



// const UserSchema = Yup.object().shape({
//   role: Yup.string(),
//   fname: Yup.string().required('First name is required'),
//   lname: Yup.string().required('Last name is required'),
//   email: Yup.string()
//     .required('Email is required')
//     .email('Invalid email')
//     .max(255, 'Email must be less than 255 characters')
//     .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email'),
//   phone: Yup.number()
//     .required('Phone number is required')
//     .integer('Phone number must be an integer')
//     .min(1000000000, 'Phone number must be at least 10 digits')
//     .max(9999999999, 'Phone number must be at most 10 digits'),
//   password: Yup.string()
//     .required('Password is required')
//     .min(8, 'Password must be at least 8 characters')
//     .max(50, 'Password must be at most 50 characters')
//     .matches(
//       /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,50}$/,
//       'Password must contain at least one letter and one number'
//     ),
//   about: Yup.object().shape({
//     title: Yup.string().max(50, 'Title must be less than 50 characters'),
//     gender: Yup.string().oneOf(['Male', 'Female', 'Other'], 'Invalid gender'),
//     dob: Yup.string().matches(
//       /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/,
//       'Invalid date of birth, format should be MM/DD/YYYY'
//     ),
//     city: Yup.string().max(50, 'City must be less than 50 characters'),
//     country: Yup.string().max(50, 'Country must be less than 50 characters'),
//     portfolios: Yup.array().of(
//       Yup.object().shape({
//         linkType: Yup.string().max(50, 'Link type must be less than 50 characters'),
//         portfolioLink: Yup.string().url('Invalid portfolio link'),
//       })
//     ),
//     description: Yup.string().max(500, 'Description must be less than 500 characters'),
//   }),
//   academic: Yup.object().shape({
//     universityName: Yup.string().max(50, 'University name must be less than 50 characters'),
//     major: Yup.string().max(50, 'Major must be less than 50 characters'),
//     startingYear: Yup.string()
//       .matches(
//         /^([0-9]{4})$/,
//         'Invalid starting year, format should be YYYY'
//       ),
//     endingYear: Yup.string()
//       .matches(
//         /^([0-9]{4})$/,
//         'Invalid ending year, format should be YYYY'
//       ),
//     obtainedCgpa: Yup.string().matches(
//       /^[0-9](\.[0-9]{1,2})?$/,
//       'Invalid CGPA, format should be a number with up to 2 decimal places'
//     ),
//     totalCgpa: Yup.string().matches(
//       /^[0-9](\.[0-9]{1,2})?$/,
//       'Invalid CGPA, format should be a number with up to 2 decimal places'
//     ),
//     learning: Yup.string().max(500, 'Learning must be less than 500 characters'),
//   }),
//   experience: Yup.object().shape({
//     cName: Yup.string().max(50, 'Company name must be less than 50


// const userValidationSchema = Yup.object().shape({
//     role: Yup.string().oneOf(['admin', 'user']).required(),
//     fname: Yup.string().required('First name is required'),
//     lname: Yup.string().required('Last name is required'),
//     email: Yup.string().email().required('Email is required').lowercase(),
//     phone: Yup
//       .string()
//       .required('Phone number is required')
//       .matches(/^[0-9]+$/, 'Must be only digits')
//       .min(10, 'Must be exactly 10 digits')
//       .max(10, 'Must be exactly 10 digits'),
//     password: Yup
//       .string()
//       .required('Password is required')
//       .min(6, 'Password must be at least 6 characters')
//       .max(20, 'Password must not exceed 20 characters'),
//     about: Yup.object().shape({
//       title: Yup.string().max(100, 'Title must not exceed 100 characters'),
//       gender: Yup.string().oneOf(['male', 'female', 'other'], 'Invalid gender'),
//       dob: Yup
//         .string()
//         .matches(
//           /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/,
//           'Invalid date format'
//         ),
//       city: Yup.string().max(100, 'City name must not exceed 100 characters'),
//       country: Yup
//         .string()
//         .max(100, 'Country name must not exceed 100 characters'),
//       portfolios: Yup.array().of(
//         Yup.object().shape({
//           linkType: Yup.string(),
//           portfolioLink: Yup.string().url('Invalid portfolio link'),
//         })
//       ),
//       description: Yup.string().max(1000, 'Description must not exceed 1000 characters'),
//     }),
//     academic: Yup.object().shape({
//       universityName: Yup
//         .string()
//         .max(100, 'University name must not exceed 100 characters'),
//       major: Yup.string().max(100, 'Major name must not exceed 100 characters'),
//       startingYear: Yup
//         .string()
//         .matches(/^[0-9]{4}$/, 'Must be a valid year (YYYY)'),
//       endingYear: Yup
//         .string()
//         .matches(/^[0-9]{4}$/, 'Must be a valid year (YYYY)'),
//       obtainedCgpa: Yup
//         .number()
//         .typeError('CGPA must be a number')
//         .min(0, 'CGPA must be between 0 and 4')
//         .max(4, 'CGPA must be between 0 and 4'),
//       totalCgpa: Yup
//         .number()
//         .typeError('CGPA must be a number')
//         .min(0, 'CGPA must be between 0 and 4')
//         .max(4, 'CGPA must be between 0 and 4'),
//       learning: Yup.string().max(1000, 'Learning must not exceed 1000 characters'),
//     }),
//     experience: Yup.object().shape({
//       cName: Yup.string().max(100, 'Company name must not exceed 100 characters'),
//       cDomain: Yup.string().max(100, 'Company domain must not exceed 100 characters'),
//       jobTitle: Yup.string().max(100, 'Job title must not exceed 100 characters'),
//       startingDate: Yup
//         .string()
//         .matches(
//           /^(0?[1-9]|[12][
  


// const userSchema = Yup.object().shape({
//     role: Yup.string(),
//     fname: Yup
//       .string()
//       .required('First name is required')
//       .matches(/^[A-Za-z]+$/, 'First name should contain only alphabets'),
//     lname: Yup
//       .string()
//       .required('Last name is required')
//       .matches(/^[A-Za-z]+$/, 'Last name should contain only alphabets'),
//     email: Yup
//       .string()
//       .required('Email is required')
//       .email('Email must be a valid email address')
//       .matches(
//         /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+$/,
//         'Invalid email format'
//       ),
//     phone: Yup
//       .number()
//       .required('Phone number is required')
//       .min(1000000000, 'Invalid phone number')
//       .max(9999999999, 'Invalid phone number'),
//     password: Yup
//       .string()
//       .required('Password is required')
//       .matches(
//         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
//         'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number'
//       ),
//     about: Yup.object().shape({
//       title: Yup.string(),
//       gender: Yup.string(),
//       dob: Yup.string(),
//       city: Yup.string(),
//       country: Yup.string(),
//       portfolios: Yup.array().of(
//         Yup.object().shape({
//           linkType: Yup.string(),
//           portfolioLink: Yup.string(),
//         })
//       ),
//       description: Yup.string(),
//     }),
//     academic: Yup.object().shape({
//       universityName: Yup.string(),
//       major: Yup.string(),
//       startingYear: Yup.string(),
//       endingYear: Yup.string(),
//       obtainedCgpa: Yup
//         .string()
//         .matches(
//           /^[0-9]\.[0-9][0-9]$/,
//           'CGPA should be in the format of X.XX'
//         ),
//       totalCgpa: Yup
//         .string()
//         .matches(
//           /^[0-9]\.[0-9][0-9]$/,
//           'CGPA should be in the format of X.XX'
//         ),
//       learning: Yup.string(),
//     }),
//     experience: Yup.object().shape({
//       cName: Yup.string(),
//       cDomain: Yup.string(),
//       jobTitle: Yup.string(),
//       startingDate: Yup.string(),
//       endingDate: Yup.string(),
//       responsibities: Yup.string(),
//     }),
//     yearsOfExperience: Yup.string(),
//     openToWorkingAs: Yup.array().of(Yup.string()),
//     skills: Yup.array().of(
//       Yup.object().shape({
//         skill: Yup.string(),
//         percent: Yup
//           .number()
//           .min(0, 'Percentage should be between 0 and 100')
//           .max(100, 'Percentage should be between 0 and 100'),
//       })
//     ),
//     preferences: Yup.object().shape({
//       jobMode: Yup.array().of(Yup.string()),
//       selectedCountries: Yup.array().of(
//         Yup.object().shape({
//           name: Yup.string(),
//           country: Yup.string(),
//         })
//       ),
//       jobCategory: Yup.array().of(Yup.string()),
//     }),
//     jobsApplied: Yup.array().of(
//       Yup.object().shape({
//         job: Yup.string().required(),
//         status: Yup
//           .string()
//           .oneOf(
//             ['applied', '
  