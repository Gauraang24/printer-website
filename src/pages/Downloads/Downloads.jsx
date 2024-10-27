import { Button, Input, Segmented } from "antd";
import { useState } from "react";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import { fontlg, fontmd, fontsm, fontxs, mblg, mylg, pMd, pSm, ptlg, pySm } from "../../utils/constant";
import { CustomDivider } from "../../commonComponents/CustomDivider";

const Downloads = () => {
  const [activeTab, setActiveTab] = useState("DRIVER");
  console.log("active tab: ", activeTab)
  const menus = [
    {
      label: "DRIVER",
      key: 1,
      value: 1,
    },
    {
      label: "USER MANUAL",
      key: 2,
      value: 2,
    },
    {
      label: "APP",
      key: 3,
      value: 3,
    },
  ];
  return (
    <section>
      {/* Banner */}
      <div className="w-full mt-[100px] sm:mt-0">
        <img
          src="/images/download/downloadBanner.png"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>

      <div className={`w-full ${ptlg} block sm:hidden`}>
        <div className="w-max mx-auto ">
          <Segmented
            className={`${fontmd} px-4`}
            options={menus}
            onChange={(value) => {
              console.log("value", value)
              const data = menus.find(i => i.value === value).label
              console.log("Data", data)
              setActiveTab(data)
            }}
          />
        </div>
      </div>

      <div className={`w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto ${mblg}`}>
        <CustomDivider title={activeTab} />

        <div className="flex gap-5">
          {/* Menu Section  */}
          <div className={`w-[30%] hidden sm:block h-max rounded-2xl ${pMd} bg-white`}>
            {menus.map((i) => {
              return (
                <div
                  key={i.key}
                  className={`cursor-pointer ${i.label !== "APP" && "border-b-2"
                    }  border-black ${pSm} ${fontsm} font-bold ${activeTab === i?.label ? "text-blue-600" : ""
                    }`}
                  onClick={() => {
                    setActiveTab(i.label);
                  }}
                >
                  {i?.label}{" "}
                </div>
              );
            })}
          </div>

          {/* Left Section  */}
          <div className={`w-full sm:w-[70%] bg-white rounded-2xl ${pMd} flex flex-col gap-5 sm:gap-10`}>
            {activeTab === "APP" ? (
              <div className="h-full flex items-center justify-center">
                <p className={`${fontlg} font-bold`}>Our App is Launching Soon!</p>
              </div>
            ) : (
              <>
                <p className={`${fontlg}  font-bold`}>Search by Product Name</p>

                <div className="border-b border-black">
                  <Input
                    placeholder="Enter Serial Number"
                    className={`h-14 ${fontmd}  border-0`}
                  />
                </div>

                <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="!h-14 !w-52"
                  >
                    <p className={`${fontxs} font-semibold`}>Submit</p>
                  </Button>
                </div>

                <div className="flex items-stretch justify-center w-full gap-1">
                  <div className={`bg-[#f5f5f5] shadow-down flex-1 flex justify-center items-center ${pySm} rounded-l-xl`}>
                    <div className="text-center">
                      <p className={`${fontmd} font-medium`}>Model</p>
                      <p className={`${fontxs} font-light`}>CWC P5040DN/W</p>
                    </div>
                  </div>

                  <div className={`bg-[#f5f5f5] shadow-down flex-1 flex justify-center items-center ${pySm} rounded-r-xl`}>
                    <p className={`${fontmd} font-medium`}>Download</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Keep In Touch  */}
      <KeepInTouch />
    </section>
  );
};

export default Downloads;
