import { Button, Divider, Input } from "antd";
import KeepInTouch from "../../commonComponents/KeepInTouch";

const Warranty = () => {
    return (
        <section>
            {/* Banner */}
            <div className="w-full">
                <img
                    src="/images/warranty/Warranty.png"
                    alt="Banner"
                    className="w-full h-auto"
                />
            </div>

            {/* Warranty Section  */}

            <div className="w-[80%] mx-auto my-[80px]">
                <Divider className="!my-20 !border-black">
                    <p className="text-4xl font-bold px-20">WARRANTY</p>
                </Divider>

                <div className="bg-white w-[80%] mx-auto py-12 rounded-2xl shadow-2xl">
                    <div className="w-[90%] mx-auto flex flex-col gap-12 items-center">
                        <p className="text-[35px] font-medium text-center ">
                            To Check Warranty Status, Enter your serial no.
                        </p>
                        <div className="border-b border-black w-[400px]">
                            {/* <Search
                                placeholder="Enter Serial Number"
                                allowClear
                                enterButton="Subscribe"
                                size="large"
                                className="custom-search h-14 text-[22px]"
                                prefix={<MailTwoTone style={{ fontSize: '26px' }} />}
                                onSearch={(e) => {
                                    console.log("Enter Serial Number:", e?.target?.value);
                                }}
                            /> */}

                            <Input
                                placeholder="Enter Serial Number"
                                className="h-14 text-[22px] border-0"
                            />
                        </div>

                        <div>
                            <Button type="primary" htmlType="submit" className=" !h-14 !w-52">
                                <p className="text-[20px]  font-semibold">Submit</p>
                            </Button>
                        </div>

                        {/* warranty info section  */}
                        <div className="flex items-stretch justify-center w-full gap-1">
                            <div className="bg-[#f5f5f5] shadow-down flex-1 flex justify-center items-center py-6 rounded-l-xl">
                                <div className="text-center">
                                    <p className="text-[22px] font-medium">Model</p>
                                    <p className="text-[16px] font-light">CWC P5040DN/W</p>
                                </div>
                            </div>
                            <div className="bg-[#f5f5f5] shadow-down flex-[2] flex-grow flex justify-center items-center py-6">
                                <div className="text-center">
                                    <p className="text-[22px] font-medium">SERIAL NUMBER</p>
                                    <p className="text-[16px] font-light">
                                        CWCP5040DNW052024A001
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#f5f5f5] shadow-down flex-1 flex justify-center items-center py-6 rounded-r-xl">
                                <div className="text-center">
                                    <p className="text-[22px] font-medium">STATUS</p>
                                    <p className="text-[16px] font-light text-center">
                                        Purchase Date : 12/01/2024 <br />
                                        Warranty Date : 11/01/2025
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            {/* KeepInTOuch  */}
            <>
                <KeepInTouch />
            </>
        </section>
    );
};

export default Warranty;
