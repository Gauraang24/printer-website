// import { useEffect, useState } from "react";
// import * as XLSX from "xlsx";
import { Carousel } from "antd";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import OurCertifications from "../../commonComponents/OurCertifications";
import { certificatesData, homeCarousalData, productCarousalData, serviceSupport } from "../../staticData/Data";

const Home = () => {
    // const [data, setData] = useState([]);
    // const apiEndpoint = import.meta.env.VITE_APP_API_ENDPOINT;
    // console.log("process.env.VITE_APP_API_ENDPOINT", apiEndpoint);
    // console.log("data", data)

    // useEffect(() => {
    //     // Load the Excel file from the public directory
    //     fetch(`${apiEndpoint}/excel_files/Static_data.xlsx`)
    //         .then((response) => response.arrayBuffer()) // Fetch the binary data
    //         .then((buffer) => {
    //             const workbook = XLSX.read(buffer, { type: "array" });
    //             const sheetName = workbook.SheetNames[0];
    //             const sheet = workbook.Sheets[sheetName];
    //             const sheetData = XLSX.utils.sheet_to_json(sheet);
    //             setData(sheetData);
    //         })
    //         .catch((error) => console.error("Error fetching Excel file:", error));
    // }, []);



    return (
        <section className=" !h-full bg-[#f6f6f6]">
            {/* Banner Section */}
            <div className="w-full overflow-x-auto ">

                <Carousel Carousel arrows infinite={true} autoplay className="w-full h-auto">
                    {homeCarousalData.map((i) => {
                        return <div key={i.key}>
                            <img className="w-full h-auto object-contains" src={i.link} alt={i.alt} />
                        </div>
                    })}
                </Carousel>
            </div>
            {/* CERTIFICATE SECTION */}
            <div>

                <div className="flex w-[80%] mx-auto justify-between items-center py-[62px]">

                    {certificatesData.map((item) => {
                        return <div key={item.key} className="flex flex-col justify-center items-center w-[350px] h-[350px] bg-white rounded-2xl gap-5">
                            <img src={item.link} alt={`${item.title} logo`} />
                        </div>
                    })}
                </div>
            </div>


            {/* ABOUT US SECTION  */}
            <div className="h-auto" style={{
                backgroundImage: 'url(images/home/about-us-section-bg.svg)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', // Ensures the image scales properly
            }}>

                <div className="w-[80%] mx-auto">
                    <div className="w-max mx-auto py-[85px]">
                        <p className=" text-[35px] font-bold border-b border-black">About Us</p>
                    </div>
                    <div className="flex justify-between items-center pb-[85px]">
                        <div className="w-1/2 flex justify-center items-center">

                            <img src="./images/home/printer.svg" alt="Printer" className="w-[500px] h-[480px]" />
                        </div>
                        <div className="w-1/2">
                            <p className="text-[35px] leading-[53px] text-justify">The &quot;<b>CWC</b>&quot; brand is a product brand that serves as a testament to the reliability of E-Compusell Pvt. Ltd. It is a dynamic and innovative Start-up specializing in designing, developing, and manufacturing high-quality <b>Make-In-India</b> Laser Printers & Laser Multifunction Printers (MFPs) for a wide range of customers. CWC team comprises of experts in the printing industry who have years of experience and knowledge to draw upon. We leverage our knowledge of the industry and invest in research and development to create products that will meet the evolving needs of customers.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* PRODUCT SECTION */}
            <div className="w-screen h-auto">

                <div className="w-max mx-auto pt-[85px]">
                    <p className=" text-[35px] font-bold border-b border-black">Product</p>
                </div>

                <Carousel Carousel arrows infinite={true} autoplay className="customArrows flex justify-between ">
                    {
                        productCarousalData.map((i, index) => {
                            return <div className="!w-[80%] mx-auto !block my-[62px] bg-white rounded-3xl py-14 shadow-lg" key={index}>
                                <div className="flex justify-between items-center pb-[85px]">
                                    <div className="w-1/2 flex justify-center items-center">

                                        <img src={i?.imgLink} alt="Printer" className="w-[500px] h-[480px]" />
                                    </div>
                                    <div className="w-1/2">
                                        <div className="mb-12">
                                            <p className="text-[32px] font-bold">{i?.printerName}</p>
                                            <p className="text-[25px] font-bold">{i?.type}</p>
                                        </div>

                                        <div className="mb-12">
                                            {i?.specification.map(spec => {
                                                return <div key={spec.key} className="flex justify-between items-center w-[650px]">
                                                    <p className="text-[25px] font-medium w-1/2">{spec?.title}</p>
                                                    <p className="text-[25px] font-medium w-1/2 text-left">{spec?.desc}</p>
                                                </div>
                                            })}
                                        </div>

                                        <div className="flex items-center gap-7">
                                            <p className="text-[25px] font-bold">Available on</p>
                                            {
                                                i?.availableOn.map(img => {
                                                    return <img src={img?.link} alt={img?.title} key={img?.key} />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </Carousel>

            </div>

            {/* SERVICE & SUPPORT SECTION */}
            <div style={{
                backgroundImage: 'url(images/home/Service-bg.svg)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // backgroundSize: 'cover', // Ensures the image scales properly
            }}>
                <div className="w-max mx-auto pt-[85px]">
                    <p className=" text-[35px] font-bold border-b border-black">Service & Support</p>
                </div>

                <div className="flex w-[80%] mx-auto justify-between items-center py-[62px]">

                    {serviceSupport.map((item, index) => {
                        return <div key={index} className="flex flex-col justify-center items-center w-[350px] h-[350px] bg-white rounded-2xl gap-5">
                            <img src={item.link} alt={`${item.title} logo`} />
                        </div>
                    })}
                </div>
            </div>

            {/* OUR CERTIFICATION SECTION  */}
            <OurCertifications />

            {/* KEEP IN TOUCH SECTION  */}
            <KeepInTouch />
        </section >
    )
}

export default Home