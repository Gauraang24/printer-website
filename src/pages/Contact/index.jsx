import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneTwoTone,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { contactDetails } from "../../staticData/contact";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  XOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { CustomDivider } from "../../commonComponents/CustomDivider";
import { fontmd, fontsm, fontxs, mblg, plg, pSm } from "../../utils/constant";
//TOAST MESSAGE
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reveal from "../../commonComponents/Animation/Reveal";


const Contact = () => {
  const [form] = Form.useForm();

  const handleFormSubmit = async (values) => {
    try {
      const response = await fetch("/php/sendEmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(values),
      });

      const result = await response.text();

      if (result.includes("Message sent successfully!")) {
        toast("🦄 Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
        form.resetFields();
      } else if (result.includes("Message delivery failed.")) {
        toast.error("Message delivery failed.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      } else {
        toast.error("Unexpected response. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
  };



  return (
    <section className="bg-[#f7f7f7]">
      {/* Banner Section */}
      <div className="w-full mt-[100px] sm:mt-0">
        <img
          src="./images/contactUs/Banner.png"
          alt="Banner"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Service and Consultation */}
      <div className={`w-[90%] sm:w-[80%] sm:max-w-[1200px] h-auto mx-auto`}>
        <Reveal>
          <CustomDivider
            title={'SERVICE AND CONSULTATION'}
          />
        </Reveal>

        <div className="w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-around items-center bg-white rounded-2xl shadow-2xl">
          <div className={`flex flex-col justify-center items-center m-4 ${pSm}`}>
            <div className="text-5xl"><MailOutlined /></div>
            <div className="mt-2">Complaints</div>
            <div className={`font-extrabold ${fontxs}`}>service@ecompusell.com</div>
          </div>

          <div className="border-r-2 border-black h-28 hidden lg:block mx-4" />

          <div className={`flex flex-col justify-center items-center m-4 ${pSm}`}>
            <div className="text-5xl"><MailOutlined /></div>
            <div className="mt-2">Business</div>
            <div className={`font-extrabold ${fontxs}`}>info@ecompusell.com</div>
          </div>
        </div>
      </div>


      {/* Contact Details */}
      <div className={`w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto`}>
        <CustomDivider
          title={'CONTACT DETAILS'}
        />

        <div className={`w-[90%] sm:w-[80%] sm:max-w-[1200px] bg-white ${plg} mx-auto rounded-2xl shadow-2xl flex flex-col lg:flex-row`}>
          <div className="pl-0 md:pl-10 flex flex-col w-full lg:w-1/2 gap-2 mt-6 lg:mt-0">
            <div className="flex flex-col gap-5 flex-1">
              {contactDetails.mobileNumbers.map((mobile, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="transform rotate-[105deg]">
                    <PhoneTwoTone style={{ fontSize: "30px" }} />
                  </div>
                  <div>
                    <p className={`${fontxs} font-medium`}>{mobile.name}</p>
                    {mobile.number.map((number, idx) => (
                      <p key={idx} className={`${fontxs} font-medium`}>{number}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-r-2 border-black h-60 hidden lg:block mx-4" />

          <div className="pl-0 md:pl-10 flex flex-col w-full lg:w-1/2 gap-2 mt-6 lg:mt-0">
            <div className="flex items-center gap-5">
              <EnvironmentOutlined style={{ fontSize: "30px" }} />
              <p className={`${fontxs} font-medium`}>{contactDetails?.address}</p>
            </div>

            <div className="flex flex-col gap-5 lg:mt-5">
              <p className={`${fontmd} font-bold lg:mt-6`}>SOCIAL MEDIA</p>
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
      <div className={`w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto`}>
        <CustomDivider
          title={'PLEASE SUBMIT YOUR REQUEST'}
        />

        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={handleFormSubmit}>
          <div className="flex flex-col md:flex-row md:gap-10">
            <Form.Item
              name="name"
              label="Your Name"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
              className={`flex-1 ${fontmd} font-semibold`}
            >
              <Input className={`h-14 ${fontsm}`} />
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
              className={`flex-1 ${fontmd} font-semibold`}
            >
              <Input className={`h-14 ${fontsm}`} />
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
            className={`mb-10  ${fontmd} font-semibold`}
          >
            <Input.TextArea showCount maxLength={500} className={`${fontsm}`} />
          </Form.Item>

          <Button type="primary" htmlType="submit" className="h-10">
            <p className={`${fontsm} font-semibold`}>Submit</p>
          </Button>
        </Form>
      </div>

      {/* MAP */}
      <div className="w-[90%] sm:w-[80%] sm:max-w-[1200px] mx-auto">
        <CustomDivider
          title={'WHERE TO FIND US'}
        />
        <div className={`w-full ${mblg}`}>
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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </section>
  );
}


export default Contact;
