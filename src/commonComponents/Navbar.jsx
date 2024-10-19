import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { Drawer } from "antd";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [logoSrc, setLogoSrc] = useState('/images/nav-logo.svg');
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.outerWidth);


    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 2);
        };

        const handleResize = () => {
            setScreenWidth(window.outerWidth);
        };

        updateLogo();

        window.addEventListener('resize', handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth]);

    const updateLogo = () => {
        if (screenWidth < 640) {
            setLogoSrc('/images/home/cwc-logo-copyright.svg');
        } else {
            setLogoSrc('/images/nav-logo.svg');
        }
    };


    const navList = [
        { title: "HOME", key: "1", link: "/" },
        { title: "PRODUCT", key: "2", link: "/products" },
        { title: "E-WASTE", key: "3", link: "/e-waste" },
        { title: "ABOUT US", key: "4", link: "/about-us" },
        { title: "CONTACT", key: "5", link: "/contact" }
    ];

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    return (
        <>
            <nav className={`w-full py-3 ${scrolled ? "bg-white shadow-2xl" : "bg-transparent"} transition-colors duration-300`}>
                <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-4">
                    <img src={logoSrc} alt="LogoCWC " className="lg:w-28 lg:h-[65px] md:w-24 md:h-[60px] sm:w-20 sm:h-[55px] w-18 h-[50px] ms-3" />
                    <img
                        src="/images/home/Menu.svg"
                        alt="Menu"
                        onClick={showDrawer}
                        className="cursor-pointer block sm:hidden !w-[40px]  me-2"
                    />
                    <ul className='hidden sm:flex gap-3 md:gap-5 lg:gap-6 ml-4 md:ml-6'>
                        {navList.map(list => (
                            <li key={list.key} className="font-bold text-md lg:text-lg xl:text-xl me-4">
                                <Link to={list.link}>{list.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>


                {screenWidth < 640 && (
                    <Drawer
                        placement="right"
                        onClose={closeDrawer}
                        width={420}
                        closable={false}
                        visible={drawerVisible}
                        style={{ backgroundColor: '#f6f6f6' }}
                    >
                        <div className="flex justify-end items-center w-full">
                            <img
                                src="/images/home/Cross.svg"
                                alt="Close Icon"
                                onClick={closeDrawer}
                                className="w-[35px] h-[35px] cursor-pointer"
                            />
                        </div>

                        <ul className="flex flex-col gap-3 mt-8">
                            {navList.map(list => (
                                <li key={list.key} className="flex justify-between items-center font-bold text-xl py-4 border-b">
                                    <Link to={list.link} className="flex-1">{list.title}</Link>
                                    <img src="/images/home/arrow.svg" alt="Arrow Icon" className="ml-3 w-[30px]" />
                                </li>
                            ))}
                        </ul>

                    </Drawer>
                )}
            </nav>
        </>
    );
};

export default Navbar;
