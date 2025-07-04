import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import {Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Product from "./pages/Product";
import Favourite from "./pages/Favourite";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import StoreTimings from "./pages/StoreTimings";
import StoreLocations from "./pages/StoreLocations";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { MessageCircle, Minus, MoveUp, Send, Link } from "lucide-react";
import CheckOut from "./pages/CheckOut";
import { useState, useEffect } from "react";
import Message from "./components/Message";

function App() {
  const [user, setUser] = useState([]);
  const [popup, setPopup] = useState(false);
  const [input, setInput] = useState("")
  const [send, setsend] = useState(false)
  const [msgs , setMsgs] = useState([
    {role:"chatbot", text:"How can we help you today?"}
  ])


  const getUser = async () => {
    const usertoken = localStorage.getItem("User");
    const usertkn = JSON.parse(usertoken);
    if (usertkn) {
      try {
        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `${usertkn}`,
          },
        });
        const getuser = await response.json();

        setUser(getuser);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const HandleInput = (e) => {
    setInput(e.target.value);
  };

  const HandleChat = () => {
    setsend(true)
    setMsgs((prev) => [...prev, { role: "user" , text:input }]);
    setInput("");
    setTimeout(() =>  setMsgs((prev) => [...prev, { role: "chatbot" , text:"Thinking" }]), 600);
    GenerateBotResponce([...msgs ,{ role: "user" , text:input }])
  };
  const GenerateBotResponce = async (history) => {
    history = history.map(({role,text})=>({role , parts:[{text}]}))
    const requestOption = {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({contents:history})
    }

    try {
      const response = await fetch(import.meta.env.VITE_API_URL,requestOption);
      const data = await response.json()
      console.log(data)
    } catch (error) {
      
    }
  }
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-full overflow-hidden">
      <Navbar prpuser={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/search/:name/product/:id" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Favourite />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/storetiming" element={<StoreTimings />} />
        <Route path="/location" element={<StoreLocations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Checkout" element={<CheckOut />} />
      </Routes>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 p-2 opacity-[0.8] sm:p-3 rounded-full right-3 bg-[#024399] transition-all duration-150 hover:bg-[#013881] cursor-pointer text-white hover:opacity-[1]"
      >
        <MoveUp className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" />
      </button>
      <button
        onClick={(e) => {
          setPopup(true);
          e.target.preventDefault();
        }}
        className="fixed bottom-5 p-1 opacity-[0.8] sm:p-3 rounded-full right-16 bg-[#024399] transition-all duration-150 hover:bg-[#013881] cursor-pointer text-white hover:opacity-[1] hover:scale-110"
      >
        <MessageCircle className="text-white" />
      </button>

      {/* Popup for chat or support */}
      {popup && (
        <div className="fixed min-h-[500px] bg-[#e5f2f5] w-[400px] bottom-20 right-8  shadow-lg rounded-[10px] flex flex-col gap-3 overflow-hidden z-50">
          <Minus
            onClick={() => {
              setPopup(false);
            }}
            className="absolute  top-2 right-2 cursor-pointer text-white hover:text-[#6a9ee2] transition-all duration-150"
          />
          <span className="flex  items-center gap-4 p-4 bg-[#013881] font-semibold">
            <span className="w-[50px] h-[50px] rounded-full overflow-hidden">
              <img
                className="w-full h-full"
                src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?semt=ais_hybrid&w=740"
                alt=""
              />
            </span>
            <h2 className="text-lg text-white ">Chat Support</h2>
          </span>
          <div className="flex flex-col w-full h-[450px] items-between gap-y-px p-3 overflow-y-scroll">
            
            {msgs.map((msg , index) => (
              <Message msg={msg} key={index}/>
            ))
            }
              
          </div>

          {/* User Input section */}
          <div className="absolute rounded-[10px] bg-white  justify-between border-gray-400 flex bottom-0 w-full border-t-2">
            <input onChange={HandleInput}
              type="text"
              value={input}
              placeholder="Type your message here..."
              className="w-full p-3 focus:outline-none focus:border-[#024399]"
            />
            <div className="flex items-center gap-2 p-2">
              <input
                className="visually-hidden hidden"
                type="file"
                name=""
                id="file"
              />
              <label htmlFor="file">
                <Link className="text-slate-700 cursor-pointer" />
              </label>
              <Send onClick={HandleChat} className="text-slate-700 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
      {/* End of Popup */}
      <Footer />
    </div>
  );
}

export default App;
