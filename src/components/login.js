import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { useUserStore } from '../store/userStore.js';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();

  const { signInAction } = useUserStore();

  const onSubmit = async (data) => {
    try {
      await signInAction(data);
      setErrorMessage(false)
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(true)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container items-center">
        <h3 className="text-center font-extrabold text-4xl text-neutral-900 mb-2 font-inter">
          Welcome back
        </h3>
        <p className="text-center text-lg text-neutral-500">
          Please enter your credentials to log in.
        </p>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-[450px]">
            <div>
              <p className="mb-1 text-base font-bold text-neutral-600">Email:</p>
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

            {errorMessage && (
              <p className="text-center text-red-500 text-sm mt-3">
                Email or Password is incorrect
              </p>
            )}

            <button
              type="submit"
              className="mt-6 w-full h-[44px] mt-3 text-lg flex justify-center items-center bg-neutral-900 text-white p-1 rounded-lg cursor-pointer"
            >
              Log in
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p className="mr-2">Don't have an account?</p>
          <Link to="/register" className="text-blue-600 font-bold">Create an Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;