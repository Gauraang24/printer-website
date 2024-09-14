

const Navbar = () => {

    const navList = [
        {
            title: "HOME",
            key: "1",
            link: "/home"
        },
        {
            title: "PRODUCT",
            key: "2",
            link: "/Product"
        },
        {
            title: "E-WASTE",
            key: "3",
            link: "/ewaste"
        },
        {
            title: "ABOUT US",
            key: "1",
            link: "/about-us"
        },
        {
            title: "CONTACT",
            key: "1",
            link: "/contact"
        }
    ]

    return (
        <div className="w-[80%] mx-auto flex justify-between items-center py-4">
            <img src="images/nav-logo.svg" alt="CWC Logo" />
            <div>
                <ul className="flex gap-5">
                    {navList.map(list => {
                        return <li className="font-bold text-xl" key={list.key}>{list.title}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
