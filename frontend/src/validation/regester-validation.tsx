import * as yup from 'yup'

export const regesterSchema=yup.object({
    firstName:yup.string().min(2).required('FirstName is required'),
    lastName:yup.string().min(2).required('LastName is required'),
    email:yup.string().email('please enter a valid emali').required('email is required'),
    password:yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character").required('password is required')

})