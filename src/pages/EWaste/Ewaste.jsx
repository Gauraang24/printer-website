import { Collapse } from "antd";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import { donts, dos } from "../../staticData/ewaste";
import { CheckCircleFilled, CheckOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { ewasteData } from "../../../public/excel_files/ewastedata";
import { fontlg, fontmd, fontsm, fontxs, mtlg, mylg, ptlg } from "../../utils/constant";
import { CustomDivider } from "../../commonComponents/CustomDivider";

const Ewaste = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const [isAboveSM, setIsAboveSM] = useState(window.innerHeight >= 640)
  console.log("isAboveSm", isAboveSM)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
      setIsAboveSM(window.innerWidth >= 640)
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const returnCollapse = (item, index) => {
    return <>
      <Collapse
        key={index}
        className="w-full mb-2"
        items={[
          {
            key: { index },
            label: item?.state,
            children: <div>
              <div className="flex mb-2 h-auto">
                <p className={`w-1/2 text-start font-bold ${fontxs}`}>Location</p>
                <p className={`w-1/2 ${fontxs}`}>{item?.location}</p>
              </div>
              <div className="flex mb-2 h-auto">
                <p className={`w-1/2 text-start font-bold ${fontxs}`}>Address</p>
                <p className={`w-1/2 ${fontxs}`}>{item?.address}</p>
              </div>
              <div className="flex mb-2 h-auto">
                <p className={`w-1/2 text-start font-bold ${fontxs}`}>Contact Person</p>
                <div className={`w-1/2 ${fontxs}`}>
                  <p><span className="font-bold">Contact person :</span>{item?.contactPerson?.name}</p>
                  <p><span className="font-bold">Contact person :</span>{item?.contactPerson?.centralizedContactPerson}</p>
                </div>
              </div>
              <div className="flex mb-2 h-auto">
                <p className={`w-1/2 text-start font-bold ${fontxs}`}>Contact Number</p>
                <div className={`w-1/2 ${fontxs}`}>
                  <p><span className="font-bold">Toll Number :</span>{item?.contactNumber?.tollNo}</p>
                  <p><span className="font-bold">Contact Number :</span>{item?.contactNumber?.contactNo}</p>
                  <p><span className="font-bold">Centralized Number :</span>{item?.contactNumber?.centralizedNo}</p>
                </div>
              </div>
            </div>,
          },
        ]}
      />
    </>
  }
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
      <div className={`w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto ${mtlg}`}>
        <CustomDivider title={'RoHS Compliance'} />

        <p className={`text-justify lg:text-center ${fontmd}`}>
          We are committed to environmental responsibility. Our products are
          designed for longevity and low energy consumption, complying with the
          RoHS directive, which restricts the use of hazardous substances like
          lead, mercury, and cadmium. This helps protect the environment by
          reducing pollution.
        </p>
      </div>

      {/* Dos and Donts  */}
      <div className={`w-full ${mtlg}`}>
        <div className="w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto">
          <CustomDivider title={"Do's and Don’ts"} />
        </div>

        <div className="flex flex-col md:flex-row bg-[#49B749]">
          <div className={`w-full md:w-[48%] bg-[#49B749] flex items-center  flex-col ${ptlg}`}>
            <div className="h-[50px] w-[150px] lg:h-[90px] lg:w-[260px] border-4 border-white rounded-full flex justify-between gap-2 px-4 items-center mb-10">
              <CheckCircleFilled style={{ fontSize: isLargeScreen ? "55px" : "25px", color: "#fff" }} />
              <div className="flex-1">
                <p className={`text-white ${fontlg} font-extrabold text-center`}>
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
                    <p className={`${fontsm} font-medium text-justify text-white`}>
                      {i}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`w-full md:w-[52%] bg-[#ED2024] flex items-center flex-col ${ptlg} lg:clip-path-none`}
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
                <p className={`text-white ${fontlg} font-extrabold text-center`}>
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
                    <p className={`${fontmd} font-medium text-justify text-white`}>
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
      <div className={`w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto ${mylg} `}>

        <CustomDivider title={"E-Waste Collection"} />

        <p className={`text-justify 2xs:text-[14px] ${fontsm} mb-12`}>
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

        <div className="w-full gap-2 justify-around flex">
          <div className={`${isAboveSM ? "w-1/2 " : "w-full"}`}>
            {ewasteData.map((item, index) => {
              if (isAboveSM) {
                if (index % 2 === 0)
                  return (
                    returnCollapse(item, index)
                  );
              } else {
                return (
                  returnCollapse(item, index)
                );
              }
            })}
          </div>
          {isAboveSM && <div className="w-1/2">
            {ewasteData.map((item, index) => {
              if (index % 2 !== 0)
                return (
                  returnCollapse(item, index)
                );
            })}
          </div>}
        </div>
      </div>

      {/* Keep In Touch  */}
      <KeepInTouch />
    </section >
  );
};

export default Ewaste;
