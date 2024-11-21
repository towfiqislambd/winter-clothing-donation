import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Campaign = ({ campaign }) => {
    const { setDetails } = useContext(AuthContext)
    const { title, image, description, status, division } = campaign;
    return (
        <div className="border p-6 rounded-lg border-gray-200 shadow">
            <img src={image} className="w-full h-52 rounded-lg mb-3" />
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-500 mb-2">{description}</p>
            <div className="flex  justify-between mb-4">
                <p className="font-medium text-gray-600 cursor-pointer">{division}</p>
                <p className="px-4 font-medium cursor-pointer py-2 rounded-full text-sm bg-orange-200">{status}</p>
            </div>
            <Link onClick={() => setDetails(campaign)} to='/details' className="bg-orange-500 transition-all hover:bg-transparent border border-orange-500 hover:text-orange-500 text-white px-5 py-2 rounded font-medium">Donate Now</Link>
        </div>
    )
}

export default Campaign;