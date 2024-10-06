import { MailOutlined } from "@ant-design/icons";
import { Divider } from "antd";

const Contact = () => {
  return (
    <section className="bg-[#f7f7f7]">
      {/* Banner Section */}
      <div className="w-full">
        <img
          src="/images/contactUs/Banner.png"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>
      {/* Service and Consultation */}
      <div className="w-[80%] mx-auto mt-[80px]">
        <Divider className="mb-20">
          <p className="text-4xl font-bold">SERVICE AND CONSULTATION</p>
        </Divider>

        <div className="w-[80%] flex justify-between bg-white mx-auto p-10 rounded-2xl shadow-2xl my-[60px]">
          <div className="flex flex-col items-center w-1/2 border-r-2 border-black gap-2">
            <MailOutlined style={{ fontSize: "70px" }} />
            <p className="text-[25px] font-medium">Complaints</p>
            <p className="text-[32px] font-bold">service@ecompusell.com</p>
          </div>
          <div className="flex flex-col items-center w-1/2 gap-2">
            <MailOutlined style={{ fontSize: "70px" }} />
            <p className="text-[25px] font-medium">Business</p>
            <p className="text-[32px] font-bold">info@ecompusell.com</p>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="w-[80%] mx-auto mt-[80px]">
        <Divider className="mb-20">
          <p className="text-4xl font-bold">CONTACT DETAILS</p>
        </Divider>

        <div className="w-[80%] flex justify-between bg-white mx-auto p-10 rounded-2xl shadow-2xl my-[60px]">
          <div className="flex flex-col items-center w-1/2 border-r-2 border-black gap-2">
            <div>{/* Contact Detail goes here  */}</div>
          </div>
          <div className="flex flex-col items-center w-1/2 gap-2">
            {/* Contact Detail goes here  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
