import { Divider, Segmented } from "antd";
import { useEffect, useState } from "react";
import { cartridgeCollection, printersCollection } from "../../staticData/productData";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate()
    return (
        <section className="bg-[#f7f7f7]">
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
            <div className="w-[80%] mx-auto">
                {productData.map((i, key) => {
                    return <div key={key} className="">
                        <div>
                            <Divider>

                                <p>{i.heading}</p>
                            </Divider>
                        </div>
                        <div className="flex flex-wrap gap-24 justify-center">

                            {i.data.map((prod) => {
                                return <div key={prod.key} onClick={() => {
                                    navigate(`/product-details/${prod.navigate}`)
                                }} className="w-[450px] rounded-2xl bg-white h-[450px] flex flex-col items-center justify-center border gap-24">
                                    <div className="w-[300px] h-[300px] flex justify-center  items-center">
                                        <img src={prod.link} alt={prod.title} className="w-full " />

                                    </div>
                                    <p>{prod.title}</p>
                                </div>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </section>
    );
};

export default Product;
