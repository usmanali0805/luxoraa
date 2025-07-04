import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('emilys')
  const [password, setPassword] = useState("emilyspass");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [token, setToken] = useState()

  const handleLogin = async (e) => {
    e.preventDefault();
    const usertkn  = localStorage.getItem("User")
    if(token){
      if(!usertkn){
        const newArr = [token]
        localStorage.setItem("User", JSON.stringify(newArr))
      }
    }else{
      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username:username,
            password:password,
            expiresInMins: 30, 
          }), 
        })
        const jsonresponce = await response.json()
        setToken(jsonresponce.accessToken)
       
    }
    catch (err) {
      console.log("Something went wrong.");
      }
    }

  };

  const Refresh = () => {
    // setTimeout(() => {
      
    //   window.location.reload();
    // }, 3000);
  }
  


  return (
    <div className="max-w-md mx-auto min-h-[50vh]  p-6 shadow rounded bg-white mt-10">
      <h2 className="text-xl font-semibold mb-4">Login to Luxora</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          className="w-full border px-3 py-2 mb-4"
          value={username}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          className="w-full border px-3 py-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          />
        <button onClick={Refresh} className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded">
          Login
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Login;

          /*const data = await response.json();
      
          if (response.ok) {
            localStorage.setItem("luxoraToken", data.token);
            navigate("/"); // redirect to homepage
          } else {
            setError(data.error || "Login failed.");
          }*/