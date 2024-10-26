import { Divider, Segmented } from "antd";
import { useEffect, useState } from "react";
import {
  cartridgeCollection,
  printersCollection,
} from "../../staticData/productData";
import { useNavigate } from "react-router-dom";
import KeepInTouch from "../../commonComponents/KeepInTouch";

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
      <div className="w-full mt-[100px] sm:mt-0">
        <img
          src="/images/productPage/Banner.jpg"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>

      {/* ProductSection */}

      <div className="w-full xl:py-[63px] lg:py-[50px] md:py-[40px] sm:py-[30px] 2xs:py-[20px]">
        <div className="w-max mx-auto">
          <Segmented
            options={options}
            onChange={(value) => {
              setActiveTab(value);
            }}
          />
        </div>
      </div>
      <div className="w-[90%] mx-auto xl:pb-20 lg:pb-16 md:pb-14 sm:pb-10 2xs:pb-8">
        {productData.map((i, key) => {
          return (
            <div key={key}>
              <div>
                <Divider className="!mb-8 !mt-0">
                  <p className="xl:text-[35px] lg:text-[25px] md:text-[20px] font-bold">{i.heading}</p>
                </Divider>
              </div>

              {/* Grid layout for product items */}
              <div className="grid grid-cols-3 2xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  2xs:gap-2 md:gap-6 sm:gap-6 lg:gap-8 justify-center pb-8">
                {i.data.map((prod) => {
                  return (
                    <div
                      key={prod.key}
                      onClick={() =>
                        navigate(`/product-details/${prod.navigate}`)
                      }
                      className="aspect-square 2xs:rounded-md md:rounded-lg lg:rounded-2xl bg-white flex flex-col items-center p-4 justify-center border"
                    >
                      <div className="h-[100px] w-[100px] xs:h-[150px] xs:w-[150px] sm:w-[200px]  sm:h-[200px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] flex justify-center items-center">
                        <img
                          src={prod.link}
                          alt={prod.title}
                          className="w-auto h-auto object-cover"
                        />
                      </div>
                      <p className="font-bold xl:text-[22px] lg:text-[18px] md:text-[16px] sm:text-[14px] 2xs:text-[10px] 2xs:mt-3 sm:mt-5 lg:mt-8">{prod.title}</p>
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
