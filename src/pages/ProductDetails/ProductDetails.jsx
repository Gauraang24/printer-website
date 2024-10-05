import { useState } from "react";
import { useParams } from "react-router-dom";
import { printerDetails } from "../../staticData/productDetailData";
import { Button, Divider } from "antd";
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
      <div className="w-[80%] mx-auto flex gap-1 my-16">
        <div className="w-1/2 h-[500px] flex  justify-evenly">
          <div className="flex flex-col  justify-between">
            {staticData.map((i) => {
              return (
                <>
                  <div
                    key={i?.key}
                    className="w-[150px] h-[150px] bg-white flex items-center justify-center shadow-xl p-3"
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
          <div>
            <div className="w-[500px] h-[500px] bg-white flex items-center justify-center p-4 shadow-xl">
              <img src={currentImg} alt="" className="w-full" />
            </div>
          </div>
        </div>

        <div className="w-1/2 h-[500px] flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <p className="font-bold text-3xl w-[600px] ">
              {printerDetails[params.productId]?.title}
            </p>

            <div>
              {printerDetails[params.productId]?.specSummary.map((i) => {
                return <p className="text-2xl pb-2">{i}</p>;
              })}
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              className="w-1/2 rounded-2xl h-24 shadow-xl"
              title="Get Drivers"
            >
              <p className="text-2xl font-bold">Get Drivers</p>
            </Button>
            <Button
              className="w-1/2 rounded-2xl h-24 shadow-xl"
              title="Enquire Now"
            >
              <p className="text-2xl font-bold">Enquire Now</p>
            </Button>
          </div>
        </div>
      </div>

      {/* Detailed Summary Section  */}

      <div className="w-[80%] m-auto mb-16">
        <Divider className="mb-20">
          <p className="text-4xl font-bold">PRODUCT SPECIFICATION</p>
        </Divider>

        <div>
          {Object.entries(printerDetails?.[params.productId]?.details).map(
            ([key, value]) => {
              return (
                <div className="flex justify-between mt-20">
                  <div className="w-1/3 text-3xl font-bold">
                  <p className="border-b border-black w-max">
                    
                  {convertToPrintSpecification(key)}
                  </p>
                  </div>
                  <div className="w-2/3">
                    {
                        value.map((items)=>{
                            return <div className="flex justify-between flex-1 ">
                            <p className="w-1/2 text-2xl font-medium leading-[50px]">{items?.title}</p>
                            <p className="w-1/2 text-2xl font-medium leading-[50px]">{items?.desc}</p>
                            </div> 
                        })
                    }
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* Keep In Touch  */}
      <KeepInTouch/>
    </section>
  );
};

export default ProductDetails;
