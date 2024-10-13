import { Divider } from "antd";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import OurCertifications from "../../commonComponents/OurCertifications";
import { aboutUs } from "../../staticData/aboutUs";

const AboutUs = () => {
  return (
    <section>
      {/* Banner Section  */}
      <div className="w-full">
        <img
          src="/images/aboutUs/Banner.png"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>

      {/* Company Profile  */}
      <div className="w-[80%] mx-auto mb-20">
        <Divider className="!my-20">
          <p className="text-4xl font-bold px-10">Company Profile</p>
        </Divider>

        <div className="w-full flex">
          <div className="w-[45%] flex flex-col justify-between p-4">
            <p
              className="text-[30px] font-bold mb-3"
              dangerouslySetInnerHTML={{
                __html: aboutUs.companyProfile.heading,
              }}
            ></p>
            <p className="text-[25px] font-medium">
              {aboutUs.companyProfile.desc}
            </p>
          </div>
          <div className="w-[55%] border-2">
            {/* <img src="" alt="Logo" /> */}
            IMAGE LOGO GOES HERE
          </div>
        </div>
      </div>

      {/* image section 1st */}
      <div className="w-[80%] mx-auto mb-20">
        <img
          src="images/aboutUs/about_1.png"
          className="w-full h-auto"
          alt="banner"
        />
      </div>

      {/* mid info section  */}
      <div className="w-[80%] mx-auto mb-20">
        <p className="text-[30px] font-semibold text-justify">
          {aboutUs?.info}
        </p>
      </div>

      {/* image section 2nd */}
      <div className="w-[80%] mx-auto mb-20">
        <img
          src="images/aboutUs/about_2.png"
          className="w-full h-auto"
          alt="banner"
        />
      </div>

      {/* mid info section 2nd */}
      <div className="w-[80%] mx-auto mb-20">
        <p className="text-[30px] font-semibold text-justify">
          {aboutUs?.info2}
        </p>
      </div>

      {/* Image Section 3rd */}

      <div className="w-[80%] mx-auto mb-20">

        <div className="flex justify-between mb-[6%]">
          <img src="images/aboutUs/mission.png" alt="our mission" className="w-[47%] h-auto"/>
          <img src="images/aboutUs/vision.png" alt="our vision" className="w-[47%] h-auto"/>
        </div>

        <img src="images/aboutUs/aim.png" alt="aim" />
        
      </div>

      {/* Certifications  */}
      <OurCertifications />

      {/* Keep In Touch  */}
      <KeepInTouch />
    </section>
  );
};

export default AboutUs;
