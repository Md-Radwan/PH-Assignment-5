import footerLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <>
      <div className="px-4 lg:px-0 container flex justify-between pb-14">
        <div className="w-full lg:w-[35%]">
          <img src={footerLogo} alt="footer logo" className="mx-auto lg:mx-0"/>
          <p className="text-center lg:text-left mt-3 text-[#64748B] text-sm">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex justify-center lg:justify-normal items-center gap-4 mt-6 text-[#475569] text-sm font-semibold leading-4">
            <h3>
              <a href="#">GitHub</a>
            </h3>
            <h3>
              <a href="#">Facebook</a>
            </h3>
            <h3>
              <a href="#">Linkedin</a>
            </h3>
          </div>
        </div>
        <div className="hidden w-[60%] lg:flex items-start justify-between">
            <ul className="text-sm leading-4 text-[#64748B] flex flex-col gap-2.5">
                <h3 className="mt-1 font-bold text-lg text-[#0F172A] uppercase">Product</h3>
                <li><a href="#">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <ul className="text-sm leading-4 text-[#64748B] flex flex-col gap-2.5">
                <h3 className="mt-1 font-bold text-lg text-[#0F172A] uppercase">company</h3>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
            <ul className="text-sm leading-4 text-[#64748B] flex flex-col gap-2.5">
                <h3 className="mt-1 font-bold text-lg text-[#0F172A] uppercase">legal</h3>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
            </ul>
        </div>
      </div>
      <div className="px-4 lg:px-0 container flex justify-between border-t border-[#F1F5F9] pt-8 pb-12">
        <h4 className="text-[#94A3B8] text-sm leading-4 ">© 2026 Dev Stack. All rights reserved.</h4>
        <div className="flex items-center gap-6 text-[#94A3B8] text-sm leading-4">
            <h5><a href="#">Privacy</a></h5>
            <h5><a href="#">Terms</a></h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
