import { useNavigate } from "react-router-dom";


const Footer = () => {

    const navigate = useNavigate()

    return (
        <div className="bg-[#2f2f2f] px-8 w-full">
            <div className="max-w-screen-xl mx-auto lg:pt-24 pt-16 pb-6">
                {/* Footer Content */}
                <div className="flex flex-wrap lg:flex-row justify-between items-start gap-6">

                    {/* Logo Section */}
                    <div className="flex justify-center mb-6">
                        <img
                            src='/images/home/cwc-logo-copyright.svg'
                            alt="CWC Logo"
                            className="lg:w-[150px] lg:h-[128px]"
                        />
                    </div>

                    {/* Shop Online Section */}
                    <div className="text-white flex flex-col mb-6">
                        <p className="lg:text-[30px] text-[25px] font-bold pb-6">SHOP&nbsp;ONLINE</p>
                        <hr className="w-[50%]" />
                        <ul className="flex flex-col gap-7 mt-11">
                            <li className="lg:text-[18px] font-medium">AMAZON</li>
                        </ul>
                    </div>

                    {/* Important Links Section */}
                    <div className="text-white flex flex-col mb-6">
                        <p className="lg:text-[30px] text-[25px] font-bold pb-6">IMPORTANT&nbsp;LINKS</p>
                        <hr className="w-[50%]" />
                        <ul className="flex flex-col gap-7 mt-11">
                            <li className="lg:text-[18px] font-medium">Company Profile</li>
                            <li className="lg:text-[18px] font-medium cursor-pointer" onClick={() => navigate('/warranty')}>
                                Warranty Check
                            </li>
                            <li className="lg:text-[18px] font-medium">Operation Videos</li>
                        </ul>
                    </div>

                    {/* Stay Connected Section */}
                    <div className="text-white flex flex-col mb-6">
                        <p className="lg:text-[30px] text-[25px] font-bold pb-6">STAY&nbsp;CONNECTED</p>
                        <hr className="w-[50%]" />
                        <div className="flex gap-4 lg:gap-7 mt-11 cursor-pointer">
                            <img
                                src="/images/footerIcons/Instagram.svg"
                                className="sm:w-[52px] lg:w-[62px] sm:h-[52px] lg:h-[62px] w-[45px] h-[45px]"
                                alt="Instagram Logo"
                            />
                            <img
                                src="/images/footerIcons/Facebook.svg"
                                className="sm:w-[52px] lg:w-[62px] sm:h-[52px] lg:h-[62px]  w-[45px] h-[45px]"
                                alt="Facebook Logo"
                            />
                            <img
                                src="/images/footerIcons/LinkedIn.svg"
                                className="sm:w-[52px] lg:w-[62px] sm:h-[52px] lg:h-[62px]  w-[45px] h-[45px]"
                                alt="LinkedIn Logo"
                            />
                            <img
                                src="/images/footerIcons/TwitterX.svg"
                                className="sm:w-[52px] lg:w-[62px] sm:h-[52px] lg:h-[62px] w-[45px] h-[45px]"
                                alt="Twitter Logo"
                            />
                            <img
                                src="/images/footerIcons/YouTube.svg"
                                className="sm:w-[52px] lg:w-[62px] sm:h-[52px] lg:h-[62px]  w-[45px] h-[45px]"
                                alt="YouTube Logo"
                            />
                        </div>
                        <ul className="max-w-[445px] flex flex-col gap-7 mt-7">
                            <li className="flex items-center gap-4">
                                <img src="/images/footerIcons/Phone.svg" className="w-[40px] h-[40px]" alt="Phone Icon" />
                                <p className="lg:text-[18px] font-medium">1800 212 7110</p>
                            </li>
                            <li className="flex items-center gap-4">
                                <img src="/images/footerIcons/Mail.svg" className="w-[40px] h-[40px]" alt="Mail Icon" />
                                <p className="lg:text-[18px] font-medium">info@ecompusell.com</p>
                            </li>
                            <li className="flex items-center gap-4">
                                <img src="/images/footerIcons/Location.svg" className="w-[40px] h-[40px]" alt="Location Icon" />
                                <p className="lg:text-[18px] font-medium">
                                    Office No. 13, 1st Floor, Aditya Centeegra, Fergusson College Rd, Shivajinagar, Pune, Maharashtra – 411004
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Horizontal line */}
                <hr className="my-6 border-gray-400" />

                {/* Copyright and Design/Development Section */}
                <div className="flex lg:justify-between justify-center gap-3 items-center flex-col lg:flex-row text-white lg:text-[18px]">
                    <p className="mb-4 lg:mb-0 lg:font-bold font-medium text-center">Copyright © 2024 E-Compusell Private Limited. All Rights Reserved</p>
                    <p className='lg:font-bold text-center font-medium'>Design & Development by 8Bit Creation</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;
