import Navbar from '../commonComponents/Navbar';
import Footer from '../commonComponents/Footer';

// eslint-disable-next-line react/prop-types
const OpenRoute = ({ children }) => {
    return (
        <div className='relative'>
            <div className='sticky top-0 left-0 right-0 z-50'>
                <Navbar />
            </div>
            <div className='-mt-[102px]'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default OpenRoute;
