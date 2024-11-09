import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate hook'u ekleyin

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage("Kullanıcı adı ve şifre alanları boş bırakılamaz.");
      return;
    }
    console.log("Form gönderildi");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col overflow-hidden lg:flex-row">
      <div className="h-[200px] md:h-[400px] lg:h-screen w-full md:w-[75%] lg:w-[66.67%]">
        <img
          src="/Rectangle 1.png"
          alt="rectangle"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex justify-center items-center w-full lg:w-[33.33%] p-5 px-6 md:px-0 md:p-8 lg:p-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-2 lg:gap-10"
        >
          <h1 className="text-[#4A7A4C] text-[37px] font-bold self-start">
            Sign In
          </h1>

          <div className="flex flex-col items-center gap-9">
            <div className="relative w-full">
              <input
                name="username"
                type="text"
                placeholder="Username"
                className="border-2 border-[#777777] w-full rounded-[9px] pl-10 py-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <img
                src="/username.png"
                alt="username"
                className="absolute top-[50%] -translate-y-[50%] left-[10px]"
              />
            </div>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-[#777777] w-full rounded-[9px] pl-10 py-2"
              />
              <img
                src="/password.png"
                alt="password"
                className="absolute top-[50%] -translate-y-[50%] left-[10px]"
              />
              <img
                src="/password eye.png"
                alt="eye"
                onClick={toggleShowPassword}
                className="absolute cursor-pointer top-[50%] -translate-y-[50%] right-[10px]"
              />
            </div>
            <label
              htmlFor="compliant"
              className="text-[16px] font-normal w-full lg:w-2/3 self-start"
            >
              <input
                name="compliant"
                id="compliant"
                type="checkbox"
                className="mr-2"
              />
              I agree to the{" "}
              <span className="font-bold">
                Terms and Conditions & the Private Policy
              </span>{" "}
              by signing in
            </label>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}

          <div className="flex flex-col justify-center gap-2 w-[75%] sm:gap-4 md:gap-8 items-stretch text-[27px]">
            <button className="bg-[#4A7A4C] font-bold border-4 text-white border-transparent rounded-[9px] py-2 px-4">
              Log In
            </button>
            <button
              type="button"
              onClick={handleSignUpRedirect}
              className="border-4 border-[#4A7A4C] py-2 px-4 text-[#4A7A4C] font-bold"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
