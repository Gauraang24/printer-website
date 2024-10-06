import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 2);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navList = [
        { title: "HOME", key: "1", link: "/" },
        { title: "PRODUCT", key: "2", link: "/products" },
        { title: "E-WASTE", key: "3", link: "/e-waste" },
        { title: "ABOUT US", key: "4", link: "/about-us" },
        { title: "CONTACT", key: "5", link: "/contact" }
    ];

    return (
        <nav className={`w-full py-4 ${scrolled ? "bg-white shadow-2xl" : "bg-transparent"} transition-colors duration-300`}>
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
        </nav>
    );
};

export default Navbar;
