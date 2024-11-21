import { Link, useNavigate } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { IoEyeOffOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const { createUser, signInWithGoogle, updateUser, setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        const regexPassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regexPassword.test(password)) {
            return setErrorMessage("Password must be at least 6 characters long, Include one uppercase letter and one lowercase letter")
        }
        setErrorMessage('')
        createUser(email, password)
            .then(() => {
                e.target.reset()
                navigate('/')
                updateUser(name, photo)
                    .then(() => {
                        setUser(result => {
                            return { ...result, displayName: name, photoURL: photo }
                        })
                    })
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }
    const handleGoogleSignUp = () => {
        signInWithGoogle()
        navigate('/')
    }

    return (
        <div className="container mx-auto px-5">
            <div className="bg-base-100 mx-auto shadow-lg border-gray-200 border rounded-lg max-w-[28rem] my-8">
                <form onSubmit={handleRegister} className="px-8 p-5 pb-3 ">
                    <div className="space-y-4">
                        <h3 className="text-2xl  font-semibold text-gray-600 text-center">Registration</h3>
                        <input type="text" name="name" placeholder="Your Name" className="input w-full input-bordered rounded" required />
                        <input type="text" name="photo" placeholder="Photo URL" className="input w-full input-bordered rounded" required />
                        <input type="email" name="email" placeholder="Email Address" className="input w-full input-bordered rounded" required />
                        <div className="relative">
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className="input w-full input-bordered rounded" required />
                            {
                                showPassword ?
                                    <span onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-4 cursor-pointer"><IoEyeOffOutline /></span> :
                                    <span onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-4 cursor-pointer"><LuEye /></span>
                            }
                        </div>
                        <input type="submit" value='Register' className="btn bg-orange-500 hover:bg-orange-500 w-full text-white" />
                    </div>
                    <p className="text-gray-700 text-center py-2">Already have an account? <Link to="/login" className="link link-hover text-orange-500 font-semibold">Login</Link></p>
                    <div className="divider divide-slate-700 mt-0 text-gray-700 font-medium">or</div>
                    <Link onClick={handleGoogleSignUp} className="items-center text-center gap-1 sm:gap-3 flex -mt-2 border rounded-full py-[10px] mx-auto font-medium  bg-orange-200 justify-center w-2/3"><FcGoogle className="text-2xl" /> Sign In With Google</Link>
                </form>
                {
                    errorMessage && <h3 className="text-center px-8 pb-4 text-error">{errorMessage}</h3>
                }
            </div>
        </div>

    )
}

export default Register;