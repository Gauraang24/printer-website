// import {
//   EnvironmentOutlined,
//   MailOutlined,
//   PhoneTwoTone,
// } from "@ant-design/icons";
// import { Button, Divider, Form, Input } from "antd";
// import { contactDetails } from "../../staticData/contact";
// import {
//   FacebookOutlined,
//   InstagramOutlined,
//   LinkedinOutlined,
//   XOutlined,
//   YoutubeOutlined,
// } from "@ant-design/icons";

// const Contact = () => {
//   const [form] = Form.useForm();
//   return (
//     <section className="bg-[#f7f7f7]">
//       {/* Banner Section */}
//       <div className="w-full">
//         <img
//           src="/images/contactUs/Banner.png"
//           alt="Banner"
//           className="w-full h-auto"
//         />
//       </div>
//       {/* Service and Consultation */}
//       <div className="w-[80%] mx-auto mt-[80px]">
//         <Divider className="!my-20" style={{
//           borderColor: '#000',
//         }}>
//           <p className="text-4xl font-bold">SERVICE AND CONSULTATION</p>
//         </Divider>

//         <div className="w-[80%] flex justify-between bg-white mx-auto p-10 rounded-2xl shadow-2xl my-[60px]">
//           <div className="flex flex-col items-center w-1/2 border-r-2 border-black gap-2">
//             <MailOutlined style={{ fontSize: "70px" }} />
//             <p className="text-[25px] font-medium">Complaints</p>
//             <p className="text-[32px] font-bold">service@ecompusell.com</p>
//           </div>
//           <div className="flex flex-col items-center w-1/2 gap-2">
//             <MailOutlined style={{ fontSize: "70px" }} />
//             <p className="text-[25px] font-medium">Business</p>
//             <p className="text-[32px] font-bold">info@ecompusell.com</p>
//           </div>
//         </div>
//       </div>

//       {/* Contact Details */}
//       <div className="w-[80%] mx-auto mt-[80px]">
//         <Divider className="!my-20">
//           <p className="text-4xl font-bold">CONTACT DETAILS</p>
//         </Divider>

//         <div className="w-[80%] flex justify-between bg-white mx-auto p-10 rounded-2xl shadow-2xl px-20 py-14 my-[60px]">
//           <div className="flex flex-col w-1/2 border-r-2  gap-2">
//             <div className="flex flex-col gap-7 flex-1">
//               {contactDetails.mobileNumbers.map((i) => {
//                 return (
//                   <div className="flex items-center gap-7">
//                     <div className="transform rotate-[105deg]">
//                       <PhoneTwoTone
//                         style={{
//                           fontSize: "30px",
//                         }}
//                       />
//                     </div>
//                     <div className="">
//                       <p className="text-[18px] font-medium">{i.name}</p>
//                       {i.number.map((j) => {
//                         return <p className="text-[18px] font-medium">{j}</p>;
//                       })}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="pl-10 flex flex-col w-1/2 gap-2">
//             <div>
//               <div className="flex gap-7">
//                 <EnvironmentOutlined
//                   style={{
//                     fontSize: "30px",
//                   }}
//                 />
//                 <p className="text-[18px] font-medium">
//                   {contactDetails?.address}
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col gap-5 ">
//               <p className="text-[20px] font-bold mt-12 w-full text-left">
//                 SOCIAL MEDIA
//               </p>
//               <div className="flex justify-between">
//                 {contactDetails?.socialMedia?.map((i) => {
//                   return (
//                     <div>
//                       {/* {i?.children} */}
//                       {i?.title === "instagram" ? (
//                         <InstagramOutlined
//                           style={{
//                             fontSize: "40px",
//                           }}
//                         />
//                       ) : i?.title === "facebook" ? (
//                         <FacebookOutlined
//                           style={{
//                             fontSize: "40px",
//                           }}
//                         />
//                       ) : i?.title === "linkedIn" ? (
//                         <LinkedinOutlined
//                           style={{
//                             fontSize: "40px",
//                           }}
//                         />
//                       ) : i?.title === "youtube" ? (
//                         <YoutubeOutlined
//                           style={{
//                             fontSize: "40px",
//                           }}
//                         />
//                       ) : i?.title === "twitter" ? (
//                         <XOutlined
//                           style={{
//                             fontSize: "40px",
//                           }}
//                         />
//                       ) : (
//                         <></>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FORM  */}
//       <div className="w-[80%] mx-auto">
//         <Divider className="!my-20">
//           <p className="text-4xl font-bold">PLEASE SUBMIT YOUR REQUEST</p>
//         </Divider>
//         <Form
//           form={form}
//           name="validateOnly"
//           layout="vertical"
//           autoComplete="off"
//           className=" flex flex-col flex-wrap mb-10 mt-10"
//         >
//           <div className="flex gap-10 flex-1">
//             <Form.Item
//               name="name"
//               label="Your Name"
//               rules={[
//                 {
//                   required: true,
//                   message: "This field is required",
//                 },
//               ]}
//               className="flex-1 text-[25px] font-semibold"
//             >
//               <Input className="h-14 text-[22px]" />
//             </Form.Item>
//             <Form.Item
//               name={["user", "email"]}
//               label="Email"
//               rules={[
//                 {
//                   required: true,
//                   message: "This field is required", // Message for empty email
//                 },
//                 {
//                   type: "email",
//                   message: "Please enter a valid email", // Message for invalid email format
//                 },
//               ]}
//               className="flex-1 text-[25px] font-semibold"
//             >
//               <Input className="h-14 text-[22px]" />
//             </Form.Item>
//           </div>

