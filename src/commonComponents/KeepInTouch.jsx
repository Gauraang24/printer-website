import { MailTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import HeadingFont from './Texts/HeadingFont';
import { fontmd, pylg } from '../utils/constant';
const { Search } = Input;

const KeepInTouch = () => {
    return (
        <div className='bg-cover bg-no-repeat bg-center' style={{
            backgroundImage: 'url(/images/keep_in_touch_bg.svg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // backgroundSize: 'cover', // Ensures the image scales properly
        }}>
            <div className={`flex flex-col gap-3 justify-center items-center w-[80%] mx-auto ${pylg} `} >
                <HeadingFont text={'Lets Keep In Touch!'} className={'border-b border-black font-bold'} />
                <p className={`font-semibold ${fontmd} text-center`}>Subscribe To Our Weekly Newsletter And Receive Exclusive Offers On Products You Love!</p>
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
