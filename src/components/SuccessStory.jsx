import p1 from '../assets/i3.jpg'
import p2 from '../assets/i1.jpg'
import p3 from '../assets/i2.jpg'
import p4 from '../assets/p3.jpg'
import p5 from '../assets/p4.jpg'
import p6 from '../assets/p6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    delay: 100,
    duration: 1500,
})

const SuccessStory = () => {
    return (
        <div className="container mx-auto px-5 my-20">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Success Portfolio</h2>
                <p className="md:w-1/2 mx-auto text-gray-600">There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but try</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <img data-aos="flip-left" src={p6} className="w-full rounded-lg h-64" />
                <img data-aos="flip-left" src={p2} className="w-full rounded-lg h-64" />
                <img data-aos="flip-left" src={p1} className="w-full rounded-lg h-64" />
                <img data-aos="flip-right" src={p3} className="w-full rounded-lg h-64" />
                <img data-aos="flip-right" src={p4} className="w-full rounded-lg h-64" />
                <img data-aos="flip-right" src={p5} className="w-full rounded-lg h-64" />
            </div>
        </div>
    )
}

export default SuccessStory;