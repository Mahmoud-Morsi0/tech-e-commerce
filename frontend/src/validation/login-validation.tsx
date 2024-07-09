import * as yup from 'yup'

export const loginSchema=yup.object({
    email:yup.string().email('please enter a valid emali').required('email is required'),
    password:yup.string().required('password is required')
}) 