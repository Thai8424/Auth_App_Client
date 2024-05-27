import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { useUserStore } from '../store/userStore.js';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
  } = useForm();

  const { signUpAction } = useUserStore();


  const onSubmit = async (data) => {

    try {
      await signUpAction(data);
      console.log('Navigating to /dashboard');
      navigate("/dashboard");
    } catch (error) {
      const errorData = error?.response?.data || { message: 'An error occurred' };
      const errorField = errorData?.field || "email";

      setError(errorField, {
        type: "400",
        message: errorData.message,
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container items-center">
        <h3 className="text-center font-extrabold text-4xl text-neutral-900 mb-2 font-inter">
          Create Account
        </h3>
        <p className="text-center text-lg text-neutral-500">
          Please enter your information to sign up.
        </p>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-[450px]">
            <div>
              <p className="mt-4 mb-1 text-base font-bold text-neutral-600">User Name:</p>
              <input
                className="w-full h-12 text-base px-4 py-2 border font-normal border-neutral-500 rounded focus:outline-none placeholder-neutral-400"
                name="userName"
                required
                placeholder="Enter your user name"
                {...register("userName")}
              />
            </div>
            <div>
              <p className="mt-4 mb-1 text-base font-bold text-neutral-600">Email:</p>
              <input
                className="w-full h-12 text-base px-4 py-2 border font-normal border-neutral-500 rounded focus:outline-none placeholder-neutral-400"
                type="email"
                name="email"
                required
                placeholder="user@gmail.com"
                {...register("email")}
              />
            </div>
            <div>
              <p className="mt-4 mb-1 text-base font-bold text-neutral-600">Password:</p>
              <input
                className="w-full h-12 text-base px-4 py-2 border font-normal border-neutral-500 rounded focus:outline-none placeholder-neutral-400"
                type="password"
                name="password"
                required
                placeholder="Enter your password"
                {...register("password")}
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full h-[44px] mt-3 text-lg flex justify-center items-center bg-neutral-900 text-white p-1 rounded-lg cursor-pointer"
            >
              Create
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p className="mr-2">Already have an account?</p>
          <Link to="/" className="text-blue-600 font-bold">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;