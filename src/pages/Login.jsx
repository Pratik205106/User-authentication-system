import React from 'react';
import { NavLink } from 'react-router';
import { useForm } from 'react-hook-form';

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const formInput = (value) => {
    console.log(value)
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h1>
         <form className="space-y-6" onSubmit={handleSubmit((value)=> formInput(value))}>
          <div className="grid gap-2">
            <label htmlFor="email" className="font-medium text-gray-700"> 
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required:"Please enter email"
              })} 
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your email"
            />
            {
              errors?.email && <p className=' text-red-600'>{errors?.email.message}</p>
            }

          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required:"Please required password"
              })} 
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your password"
            />
            {
              errors?.password && <p className=' text-red-600'>{errors?.password.message}</p>
            }
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded-md hover:from-indigo-600 hover:to-purple-600 focus:ring-4 focus:ring-indigo-300 transition"
          >
            Submit
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?{' '}
          <NavLink to="/signUp" className="text-indigo-500 hover:underline">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
