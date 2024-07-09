
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormik } from "formik"
import { regesterSchema } from "@/validation/regester-validation"


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""

}

export function RegistrationForm() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: regesterSchema,
        onSubmit: (values, actions) => {
            console.log(values)
            actions.resetForm()
        }
    })

    return (
        <Card className="mx-auto max-w-sm mt-10 md:mt-32 ">
            <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input
                                    type="text"
                                    name="firstName"
                                    className="text-black"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="first-name"
                                    placeholder="Max"
                                />
                                <p className="text-red-600 h-2">
                                    {errors.firstName && touched.firstName
                                        ? errors.firstName
                                        : null
                                    }
                                </p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input
                                    name="lastName"
                                    className="text-black"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="last-name"
                                    placeholder="Robinson"
                                />
                                <p className="text-red-600 h-2">
                                    {errors.lastName && touched.lastName
                                        ? errors.lastName
                                        : null
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                name="email"
                                className="text-black"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="email"
                                type="email"
                                placeholder="m@example.com"

                            />
                            <p className="text-red-600 h-2">
                                {errors.email && touched.email
                                    ? errors.email
                                    : null
                                }
                            </p>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                name="password"
                                className="text-black"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="password"
                                type="password" />
                            <p className="text-red-600 h-2">
                                {errors.password && touched.password
                                    ? errors.password
                                    : null
                                }
                            </p>
                        </div>
                        <Button
                            type="submit"
                            className="w-full">
                            Create an account
                        </Button>
                        <Button variant="outline" className="w-full">
                            Sign up with GitHub
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <a href="#" className="underline">
                            Sign in
                        </a>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
