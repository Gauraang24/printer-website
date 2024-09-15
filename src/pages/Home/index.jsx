// import { useEffect, useState } from "react";
// import * as XLSX from "xlsx";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import OurCertifications from "../../commonComponents/OurCertifications";
import { serviceSupport } from "../../staticData/Data";

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
        <div className="border-2 !h-full bg-[#f6f6f6]">
            {/* Banner Section */}

            {/* CERTIFICATE SECTION */}

            {/* ABOUT US SECTION  */}

            {/* PRODUCT SECTION */}

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
                            <p className="text-[30px] font-bold ">{item.title}</p>
                        </div>
                    })}
                </div>
            </div>

            {/* OUR CERTIFICATION SECTION  */}
            <OurCertifications />

            {/* KEEP IN TOUCH SECTION  */}
            <KeepInTouch />
        </div>
    )
}

export default Home
