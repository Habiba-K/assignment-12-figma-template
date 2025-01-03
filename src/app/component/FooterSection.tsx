import React from "react";
import Image from "next/image";
import Button from "./Button";
const FooterSection = () => {
  return (
    <div className="w-full max-w-[1920px] lg:h-[474px] bg-[#043873] ">
      <div className="flex justify-start lg:justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-0 px-5 pb-[20px] mt-20">
          <div className="text-white w-[205.25px] h-[169px] mr-10">
            <Image
              src="/images/Logo.png"
              alt="logo"
              width={191}
              height={34}
              className="pb-2"
            />
            <p>
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>

          <div className="text-white">
            <h2 className="font-semibold">Product</h2>
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer stories</li>
            </ul>
          </div>

          <div className="text-white">
            <h2 className="font-semibold ">Resources</h2>
            <ul>
              <li>Blog</li>
              <li>Guides & tutorials</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div className="text-white">
            <h2 className="font-semibold ">Company</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>

          <div className="text-white w-[205.25px] h-[169px]">
            <h2 className="font-semibold size-7 whitespace-nowrap ">
              Try It Today
            </h2>
            <p>Get started for free. Add your whole team as your needs grow</p>
            <Button
              btnColor="text-white"
              btnText="Start today ->"
              bgColor="bg-[#4F9CF9]"
              mrl="mt-0"
              pdy="py-2"
              pdx="px-6"
            >
            </Button>
          </div>
        
        </div>
      </div>
      <div className="pt-28 ">
        <hr className="h-2  bg-[#2E4E73] opacity-50 flex  " />
        <div className="lg:grid lg:grid-cols-2 p-5 hidden">
          <ul className="text-[#FFFFFF] bg-[#043873] grid  grid-cols-5 ">
            <li >
              <div className="flex flex-row">
              <Image
                  src="/images/Icon.png"
                  alt="lang"
                  width={19}
                  height={19}
                  className="inline-block "
                />
                <select className="text-[#FFFFFF] bg-[#043873]" name="" id="">
                  <option value="english">English</option>
                  <option value="english">Urdu</option>
                </select>
                </div></li>
            <li className="pl-5">Terms & Privacy</li>
            <li className="pl-5">Security</li>
            <li className="pl-5">Status</li>
            <li className="pl-5">@2021WhitespaceLLC.</li>
          </ul>
          <div className="flex justify-end">
            <div className="pr-8">
              <Image src="/images/_x30_1._Facebook.png" alt="fb" width={9} height={17} />
            </div>
            <div className="pr-8">
              <Image src="/images/Group.png" alt="twiter" width={9} height={17} />
            </div>
            <div className="">
              <Image src="/images/Linkedin.png" alt="linkedin" width={9} height={17} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