//           <Form.Item
//             name="intro"
//             label="Submit Your complaints or suggestion"
//             rules={[
//               {
//                 required: true,
//                 message: "This field is required",
//               },
//             ]}
//             className="mb-10 text-[25px] font-semibold"
//           >
//             <Input.TextArea showCount maxLength={100} className="text-[22px]" />
//           </Form.Item>

//           <Button type="primary" htmlType="submit" className="h-10">
//             <p className="text-[20px] font-semibold">Submit</p>
//           </Button>
//         </Form>
//       </div>

//       {/* MAP  */}
//       <div className="w-[80%] mx-auto">
//         <Divider className="!my-20">
//           <p className="text-4xl font-bold">WHERE TO FIND US</p>
//         </Divider>
//         <div className="w-full mb-20">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.058919603211!2d73.8415649!3d18.5262394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcbb9c65eeb5e6516!2sAditya%20Centeegra!5e0!3m2!1sen!2sin!4v1667854641152!5m2!1sen!2sin"
//             width="600"
//             height="450"
//             className="w-full rounded-xl"
//             allowfullscreen=""
//             loading="lazy"
//             referrerpolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneTwoTone,
} from "@ant-design/icons";
import { Button, Divider, Form, Input } from "antd";
import { contactDetails } from "../../staticData/contact";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  XOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

