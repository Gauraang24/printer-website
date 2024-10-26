import { Collapse, Divider } from "antd";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import { donts, dos } from "../../staticData/ewaste";
import { CheckCircleFilled, CheckOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { ewasteData } from "../../../public/excel_files/ewastedata";

const Ewaste = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  console.log("isLargeScreen", isLargeScreen);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section>
      {/* Banner Section */}
      <div className="w-full mt-[100px] sm:mt-0">
        <img
          src="/images/ewaste/Banner.png"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>
      {/* RoHS Compliance */}
      <div className="w-[80%] mx-auto 2xs:mt-[30px] sm:mt-[40px] md:mt-[50px] lg:mt-[60px] xl:mt-[70px] 2xl:mt-[80px]">
        <Divider className="">
          <p className="2xs:text-[20px] sm:text-[23px] xmd:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[35px] font-bold px-8 md:px-10 lg:px-14 xl:px-20">
            RoHS Compliance
          </p>
        </Divider>
        <p className="text-justify lg:text-center 2xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] 2xl:text-[25px]">
          We are committed to environmental responsibility. Our products are
          designed for longevity and low energy consumption, complying with the
          RoHS directive, which restricts the use of hazardous substances like
          lead, mercury, and cadmium. This helps protect the environment by
          reducing pollution.
        </p>
      </div>

      {/* Dos and Donts  */}
      <div className="w-full 2xs:mt-[30px] sm:mt-[40px] md:mt-[50px] lg:mt-[60px] xl:mt-[70px] 2xl:mt-[80px]">
        <div className="w-[80%] mx-auto">
          <Divider className="">
            <p className="2xs:text-[20px] sm:text-[23px] xmd:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[35px] font-bold  px-8 md:px-10 lg:px-14 xl:px-20">
              {`Do's and Don’ts`}
            </p>
          </Divider>
        </div>

        <div className="flex flex-col md:flex-row bg-[#49B749]">
          <div className="w-full md:w-[48%] bg-[#49B749] flex items-center  flex-col xl:pt-20 lg:pt-16 md:pt-12 sm:pt-10 2xs:pt-8">
            <div className="h-[50px] w-[150px] lg:h-[90px] lg:w-[260px] border-4 border-white rounded-full flex justify-between gap-2 px-4 items-center mb-10">
              <CheckCircleFilled style={{ fontSize: isLargeScreen ? "55px" : "25px", color: "#fff" }} />
              <div className="flex-1">
                <p className="text-white 2xs:text-[18px] sm:text-[20px] md:text-[24px] lg:text-[27px] xl:text-[31px] font-extrabold text-center">
                  {`Do's`}
                </p>
              </div>
            </div>

            <div className="mb-10">
              {dos.map((i, index) => {
                return (
                  <div key={index} className="mx-[10%] flex justify-between items- gap-5 mb-4">
                    <CheckOutlined
                      style={{
                        fontSize: "40px",
                        fontWeight: "bold",
                        color: "#fff",
                        // marginTop: "10px",
                      }}
                    />
                    <p className="2xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] 2xl:text-[25px] font-medium text-justify text-white">
                      {i}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="w-full md:w-[52%] bg-[#ED2024] flex items-center flex-col xl:pt-20 lg:pt-16 md:pt-12 sm:pt-10 2xs:pt-8 lg:clip-path-none"
            style={{
              clipPath:
                isLargeScreen && "polygon(3% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="h-[50px] w-[150px] lg:h-[90px] lg:w-[260px] border-4 border-white rounded-full flex justify-between gap-2 px-4 items-center mb-10">
              <CheckCircleFilled
                style={{
                  fontSize: isLargeScreen ? "55px" : "25px",
                  color: "#fff",
                }}
              />
              <div className="flex-1">
                <p className="text-white 2xs:text-[18px] sm:text-[20px] md:text-[24px] lg:text-[27px] xl:text-[31px] font-extrabold text-center">
                  {`Dont's`}
                </p>
              </div>
            </div>

            <div className="mb-10">
              {donts.map((i, index) => {
                return (
                  <div key={index} className="mx-[10%] flex items-center gap-5 mb-4">
                    <CheckOutlined
                      style={{
                        fontSize: "40px",
                        fontWeight: "bold",
                        color: "#fff",
                        // marginTop: "10px",
                      }}
                    />
                    <p className="2xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] 2xl:text-[25px] font-medium text-justify text-white">
                      {i}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* E-Waste Collection */}
      <div className="w-[80%] mx-auto 2xs:my-[30px] sm:my-[40px] md:my-[50px] lg:my-[60px] xl:my-[70px] 2xl:my-[80px]">
        <Divider className="">
          <p className="2xs:text-[20px] sm:text-[23px] xmd:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[35px] font-bold  px-8 md:px-10 lg:px-14 xl:px-20">
            E-Waste Collection
          </p>
        </Divider>

        <p className="text-justify 2xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] 2xl:text-[25px] mb-12">
          We have signed an agreement with M/s. GLOBAL WASTE SOLUTION, who is an
          authorized dismantler and recycler having authorization from Haryana
          Pollution control board as our new Recycler, who shall be responsible
          for all the PR activities including collection transportation storage,
          segregation and dismantling and recycling with regards to our E Waste.
          We will use our recycler Partner's collection points for channelizing
          the e-waste. Having no collection points in our state, we will be
          using the collection points of our neighbouring state for collecting
          e-waste. There is a state-wise list of collection points, established
          by M/s. GLOBAL WASTE SOLUTION.
        </p>

        <div className="w-full gap-2 justify-around flex flex-wrap">
          {ewasteData.map((item, index) => {
            return (
              <Collapse
                key={index}
                className="w-full sm:w-[49%]"
                items={[
                  {
                    key: "1",
                    label: item?.state,
                    children: <div>
                      <div className="flex h-auto">
                        <p className="w-1/2 text-start">Location</p>
                        <p className="w-1/2 ">{item?.location}</p>
                      </div>
                      <div className="flex h-auto">
                        <p className="w-1/2 text-start">Address</p>
                        <p className="w-1/2 ">{item?.address}</p>
                      </div>
                      <div className="flex h-auto">
                        <p className="w-1/2 text-start">Contact Person</p>
                        <div className="w-1/2 ">
                          <p><span>Contact person :</span>{item?.contactPerson?.name}</p>
                          <p><span>Contact person :</span>{item?.contactPerson?.centralizedContactPerson}</p>
                        </div>
                      </div>
                      <div className="flex h-auto">
                        <p className="w-1/2 text-start">Contact Number</p>
                        <div className="w-1/2 ">
                          <p><span>Toll Number :</span>{item?.contactNumber?.tollNo}</p>
                          <p><span>Contact Number :</span>{item?.contactNumber?.contactNo}</p>
                          <p><span>Centralized Number :</span>{item?.contactNumber?.centralizedNo}</p>
                        </div>
                      </div>
                    </div>,
                  },
                ]}
              />
            );
          })}
        </div>
      </div>

      {/* Keep In Touch  */}
      <KeepInTouch />
    </section>
  );
};

export default Ewaste;
