import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { Drawer } from "antd";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [logoSrc, setLogoSrc] = useState('/images/nav-logo.svg');
    const [drawerVisible, setDrawerVisible] = useState(false);

    const updateLogo = () => {
        const screenWidth = window.outerWidth;
        if (screenWidth <= 1080) {
            setLogoSrc('/images/home/cwc-logo-copyright.svg');
        } else {
            setLogoSrc('/images/nav-logo.svg');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 2);
        };

        updateLogo();

        window.addEventListener('resize', updateLogo);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener('resize', updateLogo);
        };
    }, []);

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
                    <img src={logoSrc} alt="LogoCWC " className="lg:w-28 lg:h-[65px] md:w-24 md:h-[60px] w-20 h-[55px] ms-3" />
                    {window.outerWidth <= 1080 ? (
                        <img src="/images/home/Menu.svg" alt="Menu" onClick={showDrawer} className="cursor-pointer lg:w-[75px] h-auto md:w-[65px] w-[45px] me-4" />
                    ) : (
                        <ul className='flex gap-3 md:gap-5 lg:gap-6 ml-4 md:ml-6'>
                            {navList.map(list => (
                                <li key={list.key} className="font-bold text-md lg:text-lg xl:text-xl">
                                    <Link to={list.link}>{list.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {window.outerWidth <= 1080 && (
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

            {/* <nav className={`w-full py-4 ${scrolled ? "bg-white shadow-2xl" : "bg-transparent"} transition-colors duration-300`}>
<div className="w-full max-w-[80%] mx-auto flex justify-between items-center">
    <img src="/images/nav-logo.svg" alt="CWC Logo" />
    <ul className="flex gap-5">
        {navList.map(list => (
            <li key={list.key} className="font-bold text-xl">
                <Link to={list.link}>{list.title}</Link>
            </li>
        ))}
    </ul>
</div>
</nav> */}
        </>
    );
};

export default Navbar;
