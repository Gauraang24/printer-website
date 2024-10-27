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
        />
      </div>

      {/* Company Profile  */}
      <div className={`w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <CustomDivider
          title={'Company Profile'}
        />


        <div className="w-full flex lg:flex-row flex-col-reverse gap-4">
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
          <div className="lg:w-[55%] border-2">
            {/* <img src="" alt="Logo" /> */}
            IMAGE LOGO GOES HERE
          </div>
        </div>
      </div>

      {/* Image Section 1st */}
      <div className={`w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto ${mblg} `}>
        <img
          src="images/aboutUs/about_1.png"
          className="w-full h-auto "
          alt="banner"
        />
      </div>

      {/* Mid Info Section */}
      <div className={`w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <p className={`${fontmd} font-semibold text-justify`}>
          {aboutUs?.info}
        </p>
      </div>

      {/* Image Section 2nd */}
      <div className={`w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <img
          src="images/aboutUs/about_2.png"
          className="w-full h-auto"
          alt="banner"
        />
      </div>

      {/* Mid Info Section 2nd */}
      <div className={`w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <p className={`${fontmd} font-semibold text-justify`}>
          {aboutUs?.info2}
        </p>
      </div>

      {/* Image Section 3rd */}
      <div className={`w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <div className="flex flex-col lg:flex-row justify-between">
          <img
            src="images/aboutUs/mission.png"
            alt="our mission"
            className="lg:w-[47%] w-full h-auto mb-6"
          />
          <img
            src="images/aboutUs/vision.png"
            alt="our vision"
            className="lg:w-[47%] w-full h-auto mb-6"
          />
        </div>

        <div>
          <img src="images/aboutUs/aim.png" alt="aim" className="w-full h-auto" />
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
