import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext, useRef } from "react";
import { AuthContext } from "./AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const { signInUser, signInWithGoogle, setUserEmail } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef = useRef(null)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setErrorMessage('')
        signInUser(email, password)
            .then(() => {
                e.target.reset()
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }
    const handleGoogleSignUp = () => {
        signInWithGoogle()
        navigate(location?.state ? location.state : '/')
    }
    return (
        <div className="container mx-auto px-5">
            <div className="bg-base-100 mx-auto shadow-lg border border-gray-200 rounded-lg max-w-[28rem] my-8">
                <form onSubmit={handleLogin} className="px-8 p-5 pb-3">
                    <h3 className="text-2xl mb-3 font-semibold text-gray-600 text-center">Login Your Account</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-600 text-lg">Email Address</span>
                        </label>
                        <input ref={emailRef} type="email" name="email" placeholder="Enter Your Email" className="input input-bordered rounded" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-600 text-lg">Password</span>
                        </label>
                        <input type='password' name="password" placeholder="Password" className="input w-full input-bordered rounded" required />
                    </div>
                    <Link onClick={() => setUserEmail(emailRef.current.value)} to='/forget-password' className="link link-hover text-sm text-gray-600 inline-block mt-2 mb-3">Forget Password?</Link>
                    <input type="submit" value='Login' className="btn bg-orange-500 hover:bg-orange-500 w-full text-white" />
                    <label className="label text-center justify-center mt-1">
                        <p className="text-gray-700">Dont have any account? <Link to="/register" className="link link-hover text-orange-500 font-semibold">Register</Link></p>
                    </label>
                    <div className="divider divide-slate-700 mt-0 text-gray-700 font-medium">or</div>
                    <Link onClick={handleGoogleSignUp} className="flex items-center text-center gap-1 sm:gap-3 -mt-2 border rounded-full py-[10px] mx-auto font-medium  bg-orange-200 justify-center w-2/3"><FcGoogle className="text-2xl" /> Sign In With Google</Link>
                </form>
                {
                    errorMessage && <h3 className="text-center px-8 pb-4 text-error">{errorMessage}</h3>
                }
            </div>
        </div>
    )
}

export default Login;