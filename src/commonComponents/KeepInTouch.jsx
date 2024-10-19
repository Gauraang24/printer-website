import { MailTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const KeepInTouch = () => {
    return (
        <div className='bg-cover bg-no-repeat bg-center' style={{
            backgroundImage: 'url(/images/keep_in_touch_bg.svg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // backgroundSize: 'cover', // Ensures the image scales properly
        }}>
            <div className="flex flex-col gap-3 justify-center items-center w-[80%] mx-auto 2xl:py-[85px] xl:py-[60px] lg:py-[30px] sm:py-[25px] 2xs:py-[20px]" >
                <p className='font-bold xl:text-[35px] lg:text-[25px] md:text-[20px] 2xs:text-[18px]'>Lets Keep In Touch!</p>
                <p className='font-semibold xl:text-[26px] lg:text-[22px] md:text-[18px] 2xs:text-[14px] text-center'>Subscribe To Our Weekly Newsletter And Receive Exclusive Offers On Products You Love!</p>
                <Search
                    placeholder="Enter Email ID"
                    allowClear
                    enterButton="Subscribe"
                    size="large"
                    className=''
                    prefix={<MailTwoTone className='' style={{ fontSize: '26px' }} />}
                    onSearch={(e) => {
                        console.log("KEEP IN TOUCH COMPONENT :", e?.target?.value);
                    }}
                />
            </div>
        </div>
    );
};

export default KeepInTouch;
