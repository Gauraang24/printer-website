import { useNavigate } from "react-router-dom";
import FlipLink from "./Animation/FlipLink";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#2f2f2f] px-8 w-full">
      <div className="max-w-screen-xl mx-auto lg:pt-24 pt-16 pb-6">
        {/* Footer Content */}
        <div className="custom-footer flex xl:flex-row justify-between items-start lg:gap-6 md:gap-4 gap-2">
          {/* Logo Section */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/home/CWC_LOGO_Footer.svg"
              alt="CWC Logo"
              className="lg:w-[150px] lg:h-[128px] sm:w-[120px] sm:h-[78px] xs:w-[100px] xs:h-[72px] w-[80px] h-[66px]"
              loading="lazy"
            />
          </div>

          {/* Shop Online Section */}
          <div className="text-white flex flex-col mb-6">
            <p className="lg:text-[30px] sm:text-[25px] text-[18px] font-bold lg:pb-6 sm:pb-4 pb-2">
              SHOP&nbsp;ONLINE
            </p>
            <hr className="w-[50%]" />
            <ul className="flex flex-col gap-7 lg:mt-11 sm:mt-9 mt-4">
              <li className="lg:text-[18px] sm:text-[14px] text-[10px] font-medium">
                {" "}
                <FlipLink lineHeight="15px">AMAZON</FlipLink>
              </li>
            </ul>
          </div>

          {/* Important Links Section */}
          <div className="text-white flex flex-col mb-6">
            <p className="lg:text-[30px] sm:text-[25px] text-[18px] font-bold lg:pb-6 sm:pb-4 pb-2">
              IMPORTANT&nbsp;LINKS
            </p>
            <hr className="w-[50%]" />
            <ul className="flex flex-col gap-7 lg:mt-11 sm:mt-9 mt-4">
              <li
                className="lg:text-[18px] sm:text-[14px] text-[10px] font-medium cursor-pointer"
                onClick={() => navigate("/about-us")}
              >
                <FlipLink lineHeight="15px">Company Profile</FlipLink>
              </li>
              <li
                className="lg:text-[18px] sm:text-[14px] text-[10px] font-medium cursor-pointer"
                onClick={() => navigate("/warranty")}
              >
                <FlipLink lineHeight="16px">Warranty Check</FlipLink>
              </li>
              <li
                className="lg:text-[18px] sm:text-[14px] text-[10px] font-medium cursor-pointer"
                onClick={() => {
                  navigate("/videos");
                }}
              >
                <FlipLink lineHeight="16px">Operational Vids</FlipLink>
              </li>
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div className="text-white flex flex-col mb-6">
            <p className="lg:text-[30px] sm:text-[25px] text-[18px] font-bold lg:pb-6 sm:pb-4 pb-2">
              STAY&nbsp;CONNECTED
            </p>
            <hr className="w-[50%]" />
            <div className="flex gap-4 lg:gap-7 lg:mt-11 sm:mt-9 mt-4 cursor-pointer">
              {/* INSTAGRAM  */}
              <a
                href=" https://www.instagram.com/ecompusell/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/footerIcons/Instagram.svg"
                  className="lg:w-[62px] lg:h-[62px] 2xs:w-[42px] 2xs:h-[42px] w-[32px] h-[32px]"
                  alt="Instagram Logo"
                  loading="lazy"
                />
              </a>

              {/* FACEBOOK  */}
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/footerIcons/Facebook.svg"
                  className="lg:w-[62px] lg:h-[62px] 2xs:w-[42px] 2xs:h-[42px] w-[32px] h-[32px]"
                  alt="Facebook Logo"
                  loading="lazy"
                />
              </a>

              {/* LINKEDIN  */}
              <a
                href="https://www.linkedin.com/company/ecompusell-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/footerIcons/LinkedIn.svg"
                  className="lg:w-[62px] lg:h-[62px] 2xs:w-[42px] 2xs:h-[42px] w-[32px] h-[32px]"
                  alt="LinkedIn Logo"
                  loading="lazy"
                />
              </a>

              {/* TWITTER  */}
              <a
                href="https://x.com/Ecompusell1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/footerIcons/TwitterX.svg"
                  className="lg:w-[62px] lg:h-[62px] 2xs:w-[42px] 2xs:h-[42px] w-[32px] h-[32px]"
                  alt="Twitter Logo"
                  loading="lazy"
                />
              </a>

              {/* YOUTUBE  */}
              <a
                href="https://www.youtube.com/@cwcprinters"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/footerIcons/YouTube.svg"
                  className="lg:w-[62px] lg:h-[62px] 2xs:w-[42px] 2xs:h-[42px] w-[32px] h-[36px]"
                  alt="YouTube Logo"
                  loading="lazy"
                />
              </a>
            </div>
            <ul className="max-w-[445px] flex flex-col gap-7 mt-7">
              <li className="flex items-center gap-4">
                <img
                  src="/images/footerIcons/Phone.svg"
                  className="lg:w-[40px] lg:h-[40px] sm:w-[35px] sm:h-[35px] w-[25px] h-[25px] "
                  alt="Phone Icon"
                  loading="lazy"
                />

                <a
                  href="tel:18002127110"
                  className="lg:text-[18px] sm:text-[14px] text-[10px] font-medium text-[#ffffffa0]"
                >
                  1800 212 7110
                </a>
              </li>
              <li className="flex items-center gap-4">
                <img
                  src="/images/footerIcons/Mail.svg"
                  className="lg:w-[40px] lg:h-[40px] sm:w-[35px] sm:h-[35px] w-[25px] h-[25px]"
                  alt="Mail Icon"
                  loading="lazy"
                />
                <a
                  href="mailto:info@ecompusell.com"
                  className="lg:text-[18px] sm:text-[14px] text-[10px] font-medium text-[#ffffffa0]"
                >
                  info@ecompusell.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <img
                  src="/images/footerIcons/Location.svg"
                  className="lg:w-[40px] lg:h-[40px] sm:w-[35px] sm:h-[35px] w-[25px] h-[25px]"
                  alt="Location Icon"
                  loading="lazy"
                />
                <a
                  href="https://maps.app.goo.gl/1AeQrtuzjWHGS1qPA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-[18px] sm:text-[14px] text-[10px] font-medium text-[#ffffffa0]"
                >
                  Office No. 13, 1st Floor, Aditya Centeegra, Fergusson College
                  Rd, Shivajinagar, Pune, Maharashtra – 411004
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal line */}
        <hr className="my-6 border-gray-400" />

        {/* Copyright and Design/Development Section */}
        <div className="flex lg:justify-between justify-center gap-3 items-center flex-col lg:flex-row text-white lg:text-[18px] sm:text-[14px] text-[10px]">
          <p className="sm:mb-4 lg:mb-0 lg:font-bold font-medium text-center">
            Copyright © {new Date().getFullYear()} E-Compusell Limited. All Rights Reserved
          </p>
          <p className="lg:font-bold text-center font-medium">
            Design & Development by 8Bit Creation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