const Contact = () => {
  const [form] = Form.useForm();
  const [isMobile, setIsMobile] = useState(window.outerWidth >= 969);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth >= 969);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFormSubmit = async (values) => {
    try {
      const response = await fetch("./sendEmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(values),
      });

      const result = await response.text();
      console.log(result);  // Handle success/failure response here
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="bg-[#f7f7f7]">
      {/* Banner Section */}
      <div className="w-full mt-[100px] sm:mt-0">
        <img
          src="/images/contactUs/Banner.png"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>

      {/* Service and Consultation */}
      <div className="w-[80%] h-auto mx-auto mt-[80px]">
        <Divider className="!my-20" style={{
          borderColor: '#000',
        }}>
          <p className="lg:text-4xl sm:text-2xl text-md  font-bold px-2">SERVICE AND CONSULTATION</p>
        </Divider>

        <div className="w-[80%] mx-auto flex justify-around items-center bg-white rounded-2xl shadow-2xl flex-wrap">
          <div className="flex flex-col justify-center items-center m-4 sm:!p-6">
            <div className="text-5xl"><MailOutlined /></div>
            <div className="mt-2">Complaints</div>
            <div className="font-extrabold sm:text-lg text-md">service@ecompusell.com</div>
          </div>
          {isMobile && (<div className="border-r-2 border-black h-28"></div>)}
          <div className="flex flex-col justify-center items-center m-4 sm:!p-6">
            <div className="text-5xl"><MailOutlined /></div>
            <div className="mt-2">Business</div>
            <div className="font-extrabold sm:text-lg text-md">info@ecompusell.com</div>
          </div>
        </div>
      </div>


      {/* Contact Details */}
      <div className="w-[80%] mx-auto mt-[80px]">
        <Divider className="!my-20" style={{
          borderColor: '#000',
        }}>
          <p className="lg:text-4xl sm:text-2xl text-md  font-bold px-2">CONTACT DETAILS</p>
        </Divider>

        <div className="w-[95%] md:w-[80%] bg-white p-6 md:p-8 mx-auto rounded-2xl shadow-2xl flex flex-col md:flex-row">
          <div className={`pl-0 md:pl-10 flex flex-col w-full lg:w-1/2 gap-2 ${isMobile ? '' : 'mt-[6%]'}`}>
            <div className="flex flex-col gap-5 flex-1">
              {contactDetails.mobileNumbers.map((mobile, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="transform rotate-[105deg]">
                    <PhoneTwoTone style={{ fontSize: "30px" }} />
                  </div>
                  <div>
                    <p className="text-[16px] md:text-[18px] font-medium">{mobile.name}</p>
                    {mobile.number.map((number, idx) => (
                      <p key={idx} className="text-[16px] md:text-[18px] font-medium">{number}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isMobile && <div className="border-r-2 border-black h-60"></div>}

          <div className={`pl-0 md:pl-10 flex flex-col w-full lg:w-1/2 gap-2 ${isMobile ? '' : 'mt-[6%]'}`}>
            <div className={`flex items-center gap-5 ${isMobile ? 'justify-center' : ''}`}>
              <EnvironmentOutlined style={{ fontSize: "30px" }} />
              <p className="text-[16px] md:text-[18px] font-medium">{contactDetails?.address}</p>
            </div>

            <div className="flex flex-col gap-5 lg:my-5">
              <p className="text-[18px] md:text-[20px] font-bold lg:mt-[6]">SOCIAL MEDIA</p>
              <div className="flex justify-between gap-3">
                {contactDetails?.socialMedia?.map((social, index) => {
                  const icons = {
                    instagram: <InstagramOutlined style={{ fontSize: "30px" }} />,
                    facebook: <FacebookOutlined style={{ fontSize: "30px" }} />,
                    linkedIn: <LinkedinOutlined style={{ fontSize: "30px" }} />,
                    youtube: <YoutubeOutlined style={{ fontSize: "30px" }} />,
                    twitter: <XOutlined style={{ fontSize: "30px" }} />,
                  };

                  return (
                    <div key={index}>
                      {icons[social.title]}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="w-[80%] mx-auto mt-[80px]">
        <Divider className="!my-20" style={{
          borderColor: '#000',
        }}>
          <p className="lg:text-4xl sm:text-2xl text-md  font-bold px-2">
            PLEASE SUBMIT YOUR REQUEST
          </p>

        </Divider>
        {/* <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          className=" flex flex-col flex-wrap mb-10 mt-10"
        > */}
        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={handleFormSubmit}>
          <div className={`flex ${isMobile ? 'flex-row gap-10' : 'flex-col'} flex-1`}>
            <Form.Item
              name="name"
              label="Your Name"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
              className="flex-1 text-[25px] font-semibold"
            >
              <Input className="h-14 text-[22px]" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
                {
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
              className="flex-1 text-[25px] font-semibold"
            >
              <Input className="h-14 text-[22px]" />
            </Form.Item>
          </div>

          <Form.Item
            name="intro"
            label="Submit Your complaints or suggestion"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
            className="mb-10 text-[25px] font-semibold"
          >
            <Input.TextArea showCount maxLength={100} className="text-[22px]" />
          </Form.Item>

          <Button type="primary" htmlType="submit" className="h-10">
            <p className="text-[20px] font-semibold">Submit</p>
          </Button>
        </Form>
      </div>

      {/* MAP */}
      <div className="w-[80%] mx-auto">

        <Divider className="!my-20" style={{
          borderColor: '#000',
        }}>
          <p className="lg:text-4xl sm:text-2xl text-md font-bold px-2">WHERE TO FIND US</p>
        </Divider>
        <div className="w-full mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.058919603211!2d73.8415649!3d18.5262394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcbb9c65eeb5e6516!2sAditya%20Centeegra!5e0!3m2!1sen!2sin!4v1667854641152!5m2!1sen!2sin"
            width="600"
            height="450"
            className="w-full rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
