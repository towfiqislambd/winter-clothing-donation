import { useContext, useRef } from "react";
import { AuthContext } from "./AuthProvider";

const ForgetPassword = () => {
    const emailRef = useRef(null)
    const { userPasswordReset, userEmail } = useContext(AuthContext)
    const handleResetPassword = e => {
        e.preventDefault()
        userPasswordReset(emailRef.current.value)
        window.open('https://mail.google.com', '_blank')
    }
    return (
        <div className="container mx-auto px-5">
            <div className="bg-base-100 mx-auto shadow-lg border-gray-200 border rounded-lg max-w-[28rem] my-8">
                <form onSubmit={handleResetPassword} className="px-8 p-5 pb-3 ">
                    <div className="space-y-4">
                        <h3 className="text-2xl  font-semibold text-gray-600 text-center">Reset Password</h3>
                        <input defaultValue={userEmail} ref={emailRef} type="email" name="email" placeholder="Email" className="input w-full input-bordered rounded" required />
                        <input type="submit" value='Reset Password' className="btn bg-orange-500 hover:bg-orange-500 w-full text-white" />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ForgetPassword;