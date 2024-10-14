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

                    <div className="flex flex-col gap-12 items-center">

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

                            <Input placeholder="Enter Serial Number" className="h-14 text-[22px] border-0" />
                        </div>

                        <div>
                            <Button type="primary" htmlType="submit" className=" !h-14 !w-52">
                                <p className="text-[20px]  font-semibold">Submit</p>
                            </Button>
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
