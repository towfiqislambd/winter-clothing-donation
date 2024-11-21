import { Link } from "react-router-dom";
import banner1 from "../assets/banner.webp";
import banner2 from "../assets/banner2.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1000,
})

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px] relative">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-5 px-5">
                    <h1 data-aos="zoom-in-up" className="text-3xl md:text-4xl lg:text-5xl lg:leading-[3.3rem] font-semibold font-serif"> A donation is a gift for charity, <br /> humanity and trustworthy
                    </h1>
                    <p data-aos="zoom-in-up" className="text-gray-200 pb-2 md:w-4/5 mx-auto">
                        There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but if our one set of clothes covers naked body of one person that will be more than enough. Because when we do good things for others, it makes us feel good and happy and good things come to us also.
                    </p>
                    <Link to='/details' data-aos="zoom-in-up" className="bg-orange-500 transition-all hover:bg-transparent border border-orange-500 hover:text-orange-500 text-white px-10 py-2 rounded font-medium">
                        Donate Now
                    </Link>
                </div>
                <div className="absolute hidden md:flex left-10 right-10 top-1/2 -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn  btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-5 px-5">
                    <h1 data-aos="zoom-in-up" className="text-3xl md:text-4xl lg:text-5xl lg:leading-[3.3rem] font-semibold font-serif"> A donation is a gift for charity, <br /> humanity and trustworthy
                    </h1>
                    <p data-aos="zoom-in-up" className="text-gray-200 pb-2 md:w-4/5 mx-auto">
                        There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but if our one set of clothes covers naked body of one person that will be more than enough. Because when we do good things for others, it makes us feel good and happy and good things come to us also.
                    </p>
                    <button data-aos="zoom-in-up" className="bg-orange-500 transition-all hover:bg-transparent border border-orange-500 hover:text-orange-500 text-white px-10 py-2 rounded font-medium">
                        Donate Now
                    </button>
                </div>
                <div className="absolute hidden md:flex left-10 right-10 top-1/2 -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Banner;
