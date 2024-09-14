/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import KeepInTouch from "../../commonComponents/KeepInTouch";

const Home = () => {
    const [data, setData] = useState([]);
    const apiEndpoint = import.meta.env.VITE_APP_API_ENDPOINT;
    console.log("process.env.VITE_APP_API_ENDPOINT", apiEndpoint);
    console.log("data", data)

    useEffect(() => {
        // Load the Excel file from the public directory
        fetch(`${apiEndpoint}/excel_files/Static_data.xlsx`)
            .then((response) => response.arrayBuffer()) // Fetch the binary data
            .then((buffer) => {
                const workbook = XLSX.read(buffer, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const sheetData = XLSX.utils.sheet_to_json(sheet);
                setData(sheetData);
            })
            .catch((error) => console.error("Error fetching Excel file:", error));
    }, []);

    return (
        <div className="border-2 border-green-500 !h-full">
            Home
            <KeepInTouch />
        </div>
    )
}

export default Home
