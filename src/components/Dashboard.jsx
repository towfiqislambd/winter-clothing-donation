import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user;
    return (
        <div className="container mx-auto px-5">
            <div className="bg-base-100 mx-auto border-gray-200 border rounded-lg max-w-[25rem] my-8">
                <div className="px-8 p-5 pb-3 ">
                    <h2 className="text-2xl mb-1 font-semibold text-orange-500 text-center">Welcome {displayName}</h2>
                    <h3 className="text-xl mb-6 font-semibold text-orange-400 text-center">My Profile</h3>
                    <div className="mb-6">
                        <img src={photoURL} className="w-20 h-20 rounded-full mx-auto" />
                    </div>
                    <div className="text-lg font-medium mb-1">
                        <span>Name: </span><span className="text-gray-700">{displayName}</span>
                    </div>
                    <div className="text-lg font-medium mb-4">
                        <span>Email: </span><span className="text-gray-700">{email}</span>
                    </div>
                    <Link to='/update-profile' className="font-medium bg-orange-500 hover:bg-orange-500 w-full inline-block rounded-full py-2 text-center text-white">Update Profile</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;