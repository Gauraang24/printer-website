import { Segmented } from "antd";
import { useEffect, useState } from "react";
import {
  cartridgeCollection,
  printersCollection,
  scannerCollection,
} from "../../staticData/productData";
import { useNavigate } from "react-router-dom";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import { CustomDivider } from "../../commonComponents/CustomDivider";
import { fontsm, fontxs, mtMd, pblg, ptlg, ptMd, pyMd } from "../../utils/constant";
import Reveal from "../../commonComponents/Animation/Reveal";

const constants = {
  PRINTER: "1",
  CARTRIDGE: "2",
  SCANNER: "3",
};
const Product = () => {
  const [activeTab, setActiveTab] = useState(constants.PRINTER);
  const [productData, setProductData] = useState(printersCollection);

  useEffect(() => {
    if (activeTab === constants.PRINTER) {
      setProductData(printersCollection);
    } else if (activeTab === constants.CARTRIDGE) {
      setProductData(cartridgeCollection);
    } else {
      setProductData(scannerCollection);
    }
  }, [activeTab]);

  const options = [
    {
      label: "Printer",
      value: constants.PRINTER,
    },
    {
      label: "Cartridge",
      value: constants.CARTRIDGE,
    },
    {
      label: "Scanner",
      value: constants.SCANNER,
    },
  ];
  const navigate = useNavigate();
  return (
    <section className="bg-[#f7f7f7]">
      {/* Banner Section */}
      <Reveal width="w-full">
        <div className="w-full mt-[100px] sm:mt-0">
          <img
            src="./images/productPage/Banner.jpg"
            alt="Banner"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </Reveal>

      {/* ProductSection */}

      <div className={`w-full ${ptlg}`}>
        <div className="w-[90%] sm:max-w-[1200px] mx-auto flex items-center flex-col">
          <Reveal width="w-max">
            <Segmented
              options={options}
              onChange={(value) => {
                setProductData([])
                setActiveTab(value);
              }}
            />
          </Reveal>
          <Reveal>
            <p className={`font-semibold ${fontxs} ${ptMd} text-center pt-4`}>
              Note : We Can Customize The Printers/MFP/Scanner As Per Customer Requirement & Specifications.
            </p>
          </Reveal>
        </div>
      </div>

      <div className={`w-[90%] sm:max-w-[1200px] mx-auto ${pblg}`}>
        {productData.map((i, key) => {
          return (
            <div key={key}>
              <div>
                <CustomDivider title={i?.heading} />
              </div>

              {/* Grid layout for product items */}
              <Reveal width="w-full">
                <div className="grid grid-cols-3 2xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  2xs:gap-2 md:gap-6 sm:gap-6 lg:gap-8 justify-center">
                  {i.data.map((prod) => {
                    return (
                      <div
                        key={prod.key}
                        onClick={() =>
                          navigate(`/product-details/${prod.navigate}`)
                        }
                        className="aspect-square 2xs:rounded-md md:rounded-lg lg:rounded-2xl bg-white flex flex-col items-center p-4 justify-center h-full transition-all duration-500 ease-in-out hover:shadow-2xl hover:border border-gray-300"
                      >
                        <div className="h-[100px] w-[100px] xs:h-[150px] xs:w-[150px] sm:w-[200px]  sm:h-[200px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] flex justify-center items-center">
                          <img
                            src={prod.link}
                            alt={prod.title}
                            className="w-auto h-auto object-cover"
                            loading="lazy"
                          />
                        </div>
                        <p
                          className={`font-bold text-center ${fontsm} ${mtMd}`}
                        >
                          {prod.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>

      <KeepInTouch />
    </section>
  );
};

export default Product;
