import KeepInTouch from "../../commonComponents/KeepInTouch";
import OurCertifications from "../../commonComponents/OurCertifications";
import { aboutUs, OurCertificationsAbout } from "../../staticData/aboutUs";
import { CustomDivider } from "../../commonComponents/CustomDivider";
import { fontlg, fontmd, mblg, mbMd } from "../../utils/constant";
import Reveal from "../../commonComponents/Animation/Reveal";

const AboutUs = () => {
  return (
    <section>
      {/* Banner Section  */}
      <Reveal width="w-full">
        <div className="w-full mt-[100px] sm:mt-0">
          <img
            src="./images/aboutUs/AboutBanner.webp"
            alt="Banner"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </Reveal>

      {/* Company Profile  */}
      <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <CustomDivider title={"Company Profile"} />

        <Reveal width="w-full" className={"!w-full"}>
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
              <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden ">
                  <iframe
                    className="w-full h-full"
                    src={
                      "https://www.youtube.com/embed/7OmRHGHMGsk?si=yM3VrCjptfV5CtJU&amp;start=1"
                    }
                    title={"CWC Logo Reveal: Unleashing Our Energy and Passion"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    CWC Logo Reveal: Unleashing Our Energy and Passion
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 truncate">
                    The CWC Laser Printer is a remarkable achievement for the
                    Indian technology industry, as it showcases the ability of
                    Indian engineers to innovate and develop cutting-edge
                    technology. The printer is built using high-quality
                    components and has been designed to deliver superior print
                    quality, reliability, and affordability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Image Section 1st */}
      <Reveal width="w-full">
        <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg} `}>
          <img
            src="images/aboutUs/about_1.png"
            className="w-full h-auto "
            alt="banner"
            loading="lazy"
          />
        </div>
      </Reveal>

      {/* Mid Info Section */}
      <Reveal width="w-full">
        <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
          <p className={`${fontmd} font-semibold text-justify`}>
            {aboutUs?.info}
          </p>
        </div>
      </Reveal>

      {/* Image Section 2nd */}
      <Reveal width="w-full">
        <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
          <img
            src="images/aboutUs/about_2.png"
            className="w-full h-auto"
            alt="banner"
            loading="lazy"
          />
        </div>
      </Reveal>

      {/* Mid Info Section 2nd */}
      <Reveal width="w-full">
        <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
          <p className={`${fontmd} font-semibold text-justify`}>
            {aboutUs?.info2}
          </p>
        </div>
      </Reveal>

      {/* Image Section 3rd */}
      {/* <Reveal width="w-full"> */}

      <div className={`w-[90%] sm:max-w-[1200px] mx-auto`}>
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-6">
          <Reveal className={""}>
            <img
              src="images/aboutUs/mission.png"
              alt="our mission"
              className="w-full h-auto"
              loading="lazy"
            />
          </Reveal>
          <Reveal width="w-full" className={""}>
            <img
              src="images/aboutUs/vision.png"
              alt="our vision"
              className="w-full h-auto"
              loading="lazy"
            />
          </Reveal>
        </div>

        <div>
          <Reveal width="w-full">
            <img
              src="images/aboutUs/aim.png"
              alt="aim"
              className="w-full h-auto"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
      {/* </Reveal> */}

      {/* Certifications */}

      {/* <OurCertifications /> */}
      <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <CustomDivider title={"Our Certification"} />
        {OurCertificationsAbout.map((i) => {
          return (
            <div>
              <p className={` ${fontmd} font-bold text-justify text-[#1D9BD7]`}>
                {i?.heading}
              </p>
              <p className={`${mbMd} ${fontmd} font-medium text-justify`}>
                {i?.desc}
              </p>
            </div>
          );
        })}

        <p className={` ${fontmd} font-bold`}>
          *Note: If you need the soft copy please mail us{" "}
        </p>
      </div>

      {/* <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <CustomDivider title={"Gallery"} />
        <div className="w-full aspect-video rounded-3xl bg-[#d9d9d9]"></div>
      </div> */}

      {/* Keep In Touch */}
      <KeepInTouch />
    </section>
  );
};

export default AboutUs;
