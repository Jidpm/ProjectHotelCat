import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10,15}$/

export const registerSchema = z.object({
	identity: z.string().min(2, "Email or phone-number require")
		.refine(value => emailRegex.test(value) || phoneRegex.test(value), {
			message: "identity must be email or phone number"
		}),
	firstName: z.string().min(2, "first name is required"),
	lastName: z.string().min(2, "last name is required"),
	password: z.string().min(4, "password at least 5 characters"),
	confirmPassword: z.string().min(4, "confirm password is required"),
	address: z.string().min(2, "Address is required"),
})
    
.refine(data => data.password === data.confirmPassword, {
	message: 'confirmPassword must match password',
	path: ['confirmPassword']
}).transform( data => {
	const key = emailRegex.test(data.identity) ? "email" : "phoneNumber"
	const newValue = {...data, [key] : data.identity}
    console.log('data', data)
	delete newValue.identity
	delete newValue.confirmPassword
	return newValue
})

export const loginSchema = z.object({
	identity: z.string().min(2, "Email or phone number require")
		.refine(value => emailRegex.test(value) || phoneRegex.test(value), {
			message: "identity must be email or phone number"
		}),
	password: z.string().min(4, "password at least 4 characters"),
}).transform( data => {
	const key = emailRegex.test(data.identity) ? "email" : "phoneNumber"
	const newValue = {...data, [key] : data.identity}
	delete newValue.identity
	return newValue
})

export const addCatInfoSchema = z.object({
	catName: z.string().min(2, "Name is require"),
	age: z.string().min(1, "Age is require"),
	breed: z.string().min(2, "Breed is require"),
	healthInfo: z.string().min(1, "Health info is require")
})
