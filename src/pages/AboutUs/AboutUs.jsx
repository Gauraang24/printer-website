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
        <Divider className="!my-20" style={{
          borderColor: '#000',
        }}>
          <p className="text-4xl font-bold px-10">Company Profile</p>
        </Divider>

        <div className="w-full flex min-[1080px]:!flex-row flex-col-reverse">
          <div className="min-[1080px]:!w-[45%] w-full flex flex-col justify-between p-4">
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

        <div>
          <div className="min-[1080px]:flex min-[1080px]:flex-row flex-col justify-between">
            <img src="images/aboutUs/mission.png" alt="our mission" className="min-[1080px]:w-[47%] h-auto w-full mb-[6%]" />
            <img src="images/aboutUs/vision.png" alt="our vision" className="min-[1080px]:w-[47%] h-auto w-full mb-[6%]" />
          </div>

          <div>
            <img src="images/aboutUs/aim.png" alt="aim" />

          </div>
        </div>


      </div>

      {/* Certifications  */}
      <OurCertifications />

      {/* Keep In Touch  */}
      <KeepInTouch />
    </section>
  );
};

export default AboutUs;
