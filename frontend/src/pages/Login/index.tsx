import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginSchema } from "@/validation/login-validation"
import { useFormik } from "formik"

const initialValues = {
  email: "",
  password: ""
}
export function Login() {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      console.log(values)
      actions.resetForm()
    }
  })


  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] text-white  ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance  text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2  ">
                <Label htmlFor="email">Email</Label>
                <Input
                  className='text-black'
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="m@example.com"
                />
                <p className="text-red-600 h-4">
                  {errors.email && touched.email
                    ? errors.email
                    : null}
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  className='text-black'
                  id="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                    <p className="text-red-600 h-4">
                  {errors.email && touched.email
                    ? errors.email
                    : null}
                </p>
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-blue-500 hover:text-white"
              >
                Login
              </Button>
              <Button variant="outline" className="w-full  text-black hover:bg-blue-500 hover:text-white border-0 ">
                Login with Google
              </Button>
            </form>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted md:block">
        <img
          src="../../../public/f68ae6196726957.662503a7920c5.jpg"
          alt="Image"

          className="h-full w-full object-cover md:object-contain dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
