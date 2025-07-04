import { useState } from "react";
import { Bot } from "lucide-react";


const Message = ({ msg }) => {
  const [state, setstate] = useState();

  return (
    <idv className="flex flex-col w-full max-h-[50%]  items-between justify-start gap-y-px ">
      {msg.role === "chatbot" ? 
      (<span className="flex items-end justify-start shahow w-full gap-1 ">
              <span className="p-2 text-white bg-[#024399] justfy-center items-center flex  rounded-full overflow-hidden">
                <Bot/>
              </span>
              <p className="leftmsg ">{msg.text}</p>
            </span>) : 
       msg!=null &&(<span className="flex items-start justify-end w-full gap-3 ">
        <p className="rightmsg">{msg.text}</p>
      </span>)}

      
    </idv>
  );
};

export default Message;
