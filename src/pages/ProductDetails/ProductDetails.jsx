import { useState } from "react";
import { useParams } from "react-router-dom";
import { printerDetails } from "../../staticData/productDetailData";
import { Button, Carousel, Divider } from "antd";
import { convertToPrintSpecification } from "../../utils/functions";
import KeepInTouch from "../../commonComponents/KeepInTouch";

const ProductDetails = () => {
  const params = useParams();
  const [currentImg, setCurrentImg] = useState(
    "/images/productPage/CWC_M2.png"
  );
  const staticData = [
    {
      key: "1",
      link: "/images/productPage/CWC_M1.png",
    },
    {
      key: "1",
      link: "/images/productPage/CWC_M2.png",
    },
    {
      key: "1",
      link: "/images/productPage/CWC_M3.png",
    },
  ];
  return (
    <section className="bg-[#f7f7f7]">
      {/* Banner Section */}
      <div className="w-full">
        <img
          src="/images/productPage/Banner.jpg"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>

      {/* Images and Summarized Info Section  */}
      <div className="w-[90%] xl:w-[80%] mx-auto flex flex-col sm:flex-row gap-1 2xs:my-8 xs:my-10 sm:my-12 md:my-14 lg:my-16 xl:my-16 ">
        <div className="w-full sm:hidden">
          <Carousel
            Carousel
            arrows
            infinite={true}
            autoplay
            className="customArrows flex justify-between "
          >
            {staticData.map((i) => {
              return (
                <>
                  <div
                    key={i?.key}
                    className="w-[300px] mx-auto flex items-center justify-center p-3"
                    onClick={() => {
                      setCurrentImg(i?.link);
                    }}
                  >
                    <img src={i?.link} alt="" className="" />
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
        <div className="w-full sm:w-1/2  hidden sm:flex gap-3 justify-evenly ">
          <div className="flex flex-col  gap-5 w-[15%] sm:w-[20%]">
            {staticData.map((i) => {
              return (
                <>
                  <div
                    key={i?.key}
                    className="w-full aspect-square bg-white flex items-center justify-center shadow-xl p-3"
                    onClick={() => {
                      setCurrentImg(i?.link);
                    }}
                  >
                    <img src={i?.link} alt="" className="" />
                  </div>
                </>
              );
            })}
          </div>
          <div className="w-[85%] sm:w-[80%]">
            <div className="w-full aspect-square bg-white flex items-center justify-center p-4 shadow-xl">
              <img src={currentImg} alt="" className="w-full" />
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-0 sm:pl-8 w-full sm:w-1/2  flex flex-col justify-between ">
          <div className="flex flex-col 2xs:gap-4 lg:gap-8">
            <p className="font-bold 2xs:text-xl xs:text-2xl sm:text-base md:text-xl lg:text-2xl xl:text-3xl ">
              {printerDetails[params.productId]?.title}
            </p>

            <div>
              {printerDetails[params.productId]?.specSummary.map((i) => {
                return (
                  <p className="2xs:text-[13px] xs:text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl pb-1 lg:pb-2">
                    {i}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex gap-2 mt-4 2xs:mt-4 xmd:mt-6 lg:mt-8">
            <Button className="w-1/2 rounded-2xl h-12 xs:h-14 xmd:h-14 sm:h-14 lg:h-16 xl:h-20 shadow-xl ">
              <p className="text-base xs:text-lg sm:text-base  md:text-lg lg:text-xl xl:text-2xl font-bold">
                Get Drivers
              </p>
            </Button>
            <Button
              className="w-1/2 rounded-2xl h-12 xs:h-14 xmd:h-14 sm:h-14 lg:h-16 xl:h-20 shadow-xl "
              title="Enquire Now"
            >
              <p className="text-base xs:text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
                Enquire Now
              </p>
            </Button>
          </div>
        </div>
      </div>

      {/* Detailed Summary Section  */}

      <div className="w-[90%] lg:w-[80%] m-auto mb-16">
        <Divider className="mb-20">
          <p className=" sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">PRODUCT SPECIFICATION</p>
        </Divider>

        <div>
          {Object.entries(printerDetails?.[params.productId]?.details).map(
            ([key, value]) => {
              return (
                <div className="flex flex-col xmd:flex-row justify-between 2xs:mt-4 xs:mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-20">
                  <div className="w-full xmd:w-1/3 ">
                    <p className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base 2xs:text-sm font-bold border-b border-black w-max">
                      {convertToPrintSpecification(key)}
                    </p>
                  </div>
                  <div className="w-full mt-5 xmd:w-2/3  md:ml-5">
                    {value.map((items) => {
                      return (
                        <div className="flex justify-between flex-1 ">
                          <p className="w-1/2 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm 2xs:text-xs font-medium leading-[50px]">
                            {items?.title}
                          </p>
                          <p className="w-1/2 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm 2xs:text-xs font-medium leading-[50px] break-words">
                            {items?.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* Keep In Touch  */}
      <KeepInTouch />
    </section>
  );
};

export default ProductDetails;
