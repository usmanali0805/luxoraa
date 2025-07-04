import { MailOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-fit">
      <div className="border-t-2 border-slate-200 w-full h-fit flex justify-between items-center px-2 py-3 sm:px-6 sm:py-7">
        <div className="flex gap-2 sm:gap-5 items-center">
          <MailOpen className="text-[#032a5d] w-[20px] sm:w-[70px]" />
          <div className="text-[#032a5d] text-[12px] sm:text-xl font-semibold">
            SIGN UP FOR BETTER EXPERIENCE
          </div>
        </div>
        <div className="flex sm:h-[50px] h-[30px]">
          <input
            className=" border-2 p-2 text-[10px] sm:text-[18px] border-slate-200 h-[100%] w-[100px] sm:w-[320px]"
            type="text"
            placeholder="ENTER YOUR E-MAIL"
          />
          <button className="bg-[#032a5d] h-full sm:text-[18px] text-[10px] cursor-pointer text-white px-3 sm:px-9 sm:py-2 flex justify-cente items-center">
            SIGN UP
          </button>
        </div>
      </div>
      <div className="border-t-2 border-slate-200 w-full px-6 h-[50px] sm:h-[100px] flex items-center justify-between">
        <img className="h-[50%]  cursor-pointer" src="/logo2.jpg" alt="" />
        <div className="flex gap-2 sm:gap-5">
          <Link to={"/location"}>
          <div className="font-semibold text-black text-[6px] sm:text-sm cursor-pointer hover:text-slate-700">
            Store Location
          </div>
          </Link>
          <Link to={"/storetiming"}>
          <div className="font-semibold text-black text-[6px] sm:text-sm cursor-pointer hover:text-slate-700">
            Opening Hours
          </div>
          </Link>
          <Link to={"/policy"} >
          <div className="font-semibold text-black text-[6px] sm:text-sm cursor-pointer hover:text-slate-700">
            Private Policy
          </div>
          </Link>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <img
            className="object-contain w-[15px] sm:w-[27px] cursor-pointer"
            src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01Wdetn224xMIRNihao_!!6000000007457-2-tps-34-34.png"
            alt=""
          />
          <img
            className="object-contain w-[15px] sm:w-[27px] cursor-pointer"
            src="https://img.lazcdn.com/us/domino/77ab92ab-17ae-40ce-aa8b-e8de5974939d_PK-76-76.png"
            alt=""
          />
          <img
            className="object-contain w-[15px] sm:w-[27px] cursor-pointer"
            src="https://img.lazcdn.com/us/domino/f03a43e7-3655-4049-8c12-b1614ac2a2d4_PK-75-76.png"
            alt=""
          />
          <img
            className="object-contain w-[15px] sm:w-[27px] cursor-pointer"
            src="https://img.lazcdn.com/us/domino/6bf9555a-40ae-466d-a756-907f70aa3461_PK-76-76.png"
            alt=""
          />
          <img
            className="object-contain w-[15px] sm:w-[27px] cursor-pointer"
            src="https://img.lazcdn.com/us/domino/cea1aedb-aa69-44d5-bbaf-ca5901797dea_PK-76-76.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center px-6 justify-between h-[50px] sm:h-[80px] w-full bg-[#032a5d] text-white">
        <div className="font-regular text-[10px] sm:text-sm">&copy;- 2025 WP Luxora</div>
        <div className="bank flex gap-2 sm:gap-4">
          <img className="w-[25px] sm:w-[60px] object-contain" src="https://img.lazcdn.com/us/domino/78355368-8518-4b88-9f8e-e5751ee0863a_PK-140-84.png" alt="" />
          <img className="w-[25px] sm:w-[60px] object-contain" src="https://img.lazcdn.com/us/domino/5ba8a652-1445-45cb-a2a5-ed6043004243_PK-63-48.png" alt="" />
          <img className="w-[25px] sm:w-[60px] object-contain" src="https://img.lazcdn.com/us/domino/dd8e0447-8052-44f3-8ab2-b24c56a2491f_PK-139-84.png" alt="" />
          <img className="w-[25px] sm:w-[60px] object-contain" src="https://img.lazcdn.com/us/domino/56915ba8-b2c0-4caf-b3a1-7e0f3d2d45cf_PK-139-84.png" alt="" />
          <img className="w-[25px] sm:w-[60px] object-contain" src="https://img.lazcdn.com/us/domino/ee9913f8-8258-4382-b97e-e2047ce93012_PK-139-84.png" alt="" />
          <img className="w-[25px] sm:w-[60px] object-contain" src="https://img.lazcdn.com/us/domino/6668ff96-bf9a-40bd-8ce4-f7f7c0bee385_PK-144-84.png" alt="" />
          <img className="w-[25px] sm:w-[60px] object-contain" src="https://img.lazcdn.com/us/domino/75489476-3c86-44ed-bf81-8b0579d56e1c_PK-139-84.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
