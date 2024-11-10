import { useState } from "react";
import { useParams } from "react-router-dom";
import { printerDetails } from "../../staticData/productDetailData";
import { Button, Carousel } from "antd";
import { convertToPrintSpecification } from "../../utils/functions";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import { fontlg, fontmd, fontsm, mtlg, mtMd, mylg } from "../../utils/constant";
import { CustomDivider } from "../../commonComponents/CustomDivider";

const ProductDetails = () => {
  const params = useParams();
  const [currentImg, setCurrentImg] = useState(
    "./images/productPage/CWC_M2.png"
  );
  const staticData = [
    {
      key: "1",
      link: "./images/productPage/CWC_M1.png",
    },
    {
      key: "1",
      link: "./images/productPage/CWC_M2.png",
    },
    {
      key: "1",
      link: "./images/productPage/CWC_M3.png",
    },
  ];
  return (
    <section className="bg-[#f7f7f7]">
      {/* Banner Section */}
      <div className="w-full mt-[100px] sm:mt-0">
        <img
          src="./images/productPage/Banner.jpg"
          alt="Banner"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Images and Summarized Info Section  */}
      <div className={`w-[90%]  sm:w-[80%] sm:max-w-[1200px] mx-auto flex flex-col sm:flex-row gap-1 ${mylg} `}>
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
                    <img src={i?.link} alt="" className="" loading="lazy" />
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
        <div className="w-full sm:w-1/2  hidden sm:flex gap-3 justify-evenly  h-max">
          <div className="flex flex-col justify-between gap-2 w-[15%] sm:w-[20%]">
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
                    <img src={i?.link} alt="" className="" loading="lazy" />
                  </div>
                </>
              );
            })}
          </div>
          <div className="w-[90%]  sm:w-[80%] sm:max-w-[1200px]">
            <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center p-4 shadow-xl">
              <img src={currentImg} alt="" className="w-full" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-0 sm:pl-8 w-full sm:w-1/2 flex flex-col justify-between ">
          <div className="flex flex-col 2xs:gap-4 lg:gap-8">
            <p className={`font-bold ${fontlg}`}>
              {printerDetails[params.productId]?.title}
            </p>

            <div>
              {printerDetails[params.productId]?.specSummary.map((i, idx) => {
                return (
                  <p key={idx} className={`${fontsm} pb-1 lg:pb-2`}>
                    {i}
                  </p>
                );
              })}
            </div>
          </div>
          <div className={`flex gap-2 ${mtMd}`}>
            <Button className="w-1/2 rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2x h-12 xs:h-14 xmd:h-14 sm:h-14 lg:h-16 xl:h-20 shadow-xl ">
              <p className={`${fontsm} font-bold`}>
                Get Drivers
              </p>
            </Button>
            <Button
              className="w-1/2 rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl h-12 xs:h-14 xmd:h-14 sm:h-14 lg:h-16 xl:h-20 shadow-xl "
              title="Enquire Now"
            >
              <p className={`${fontsm} font-bold`}>
                Enquire Now
              </p>
            </Button>
          </div>
        </div>
      </div>

      {/* Detailed Summary Section  */}

      <div className="w-[90%]  sm:w-[80%] sm:max-w-[1200px] m-auto mb-16">
        <CustomDivider title={'PRODUCT SPECIFICATION'} />
        <div>
          {Object.entries(printerDetails?.[params.productId]?.details).map(
            ([key, value], index) => {
              return (
                <div key={index} className={`flex flex-col xmd:flex-row justify-between gap-3 `}>
                  <div className="w-full xmd:w-1/3 ">
                    <p className={`${fontmd} font-bold border-b border-black w-full xmd:w-max  leading-[50px]`}>
                      {convertToPrintSpecification(key)}
                    </p>
                  </div>
                  <div className="w-full xmd:w-2/3 md:ml-5">
                    {value.map((items, idx) => {
                      return (
                        <div key={idx} className="flex gap-2 justify-between flex-1 ">
                          <p className={`w-1/2 ${fontsm} font-medium leading-[50px]`}>
                            {items?.title}
                          </p>
                          <p className={`w-1/2 ${fontsm} font-medium leading-[50px] break-words`}>
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
