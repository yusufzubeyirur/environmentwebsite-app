import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign Up Başarıyla Tamamlandı");
    navigate("/dashboard");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      className="flex flex-col md:flex-row overflow-hidden"
      onSubmit={handleSignUp}
    >
      <div className="h-[200px] md:h-screen w-full lg:w-[66.67%]">
        <img
          src="signup wallpaper.png"
          alt="rectangle"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex justify-center items-center w-full lg:w-[33.33%] p-5 px-6 md:px-0 md:p-8 lg:p-12">
        <div className="flex flex-col justify-center items-center gap-2 lg:gap-10">
          <h1 className="text-[#4A7A4C] text-[37px] font-bold self-start">
            Sign Up
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
                name="email"
                type="email"
                placeholder="Email"
                className="border-2 border-[#777777] w-full rounded-[9px] pl-10 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <img
                src="/email.png"
                alt="email"
                className="absolute top-[50%] -translate-y-[50%] left-[10px]"
              />
            </div>
            <div className="relative w-full">
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="border-2 border-[#777777] w-full rounded-[9px] pl-10 py-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <img
                src="/phone.png"
                alt="phone"
                className="absolute top-[50%] -translate-y-[50%] left-[10px]"
              />
            </div>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="border-2 border-[#777777] w-full rounded-[9px] pl-10 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              by signing up
            </label>
          </div>

          <div className="flex flex-col justify-center gap-2 w-[75%] sm:gap-4 md:gap-8 items-stretch text-[27px]">
            <button
              type="submit"
              className="bg-[#4A7A4C] font-bold border-4 text-white border-transparent rounded-[9px] py-2 px-4"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
