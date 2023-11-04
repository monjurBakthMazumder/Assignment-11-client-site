import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SocialSingIn from "../SocialSingIn/SocialSingIn";
const SingIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="max-w-xl mx-auto my-10 md:my-20 border-2 rounded border-blue-400 p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Sing in</h1>
      <SocialSingIn/>
      <form>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2 mb-5"
          />
        </label>
        <div className="relative">
          <label htmlFor="password">
            Password
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="py-3 pl-4 pr-12 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2 mb-5"
            />
          </label>
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-10 right-4 cursor-pointer text-3xl text-blue-600"
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sing in
        </button>
        <p className="text-xs text-center mt-5">
          New Here? please{" "}
          <Link to={"/sing-up"} className="text-blue-800 underline font-bold">
            SingUP
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SingIn;
