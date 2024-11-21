import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 800,
})

const HowItWork = () => {
    return (
        <div className="container mx-auto px-5 my-20" data-aos="zoom-in">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">How It Works</h2>
                <p className="md:w-1/2 mx-auto text-gray-600">There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but try</p>
            </div>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">1. Registration Process!!!</div>
                    <div className="collapse-content">
                        <p>he happiness on their face so was heartwarming even though I did not gave them new clothes but the happiness on their face was worth seeing, it was at peek and the most important lesson of my life I learned there was: always share and take care of people as much as I can</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">2. List supported divisions</div>
                    <div className="collapse-content">
                        <ul>
                            <li>Dhaka</li>
                            <li>Chandpur</li>
                            <li>Barishal</li>
                            <li>Rajsahi</li>
                            <li>Khulna</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">3. How can you connect with our community?</div>
                    <div className="collapse-content">
                        <p>he happiness on their face so was heartwarming even though I did not gave them new clothes but the happiness on their face was worth seeing, it was at peek and the most important lesson of my life I learned there was: always share and take care of people as much as I can</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">4. How to donate in this platform?</div>
                    <div className="collapse-content">
                        <p>he happiness on their face so was heartwarming even though I did not gave them new clothes but the happiness on their face was worth seeing, it was at peek and the most important lesson of my life I learned there was: always share and take care of people as much as I can</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">5. Our Donar List</div>
                    <div className="collapse-content">
                        <p>he happiness on their face so was heartwarming even though I did not gave them new clothes but the happiness on their face was worth seeing, it was at peek and the most important lesson of my life I learned there was: always share and take care of people as much as I can</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWork;