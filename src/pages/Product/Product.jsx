import { Segmented } from "antd";
import { useEffect, useState } from "react";
import {
  cartridgeCollection,
  printersCollection,
} from "../../staticData/productData";
import { useNavigate } from "react-router-dom";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import { CustomDivider } from "../../commonComponents/CustomDivider";
import { fontsm, mtMd, pblg, ptlg } from "../../utils/constant";
import Reveal from "../../commonComponents/Animation/Reveal";

const constants = {
  PRINTER: "1",
  CARTRIDGE: "2",
};
const Product = () => {
  const [activeTab, setActiveTab] = useState(constants.PRINTER);
  const [productData, setProductData] = useState(printersCollection);

  useEffect(() => {
    if (activeTab === constants.PRINTER) {
      setProductData(printersCollection);
    } else {
      setProductData(cartridgeCollection);
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
        <div className="w-max mx-auto">
          <Reveal width="w-max">
            <Segmented
              options={options}
              onChange={(value) => {
                setActiveTab(value);
              }}
            />
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
              <div className="grid grid-cols-3 2xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  2xs:gap-2 md:gap-6 sm:gap-6 lg:gap-8 justify-center">
                {i.data.map((prod) => {
                  return (
                    <div
                      key={prod.key}
                      onClick={() =>
                        navigate(`/product-details/${prod.navigate}`)
                      }
                      className="aspect-square 2xs:rounded-md md:rounded-lg lg:rounded-2xl bg-white flex flex-col items-center p-4 justify-center  h-full"
                    >
                      <div className="h-[100px] w-[100px] xs:h-[150px] xs:w-[150px] sm:w-[200px]  sm:h-[200px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] flex justify-center items-center">
                        <img
                          src={prod.link}
                          alt={prod.title}
                          className="w-auto h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                      <p className={`font-bold text-center ${fontsm} ${mtMd}`}>{prod.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <KeepInTouch />
    </section>
  );
};

export default Product;
