import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
    }
    if (user) {
        return children;
    }

    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    )
}

export default PrivateRoutes;