import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-[#2f2f2f]">
            <div className="flex w-[80%] mx-auto pt-14 pb-20">
                <div>

                    <img src="/images/footerIcons/cwc_footer_logo.svg" alt="CWC Logo" />
                </div>

                <div className="text-white text-[30px] font-bold flex flex-1 justify-evenly gap-8">
                    <div>
                        <p className="border-b pb-6">SHOP ONLINE</p>

                        <div>
                            <ul className="flex flex-col gap-7 mt-11">
                                <li className="text-[18px] font-medium">AMAZON</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="border-b pb-6">IMPORTANT LINKS</p>
                        <div>
                            <ul className="flex flex-col gap-7 mt-11">
                                <li className="text-[18px] font-medium">Company Profile</li>
                                <li className="text-[18px] font-medium" onClick={() => {
                                    navigate('/warranty')
                                }}>Warranty Check</li>
                                <li className="text-[18px] font-medium">Operation Videos</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="border-b pb-6">STAY CONNECTED</p>

                        <div>
                            <div className="flex gap-7 mt-11">
                                <img
                                    src="/images/footerIcons/Instagram.svg"
                                    width={62}
                                    height={62}
                                    alt="Instagram Logo"
                                />
                                <img
                                    src="/images/footerIcons/Facebook.svg"
                                    width={62}
                                    height={62}
                                    alt="Facebook Logo"
                                />
                                <img
                                    src="/images/footerIcons/LinkedIn.svg"
                                    width={62}
                                    height={62}
                                    alt="LinkedIn Logo"
                                />
                                <img
                                    src="/images/footerIcons/TwitterX.svg"
                                    width={62}
                                    height={62}
                                    alt="Twitter Logo"
                                />
                                <img
                                    src="/images/footerIcons/YouTube.svg"
                                    width={62}
                                    height={62}
                                    alt="Youtube Logo"
                                />
                            </div>

                            <ul className="max-w-[445px] flex flex-col gap-7 mt-7">
                                <li className="flex items-center gap-4">
                                    {" "}
                                    <img
                                        src="/images/footerIcons/Phone.svg"
                                        width={40}
                                        height={40}
                                        alt="Phone Icon"
                                    />{" "}
                                    <p className="text-[18px] font-medium">1800 212 7110</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    {" "}
                                    <img
                                        src="/images/footerIcons/Mail.svg"
                                        width={40}
                                        height={40}
                                        alt="Mail Icon"
                                    />{" "}
                                    <p className="text-[18px] font-medium">info@ecompusell.com</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    {" "}
                                    <img
                                        src="/images/footerIcons/Location.svg"
                                        width={40}
                                        height={40}
                                        alt="Location Icon"
                                    />{" "}
                                    <p className="text-[18px] font-medium">
                                        Office No. 13, 1st Floor, Aditya Centeegra, Fergusson
                                        College Rd, Shivajinagar, Pune, Maharashtra – 411004
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white text-[22px] font-bold h-[62px] border-t flex items-center justify-center w-[80%] mx-auto">
                Copyright © 2024 E-Compusell Private Limited. All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;
