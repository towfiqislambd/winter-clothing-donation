import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { useNavigate } from "react-router-dom"

const ProfileUpdate = () => {
    const { updateUser, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleUpdateProfile = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateUser(name, photo)
            .then(() => {
                e.target.reset()
                navigate('/dashboard')
                setUser(result => {
                    return { ...result, displayName: name, photoURL: photo }
                })
            })
    }
    return (
        <div className="container mx-auto px-5">
            <div className="bg-base-100 mx-auto shadow-lg border-gray-200 border rounded-lg max-w-[28rem] my-8">
                <form onSubmit={handleUpdateProfile} className="px-8 p-5 pb-3 ">
                    <div className="space-y-4">
                        <h3 className="text-2xl  font-semibold text-gray-600 text-center">Update Profile</h3>
                        <input type="text" name="name" placeholder="Name" className="input w-full input-bordered rounded" required />
                        <input type="text" name="photo" placeholder="Photo URL" className="input w-full input-bordered rounded" required />
                        <input type="submit" value='Update' className="btn bg-orange-500 hover:bg-orange-500 w-full text-white" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileUpdate;