import { Button, Divider, Input } from "antd";
import React, { useState } from "react";

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

      <div className="w-[80%] mx-auto my-[80px]">
        <Divider className="!my-20 !border-black">
          <p className="text-4xl font-bold px-20">{activeTab}</p>
        </Divider>

        <div className="flex gap-5">
          {/* Menu Section  */}
          <div className="w-[30%] rounded-2xl p-8 bg-white">
            {menus.map((i) => {
              return (
                <div
                  key={i.key}
                  className={`cursor-pointer ${
                    i.label !== "APP" && "border-b-2"
                  }  border-black p-6 text-[35px] font-bold ${
                    activeTab === i?.label ? "text-blue-600" : ""
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
                <p className="text-[35px] font-bold">Our App is Launching Soon!</p>
              </div>
            ) : (
              <>
                <p className="text-[35px] font-bold">Search by Product Name</p>

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
