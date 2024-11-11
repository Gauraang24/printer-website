import KeepInTouch from "../../commonComponents/KeepInTouch";
import OurCertifications from "../../commonComponents/OurCertifications";
import { aboutUs } from "../../staticData/aboutUs";
import { CustomDivider } from "../../commonComponents/CustomDivider";
import { fontlg, fontmd, mblg } from "../../utils/constant";

const AboutUs = () => {
  return (
    <section>
      {/* Banner Section  */}
      <div className="w-full mt-[100px] sm:mt-0">
        <img
          src="./images/aboutUs/Banner.png"
          alt="Banner"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Company Profile  */}
      <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <CustomDivider
          title={'Company Profile'}
        />


        <div className="w-full flex lg:flex-row flex-col-reverse gap-6">
          <div className="lg:w-[45%] w-full flex flex-col justify-between">
            <p
              className={`${fontlg} font-bold mb-3`}
              dangerouslySetInnerHTML={{
                __html: aboutUs.companyProfile.heading,
              }}
            ></p>
            <p className={`${fontmd} font-medium`}>
              {aboutUs.companyProfile.desc}
            </p>
          </div>
          <div className="lg:w-[55%] flex items-center">

            <div
              className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden ">
                <iframe
                  className="w-full h-full"
                  src={'https://www.youtube.com/embed/7OmRHGHMGsk?si=yM3VrCjptfV5CtJU&amp;start=1'}
                  title={'CWC Logo Reveal: Unleashing Our Energy and Passion'}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">CWC Logo Reveal: Unleashing Our Energy and Passion</h3>
                <p className="text-gray-600 text-sm mt-2 truncate">The CWC Laser Printer is a remarkable achievement for the Indian technology industry, as it showcases the ability of Indian engineers to innovate and develop cutting-edge technology. The printer is built using high-quality components and has been designed to deliver superior print quality, reliability, and affordability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section 1st */}
      <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg} `}>
        <img
          src="images/aboutUs/about_1.png"
          className="w-full h-auto "
          alt="banner"
          loading="lazy"
        />
      </div>

      {/* Mid Info Section */}
      <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <p className={`${fontmd} font-semibold text-justify`}>
          {aboutUs?.info}
        </p>
      </div>

      {/* Image Section 2nd */}
      <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <img
          src="images/aboutUs/about_2.png"
          className="w-full h-auto"
          alt="banner"
          loading="lazy"
        />
      </div>

      {/* Mid Info Section 2nd */}
      <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <p className={`${fontmd} font-semibold text-justify`}>
          {aboutUs?.info2}
        </p>
      </div>

      {/* Image Section 3rd */}
      <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <div className="flex flex-col lg:flex-row justify-between">
          <img
            src="images/aboutUs/mission.png"
            alt="our mission"
            className="lg:w-[47%] w-full h-auto mb-6"
            loading="lazy"
          />
          <img
            src="images/aboutUs/vision.png"
            alt="our vision"
            className="lg:w-[47%] w-full h-auto mb-6"
            loading="lazy"
          />
        </div>

        <div>
          <img src="images/aboutUs/aim.png" alt="aim" className="w-full h-auto" loading="lazy" />
        </div>
      </div>

      {/* Certifications */}
      <OurCertifications />

      {/* Keep In Touch */}
      <KeepInTouch />
    </section>
  );
};

export default AboutUs;
