import { Carousel } from "antd";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import OurCertifications from "../../commonComponents/OurCertifications";
import {
  certificatesData,
  homeCarousalData,
  productCarousalData,
  serviceSupport,
} from "../../staticData/Data";


const Home = () => {
  return (
    <section className=" !h-full bg-[#f6f6f6]">
      {/* Banner Section */}
      <div className="w-full overflow-x-auto ">
        <Carousel
          Carousel
          arrows
          infinite={true}
          autoplay
          className="w-full h-auto"
        >
          {homeCarousalData.map((i) => {
            return (
              <div key={i.key}>
                <img
                  className="w-full h-auto object-contains"
                  src={i.link}
                  alt={i.alt}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* CERTIFICATE SECTION */}
      <div>
        <div className="flex w-[90%] 2xs:w-[95%] xs:[90%] lg:w-[80%] mx-auto justify-between items-center xl:py-[62px] lg:py-[50px] md:py-[40px] sm:py-[30px] 2xs:py-5 ">
          {certificatesData.map((item) => {
            return (
              <div
                key={item.key}
                className="flex  justify-center items-center 2xl:w-[300px] 2xl:h-[300px] xl:w-[240px] xl:h-[240px] lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] sm:w-[140px] sm:h-[140px] 2xs:h-[80px] 2xs:w-[80px]  bg-white rounded-2xl gap-5"
              >
                <img
                  src={item.link}
                  alt={`${item.title} logo`}
                  className="xl:p-8 lg:p-6 md:p-6 sm:p-6 2xs:p-4"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ABOUT US SECTION  */}
      <div
        className="h-auto"
        style={{
          backgroundImage: "url(images/home/about-us-section-bg.svg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Ensures the image scales properly
        }}
      >
        <div className="w-[90%] 2xl:w-[80%]  mx-auto">
          <div className="w-max mx-auto 2xl:py-[85px] xl:py-[60px] lg:py-[30px] sm:py-[25px] 2xs:py-[20px]">
            <p className="xl:text-[35px] lg:text-[25px]  md:text-[20px] font-bold border-b border-black">
              About Us
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-5 items-center 2xl:pb-[85px] xl:pb-[60px] lg:pb-[30px] sm:pb-[25px]">
            <div className="w-1/3 lg:w-1/2 flex justify-center items-center mb-5 sm:mb-0">
              <img
                src="./images/home/printer.svg"
                alt="Printer"
                className="2xl:w-[500px] 2xl:h-[500px] xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-250px"
              />
            </div>
            <div className="w-2/3 lg:w-1/2 2xs:hidden sm:flex">
              <p className="2xl:text-[25px] xl:text-[22px] md:text-[20px] sm:text-[18px] sm:leading-[25px] text-justify">
                The &quot;<b>CWC</b>&quot; brand is a product brand that serves
                as a testament to the reliability of E-Compusell Pvt. Ltd. It is
                a dynamic and innovative Start-up specializing in designing,
                developing, and manufacturing high-quality <b>Make-In-India</b>{" "}
                Laser Printers & Laser Multifunction Printers (MFPs) for a wide
                range of customers. CWC team comprises of experts in the
                printing industry who have years of experience and knowledge to
                draw upon. We leverage our knowledge of the industry and invest
                in research and development to create products that will meet
                the evolving needs of customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden w-[90%] mx-auto">
        <p
          className="text-[14px] leading-[20px] text-justify 2xs:py-4 xs:py-6"
        >
          The &quot;<b>CWC</b>&quot; brand is a product brand that serves as a
          testament to the reliability of E-Compusell Pvt. Ltd. It is a dynamic
          and innovative Start-up specializing in designing, developing, and
          manufacturing high-quality <b>Make-In-India</b> Laser Printers & Laser
          Multifunction Printers (MFPs) for a wide range of customers. CWC team
          comprises of experts in the printing industry who have years of
          experience and knowledge to draw upon. We leverage our knowledge of
          the industry and invest in research and development to create products
          that will meet the evolving needs of customers.
        </p>
      </div>

      {/* PRODUCT SECTION */}
      <div className="w-screen h-auto">
        <div className="w-max mx-auto 2xl:py-[85px] xl:py-[60px] lg:py-[30px] sm:py-[25px] 2xs:py-[20px]">
          <p className=" xl:text-[35px] lg:text-[25px] md:text-[20px] font-bold border-b border-black">
            Product
          </p>
        </div>

        <Carousel
          Carousel
          arrows
          infinite={true}
          autoplay
          className="customArrows flex justify-between "
        >
          {productCarousalData.map((i, index) => {
            return (
              <div
                className="!w-[80%] mx-auto !block bg-white rounded-3xl py-4 sm:py-5 md:py-7 lg:py-14 shadow-lg  2xl:mb-[85px] xl:mb-[60px] lg:mb-[30px] sm:mb-[25px] 2xs:mb-[20px]"
                key={index}
              >
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="sm:w-1/2 flex justify-center items-center">
                    <img
                      src={i?.imgLink}
                      alt="Printer"
                      className="2xl:w-[500px] 2xl:h-[500px] xl:w-[400px] xl:[400px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px] 2xs:h-[100px] 2xs:w-[100px]"
                    />
                  </div>
                  <div className=" sm:w-1/2">
                    <div className="2xs:mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                      <p className="text-center sm:text-left 2xl:text-[32px] xl:text-[28px] lg:text-[24px] md:text-[22px] sm:text-[20px] 2xs:text-[14px] font-bold">
                        {i?.printerName}
                      </p>
                      <p className="text-center sm:text-left 2xl:text-[25px] xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[20px] 2xs:text-[14px] font-bold">
                        {i?.type}
                      </p>
                    </div>

                    <div className="2xs:mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                      {i?.specification.map((spec) => {
                        return (
                          <div
                            key={spec.key}
                            className="flex justify-between items-center w-full"
                          >
                            <p className="2xl:text-[25px] xl:text-[22px] md:text-[14px] sm:text-[13px] 2xs:text-[12px] font-medium w-1/2">
                              {spec?.title}
                            </p>
                            <p className="2xl:text-[25px] xl:text-[22px] md:text-[14px] sm:text-[13px] 2xs:text-[12px] font-medium w-1/2 text-left">
                              {spec?.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex items-center sm:gap-4 md:gap-5 lg:gap-7">
                      <p className=" xl:text-[25px] lg:text-[22px] font-bold">
                        Available on
                      </p>
                      {i?.availableOn.map((img) => {
                        return (
                          <img
                            src={img?.link}
                            alt={img?.title}
                            key={img?.key}
                            className="w-[150px] h-auto lg:w-[100px] md:w-[90px] sm:w-[60px] 2xs:w-[60px]"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      {/* SERVICE & SUPPORT SECTION */}
      <div
        style={{
          backgroundImage: "url(images/home/Service-bg.svg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundSize: 'cover', // Ensures the image scales properly
        }}
      >
        <div className="w-max mx-auto 2xl:py-[85px] xl:py-[60px] lg:py-[30px] sm:py-[25px] 2xs:py-[20px]">
          <p className="xl:text-[35px] lg:text-[25px] md:text-[20px] font-bold border-b border-black">
            Service & Support
          </p>
        </div>

        <div className="flex w-[90%] sm:w-[80%] mx-auto justify-between items-center 2xs:pb-6 sm:pb-6 md:pb-8 lg:pb-12">
          {serviceSupport.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center 2xl:w-[350px] 2xl:h-[350px] xl:w-[300px] xl:h-[300px] lg:w-[250px] lg:h-[250px] md:w-[200px] md:h-[200px] sm:h-[150px] sm:w-[150px] 2xs:h-[100px] 2xs:w-[100px]  bg-white rounded-2xl gap-5"
              >
                <img
                  src={item.link}
                  alt={`${item.title} logo`}
                  className="xl:w-[180px] xl:h-[180px] lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:h-[80px] sm:w-[80px] 2xs:w-[60px] 2xs:h-[60px]"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* OUR CERTIFICATION SECTION  */}
      <OurCertifications />

      {/* KEEP IN TOUCH SECTION  */}
      <KeepInTouch />
    </section>
  );
};

export default Home;
