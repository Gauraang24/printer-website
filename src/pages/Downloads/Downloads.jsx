import { Button, Divider, Input } from "antd";
import { useState } from "react";
import KeepInTouch from "../../commonComponents/KeepInTouch";

const Downloads = () => {
  const [activeTab, setActiveTab] = useState("DRIVER");
  const menus = [
    {
      label: "DRIVER",
      key: 1,
    },
    {
      label: "USER MANUAL",
      key: 2,
    },
    {
      label: "APP",
      key: 3,
    },
  ];
  return (
    <section>
      {/* Banner */}
      <div className="w-full">
        <img
          src="/images/download/downloadBanner.png"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>

      <div className="w-[95%] lg:w-[80%] mx-auto 2xs:my-[30px] sm:my-[40px] md:my-[50px] lg:my-[60px] xl:my-[70px] 2xl:my-[80px]">
        <Divider className="2xs:!my-8 xs:!my-10 sm:!my-12 md:!my-16 lg:!my-[70px] xl:!my-20 !border-black">
          <p className="lg:text-3xl md:text-2xl sm:text-xl xs:text-lg 2xs:text-base font-bold px-10">{activeTab}</p>
        </Divider>

        <div className="flex gap-5">
          {/* Menu Section  */}
          <div className="w-[30%] rounded-2xl p-8 bg-white">
            {menus.map((i) => {
              return (
                <div
                  key={i.key}
                  className={`cursor-pointer ${i.label !== "APP" && "border-b-2"
                    }  border-black p-6 2xs:text-[18px] sm:text-[23px] xmd:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[35px] font-bold ${activeTab === i?.label ? "text-blue-600" : ""
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
          <div className="w-[70%] bg-white rounded-2xl p-8 flex flex-col gap-10">
            {activeTab === "APP" ? (
              <div className="h-full flex items-center justify-center">
                <p className="2xs:text-[18px] sm:text-[23px] xmd:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[35px] font-bold">Our App is Launching Soon!</p>
              </div>
            ) : (
              <>
                <p className="2xs:text-[18px] sm:text-[23px] xmd:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[35px]  font-bold">Search by Product Name</p>

                <div className="border-b border-black">
                  <Input
                    placeholder="Enter Serial Number"
                    className="h-14 text-[22px]  border-0"
                  />
                </div>

                <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className=" !h-14 !w-52"
                  >
                    <p className="text-[20px]  font-semibold">Submit</p>
                  </Button>
                </div>

                <div className="flex items-stretch justify-center w-full gap-1">
                  <div className="bg-[#f5f5f5] shadow-down flex-1 flex justify-center items-center py-6 rounded-l-xl">
                    <div className="text-center">
                      <p className="text-[22px] font-medium">Model</p>
                      <p className="text-[16px] font-light">CWC P5040DN/W</p>
                    </div>
                  </div>

                  <div className="bg-[#f5f5f5] shadow-down flex-1 flex justify-center items-center py-6 rounded-r-xl">
                    <p className="text-[22px] font-medium">Download</p>
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
