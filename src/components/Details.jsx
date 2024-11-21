import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './AuthProvider';

const Details = () => {
    const { details } = useContext(AuthContext);
    const notify = () => toast.success("Thank You!! We will reach your destination soon");
    const handleDetails = e => {
        e.preventDefault()
        notify()
        e.target.reset()
    }
    return (
        <div className="container mx-auto px-5">
            <ToastContainer
                autoClose={3000}
            />
            {
                details && <div className="lg:px-48">
                    <div className="border items-center p-3 md:p-6 rounded-lg border-gray-200 shadow grid grid-cols-12 gap-4 sm:gap-7 mt-5">
                        <img src={details.image} className="w-full h-36 sm:h-40 rounded-lg col-span-4" />
                        <div className="col-span-8">
                            <h3 className="text-lg font-semibold mb-1 sm:mb-2">{details.title}</h3>
                            <p className="text-gray-500 text-sm sm:text-base mb-1 sm:mb-2">{details.description}</p>
                            <p className="text-gray-600 font-medium mb-1 text-sm sm:text-base">Contact Info: {details.contactInfo}</p>
                            <div className="justify-between flex items-center">
                                <p className="font-medium text-gray-600 text-sm sm:text-base cursor-pointer">Division: {details.division}</p>
                                <p className="px-3 text-gray-700 mr-4 font-medium cursor-pointer py-1 rounded-full text-xs sm:text-sm bg-orange-200">{details.status}</p>
                            </div>

                        </div>
                    </div>
                </div>
            }
            <div className="bg-base-100 mx-auto shadow-lg border-gray-200 border rounded-lg max-w-[28rem] my-6">
                <form onSubmit={handleDetails} className="px-8 p-5 pb-3 ">
                    <div className="space-y-3">
                        <h3 className="text-2xl  font-semibold text-gray-600 text-center">Donation Form</h3>
                        <input type="text" placeholder="Quantity Of Items" className="input w-full input-bordered rounded" required />
                        <input type="text" placeholder="Item Type (e.g. blanket, jacket)" className="input w-full input-bordered rounded" required />
                        <input type="text" placeholder="Your Location" className="input w-full input-bordered rounded" required />
                        <textarea rows='5' className="w-full border rounded-lg p-3" placeholder="Notes (Optional)"></textarea>
                        <input type="submit" value='Submit' className="btn bg-orange-500 hover:bg-orange-500 w-full text-white" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Details;