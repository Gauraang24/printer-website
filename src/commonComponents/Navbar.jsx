import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link
import { Drawer } from "antd";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [logoSrc, setLogoSrc] = useState('./images/nav-logo.svg');
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.outerWidth);
    const [activeTab, setActiveTab] = useState("1");
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 2);
        };

        const handleResize = () => {
            setScreenWidth(window.outerWidth);
        };

        if (location.pathname === "/") {
            setActiveTab("1");
        } else if (location.pathname === "/products") {
            setActiveTab("2");
        } else if (location.pathname === "/e-waste") {
            setActiveTab("3");
        } else if (location.pathname === "/about-us") {
            setActiveTab("4");
        } else if (location.pathname === "/contact") {
            setActiveTab("5");
        } else {
            setActiveTab("");
        }

        updateLogo();

        window.addEventListener('resize', handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth, location.pathname]);

    const updateLogo = () => {
        if (screenWidth < 640) {
            setLogoSrc('./images/home/cwc-logo-copyright.svg');
        } else {
            setLogoSrc('./images/nav-logo.svg');
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

    const handleNavClick = (key) => {
        setActiveTab(key);
        closeDrawer();
    };

    return (
        <>
            <nav className={` w-full py-3 ${scrolled ? "bg-white shadow-2xl" : "bg-white sm:bg-transparent"} transition-colors duration-300`}>
                <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-4">
                    <img src={logoSrc} alt="LogoCWC " className="lg:w-28 lg:h-[65px] sm:w-24 sm:h-[50px] xs:w-20 xs:h-[40px] w-18 h-[32px] ms-3" loading="lazy" />
                    <img
                        src="./images/home/Menu.svg"
                        alt="Menu"
                        onClick={showDrawer}
                        className="cursor-pointer block sm:hidden xs:w-10 w-8 me-2"
                        loading="lazy"
                    />
                    <ul className='hidden sm:flex gap-3 md:gap-5 lg:gap-6 ml-4 md:ml-6'>
                        {navList.map(list => (
                            <li key={list.key} className={`font-bold sm:text-sm md:text-md lg:text-lg xl:text-xl me-4  ${activeTab === list.key ? 'border-b-2 border-blue-500 text-blue-500' : 'text-black'}`}>
                                <Link to={list.link} onClick={() => setActiveTab(list.key)}>{list.title}</Link>
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
                        open={drawerVisible}
                        style={{ backgroundColor: '#f6f6f6' }}
                    >
                        <div className="flex justify-end items-center w-full">
                            <img
                                src="./images/home/Cross.svg"
                                alt="Close Icon"
                                onClick={closeDrawer}
                                className="w-[35px] h-[35px] cursor-pointer"
                                loading="lazy"
                            />
                        </div>

                        <ul className="flex flex-col gap-3 mt-8">
                            {navList.map(list => (
                                <li key={list.key} className={`flex justify-between items-center font-bold text-xl py-4 border-b ${activeTab === list.key ? 'border-b-2 border-blue-500 text-blue-500' : 'text-black'}`}>
                                    <Link to={list.link} className='flex-1' onClick={() => handleNavClick(list.key)}>{list.title}</Link>
                                    <img src="./images/home/arrow.svg" alt="Arrow Icon" className="ml-3 w-[30px]" loading="lazy" />
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
