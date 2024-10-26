import { Button, Divider, Select } from "antd";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

const Warranty = () => {
    const [warrantyData, setWarrantyData] = useState([])
    console.log("warranty data", warrantyData)

    useEffect(() => {
        // Load the Excel file from the public directory
        fetch(`${import.meta.env.VITE_APP_API_ENDPOINT}/excel_files/warrantyData.xlsx`)
            .then((response) => response.arrayBuffer()) // Fetch the binary data
            .then((buffer) => {
                const workbook = XLSX.read(buffer, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const sheetData = XLSX.utils.sheet_to_json(sheet);
                const data = sheetData.map(i => {
                    return {

                        label: i?.['Sr.No'],
                        purchaseDate: i?.['Purchase Date'],
                        warrentyDate: i?.['Warrenty Date']
                    }
                })

                setWarrantyData(data);
            })
            .catch((error) => console.error("Error fetching Excel file:", error));
    }, []);


    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    return (
        <section>
            {/* Banner */}
            <div className="w-full mt-[100px] sm:mt-0">
                <img
                    src="/images/warranty/Warranty.png"
                    alt="Banner"
                    className="w-full h-auto"
                />
            </div>

            {/* Warranty Section  */}

            <div className="w-[95%] lg:w-[80%] mx-auto 2xs:my-[30px] sm:my-[40px] md:my-[50px] lg:my-[60px] xl:my-[70px] 2xl:my-[80px]">
                <Divider className="2xs:!my-8 xs:!my-10 sm:!my-12 md:!my-16 lg:!my-[70px] xl:!my-20 !border-black">
                    <p className="lg:text-3xl md:text-2xl sm:text-xl xs:text-lg 2xs:text-base font-bold px-10">WARRANTY</p>
                </Divider>

                <div className="bg-white w-[90%] mx-auto py-6 xs:py-8 sm:py-9 md:py-10 lg:py-12 rounded-2xl shadow-2xl">
                    <div className="w-[95%] mx-auto flex flex-col 2xs:gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center px-5">
                        <p className="2xs:text-[18px] sm:text-[23px] xmd:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[35px] font-medium text-center ">
                            To Check Warranty Status, Enter your serial no.
                        </p>
                        <div className="border-b border-black w-full sm:w-[400px]">
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

                            {/* <Input
                                placeholder="Enter Serial Number"
                                className="h-14 text-[22px] border-0"
                            /> */}

                            <Select
                                showSearch
                                placeholder="Enter Serial Number"
                                optionFilterProp="label"
                                onChange={onChange}
                                className="w-full"
                                onSearch={onSearch}
                                options={warrantyData}
                            />
                        </div>

                        <div>
                            <Button type="primary" htmlType="submit" className="2xs:h-8 xs:h-10 sm:h-12 lg:h-14 !w-52">
                                <p className="2xs:text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]  font-semibold">Submit</p>
                            </Button>
                        </div>

                        {/* warranty info section  */}
                        <div className="flex flex-col sm:flex-row items-stretch justify-center w-full gap-2 sm:gap-1">
                            <div className="bg-[#f5f5f5] shadow-down flex-1 flex justify-center items-center py-2 xs:py-4 sm:py-6   rounded-t-xl sm:rounded-l-xl p-2">
                                <div className="text-center">
                                    <p className="2xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-medium">Model</p>
                                    <p className="2xs:text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] font-light">CWC P5040DN/W</p>
                                </div>
                            </div>
                            <div className="bg-[#f5f5f5] shadow-down flex-[2] flex-grow flex justify-center items-center p-2 py-2 xs:py-4 sm:py-6">
                                <div className="text-center">
                                    <p className="2xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-medium">SERIAL NUMBER</p>
                                    <p className="2xs:text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-light">
                                        CWCP5040DNW052024A001
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#f5f5f5] shadow-down flex-1 flex justify-center items-center py-2 xs:py-4 sm:py-6  rounded-b-xl sm:rounded-r-xl p-2">
                                <div className="text-center">
                                    <p className="2xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-medium">STATUS</p>
                                    <p className="2xs:text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-light text-center">
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
