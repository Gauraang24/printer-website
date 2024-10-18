import { Collapse, Divider } from "antd";
import KeepInTouch from "../../commonComponents/KeepInTouch";
import { dos, eWasteCollectionData } from "../../staticData/ewaste";
import { CheckCircleFilled, CheckOutlined } from "@ant-design/icons";

const Ewaste = () => {
  return (
    <section>
      {/* Banner Section */}
      <div className="w-full">
        <img
          src="/images/ewaste/Banner.png"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>
      {/* RoHS Compliance */}
      <div className="w-[80%] mx-auto mt-[80px]">
        <Divider className="">
          <p className="text-[35px] font-bold px-20">RoHS Compliance</p>
        </Divider>
        <p className="text-center text-[35px]">
          We are committed to environmental responsibility. Our products are
          designed for longevity and low energy consumption, complying with the
          RoHS directive, which restricts the use of hazardous substances like
          lead, mercury, and cadmium. This helps protect the environment by
          reducing pollution.
        </p>
      </div>

      {/* Dos and Donts  */}
      <div className="w-full mt-[80px]">
        <div className="w-[80%] mx-auto">
          <Divider className="">
            <p className="text-[35px] font-bold px-20">Do's and Don’ts</p>
          </Divider>
        </div>

        <div className="flex bg-[#49B749]">
          <div className=" w-[48%] bg-[#49B749] flex items-center  flex-col pt-20">
            <div className="h-[90px] w-[260px] border-4 border-white rounded-full flex justify-between gap-2 px-4 items-center mb-10">
              <CheckCircleFilled style={{ fontSize: "55px", color: "#fff" }} />
              <div className="flex-1">
                <p className="text-white text-[31px] font-extrabold text-center">
                  Do's
                </p>
              </div>
            </div>

            <div className="mb-10">
                {
                    dos.map((i)=>{
                        return <div className="mx-[10%] flex justify-between items-start gap-5 mb-4">
                            <CheckOutlined style={{ fontSize: "40px",fontWeight : "bold", color: "#fff" , marginTop : "10px"}}/>
                         <p className="text-[25px] font-medium text-justify text-white">{i}</p>
                        </div>
                    })
                }
            </div>
          </div>
          <div
            className=" w-[52%] bg-[#ED2024] flex items-center flex-col pt-20"
            style={{
              clipPath: "polygon(3% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="h-[90px] w-[260px] border-4 border-white rounded-full flex justify-between gap-2 px-4 items-center mb-10">
              <CheckCircleFilled style={{ fontSize: "55px", color: "#fff" }} />
              <div className="flex-1">
                <p className="text-white text-[31px] font-extrabold text-center">
                  Do's
                </p>
              </div>
            </div>

            <div className="mb-10">
                {
                    dos.map((i)=>{
                        return <div className="mx-[10%] flex justify-between items-start gap-5 mb-4">
                            <CheckOutlined style={{ fontSize: "40px",fontWeight : "bold", color: "#fff" , marginTop : "10px"}}/>
                         <p className="text-[25px] font-medium text-justify text-white">{i}</p>
                        </div>
                    })
                }
            </div>
          </div>
        </div>
      </div>

      {/* E-Waste Collection */}
      <div className="w-[80%] mx-auto my-[80px]">
        <Divider className="">
          <p className="text-[35px] font-bold px-20">E-Waste Collection</p>
        </Divider>

        <p className="text-justify text-[35px] mb-12">
          We have signed an agreement with M/s. GLOBAL WASTE SOLUTION, who is an
          authorized dismantler and recycler having authorization from Haryana
          Pollution control board as our new Recycler, who shall be responsible
          for all the PR activities including collection transportation storage,
          segregation and dismantling and recycling with regards to our E Waste.
          We will use our recycler Partner's collection points for channelizing
          the e-waste. Having no collection points in our state, we will be
          using the collection points of our neighbouring state for collecting
          e-waste. There is a state-wise list of collection points, established
          by M/s. GLOBAL WASTE SOLUTION.
        </p>

        <div className="w-full gap-2 justify-around flex flex-wrap">
          {eWasteCollectionData.map((item) => {
            return (
              <Collapse
                className="w-[49%] "
                items={[
                  {
                    key: "1",
                    label: item?.title,
                    children: <p>testset</p>,
                  },
                ]}
              />
            );
          })}
        </div>
      </div>

      {/* Keep In Touch  */}
      <KeepInTouch />
    </section>
  );
};

export default Ewaste;
