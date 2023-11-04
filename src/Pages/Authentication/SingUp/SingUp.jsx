import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SocialSingIn from "../SocialSingIn/SocialSingIn";
import { useForm } from "react-hook-form";
const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      photo: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;
    console.log(name, photo, email, password);
  };
    return (
      <div className="max-w-xl mx-auto my-10 md:my-20 border-2 rounded border-blue-400 p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Sing up
        </h1>
        <SocialSingIn />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">
            Name
            <input
              {...register("name", {required: "Name is required",})}
              placeholder="Name"
              className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
            />
          </label>
          <p className="text-xs text-red-600 mb-5 mt-1">
            {errors.name?.message}
          </p>
          <label htmlFor="photo">
          Photo URL
            <input
              {...register("photo", {required: "Photo URL is required",})}
              placeholder="Photo URL"
              className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
            />
          </label>
          <p className="text-xs text-red-600 mb-5 mt-1">
            {errors.photo?.message}
          </p>
          <label htmlFor="email">
            Email
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email"
              className="py-3 px-4 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
            />
          </label>
          <p className="text-xs text-red-600 mb-5 mt-1">
            {errors.email?.message}
          </p>
          <div className="relative">
            <label htmlFor="password">
              Password
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/,
                    message:
                      "Your password must be one uppercase, one digit, special characters and 8 character longer",
                  },
                })}
                placeholder="Password"
                className="py-3 pl-4 pr-12 block w-full border border-blue-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none mt-2"
              />
            </label>
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-10 right-4 cursor-pointer text-3xl text-blue-600"
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          <p className="text-xs text-red-600 mb-5 mt-1">
            {errors.password?.message}
          </p>
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sing up
          </button>
          <p className="text-xs text-center mt-5">
            Already have account? please{" "}
            <Link to={"/sing-in"} className="text-blue-800 underline font-bold">
              SingIn
            </Link>
          </p>
        </form>
      </div>
    );
};

export default SingUp;