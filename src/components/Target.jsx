import { IoIosPeople } from "react-icons/io";
import { BiSolidDonateHeart } from "react-icons/bi";
import { MdWifiProtectedSetup } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    delay: 100,
    duration: 1500,
})

const Target = () => {
    return (
        <div className="container mx-auto px-5">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Current Target</h2>
                <p className="md:w-1/2 mx-auto text-gray-600">There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but try</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
                <div data-aos="fade-down" className="p-5 py-10 border rounded-lg space-y-2 text-center bg-orange-100" >
                    <IoIosPeople className="text-6xl mx-auto text-orange-400" />
                    <h4 className="text-2xl font-bold mb-2">Growing Community</h4>
                    <p className="text-gray-500 pb-2">After cleaning and organizing our closet, in the end we are probably wondering what we are going to do with clothes that we no longer are going to wear; perhaps they are too worn out or they don’t fit as well anymore</p>
                    <button className="underline font-medium text-gray-700">Read More</button>
                </div>
                <div data-aos="fade-down" className="p-5 py-10 border rounded-lg space-y-2 text-center bg-orange-100">
                    <MdWifiProtectedSetup className="text-6xl mx-auto text-orange-400" />
                    <h4 className="text-2xl font-bold mb-2">Setup Team</h4>
                    <p className="text-gray-500 pb-2">After cleaning and organizing our closet, in the end we are probably wondering what we are going to do with clothes that we no longer are going to wear; perhaps they are too worn out or they don’t fit as well anymore</p>
                    <button className="underline font-medium text-gray-700">Read More</button>
                </div>
                <div data-aos="fade-down" className="p-5 py-10 border rounded-lg space-y-2 text-center bg-orange-100">
                    <BiSolidDonateHeart className="text-6xl mx-auto text-orange-400" />
                    <h4 className="text-2xl font-bold mb-2">1000+ Clothes Distribution</h4>
                    <p className="text-gray-500 pb-2">After cleaning and organizing our closet, in the end we are probably wondering what we are going to do with clothes that we no longer are going to wear; perhaps they are too worn out or they don’t fit as well anymore</p>
                    <button className="underline font-medium text-gray-700">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Target;