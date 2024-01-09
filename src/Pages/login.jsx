import { useState } from "react"
import { Form, redirect, useActionData, useLoaderData, useNavigate, useNavigation } from "react-router-dom"
import { loginUser } from "../../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const data = await loginUser([ email, password ])
        localStorage.setItem("loggedin", true)
        console.log(data)
        return redirect("/host")
    } catch(err) {
        return err.message
    }
}

export default function Login() {
    // const [status, setStatus] = useState("idle")
    // const [error, setError] = useState(null)
    const errorMessage = useActionData()
    const message = useLoaderData()
    const navigation = useNavigation()
    

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     setStatus("submitting")
    //     loginUser(loginFormData)
    //         .then(data => {
    //             // replace helps take you back to the initial page before the login
    //             navigate("/host", { replace: true })
    //         })
    //         .finally(() => setStatus("idle"))
    // }

    // we no longer need the handlechange function because we are using For from router-dom

    // function handleChange(e) {
    //     const { name, value } = e.target
    //     setLoginFormData(prev => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}
            <Form className="login-form" method="post" replace> 
                <input
                    name="email"
                    type="email"
                    placeholder="Email address" 
                              
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    // value={loginFormData.password}
                    // onChange={handleChange}
                />
                <button disabled={navigation.state === "submitting"}>
                    {navigation.state === "submitting" ? "Logging in..."
                    :
                    "Log in"}
                </button>
            </Form>
         </div>
    )

}