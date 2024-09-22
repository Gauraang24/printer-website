import { Segmented } from "antd";
import { useEffect, useState } from "react";
import { cartridgeCollection, printersCollection } from "../../staticData/productData";

const constants = {
    PRINTER: "1",
    CARTRIDGE: "2",
};
const Product = () => {
    const [activeTab, setActiveTab] = useState(constants.PRINTER)
    const [productData, setProductData] = useState(printersCollection)

    useEffect(() => {
        if (activeTab === constants.PRINTER) {
            setProductData(printersCollection)
        } else {
            setProductData(cartridgeCollection)
        }
    }, [activeTab])

    const options = [
        {
            label: "Printer",
            value: constants.PRINTER,
        },
        {
            label: "Cartridge",
            value: constants.CARTRIDGE,
        },
    ];
    return (
        <section>
            {/* export const printersCollection = [ */}
            {/* Banner Section */}
            <div className="w-full">
                <img
                    src="images/productPage/Banner.jpg"
                    alt="Banner"
                    className="w-full h-auto"
                />
            </div>

            {/* ProductSection */}

            <div className="w-full py-[63px]">
                <div className="w-max mx-auto">
                    <Segmented
                        options={options}
                        onChange={(value) => {
                            setActiveTab(value)
                        }}
                    />
                </div>
            </div>
            <div>
                {productData.map((i) => {
                    return <div key={i.key}></div>
                })}
            </div>
        </section>
    );
};

export default Product;
