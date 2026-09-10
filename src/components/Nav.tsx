import logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <div className="container py-6 flex justify-between items-center">
            <img src={logo} alt="logo picture" />
            <ul className="flex gap-7.5 text-[#475569] text-sm font-medium leading-5 items-center">
                <li className="text-[#DB2777]"><a href="#">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="flex items-center">
                <button className="py-2.5 px-5 rounded-full font-semibold text-sm leading-5 cursor-pointer">Sign In</button>
                <button className="py-2.5 px-5 rounded-full bg-[#D91B7E] text-white font-semibold text-sm leading-5 cursor-pointer">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;