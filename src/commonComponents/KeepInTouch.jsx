import { MailTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const KeepInTouch = () => {
    return (
        <div className='bg-cover bg-no-repeat bg-center' style={{
            backgroundImage: 'url(images/keep_in_touch_bg.svg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // backgroundSize: 'cover', // Ensures the image scales properly
        }}>
            <div className="flex flex-col gap-3 justify-center items-center w-[70%] mx-auto py-[85px]" >
                <p className='font-bold text-4xl'>Lets Keep In Touch!</p>
                <p className='font-semibold text-2xl text-center'>Subscribe To Our Weekly Newsletter And Receive Exclusive Offers On Products You Love!</p>
                <Search
                    placeholder="Enter Email ID"
                    allowClear
                    enterButton="Subscribe"
                    size="large"
                    prefix={<MailTwoTone style={{ fontSize: '26px' }} />}
                    onSearch={(e) => {
                        console.log("KEEP IN TOUCH COMPONENT :", e?.target?.value);
                    }}
                />
            </div>
        </div>
    );
};

export default KeepInTouch;
