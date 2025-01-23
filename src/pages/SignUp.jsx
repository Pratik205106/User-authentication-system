import React, { forwardRef } from 'react';
import { NavLink } from 'react-router';
import { useForm } from 'react-hook-form';

const SignUp = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    function submitForm(value){
      console.log(value);
      sendData(value);
    }

    async function sendData(data){
      const dataSend = await fetch("", {
method: "post",
headers: {
  "content-Type": "application/json",
},
body: JSON.stringify(data),
      })
    }

    // const formInput = (value) => {
    //   console.log(value)
    // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#87f5f5] to-[#ffe5f1]">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-lg m-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit((value)=> formInput(value))}>
          <div className="grid gap-2">
            <label htmlFor="first-name" className="font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", {
                required:"Please enter first-name"
              })} 

              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Enter your first name"
            />
            {
              errors?.firstName && <p className=' text-red-600'>{errors?.firstName.message}</p>
            }
          </div>
          <div className="grid gap-2">
            <label htmlFor="middle-name" className="font-medium text-gray-700">
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              {...register("middleName", {
                required:"Please enter middle name"
              })} 

              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Enter your middle name"
            />
            {
              errors?.middleName && <p className=' text-red-600'>{errors?.middleName.message}</p>
            }
          </div>
          <div className="grid gap-2">
            <label htmlFor="last-name" className="font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", {
                required:"Please enter last name"
              })} 

              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Enter your last name"
            />
             {
              errors?.lastName && <p className=' text-red-600'>{errors?.lastName.message}</p>
            }
          </div>
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

              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Enter your email"
            />
             {
              errors?.email && <p className=' text-red-600'>{errors?.email.message}</p>
            }
          </div>
          <div className="grid gap-2">
            <label htmlFor="number" className="font-medium text-gray-700">
              Contact
            </label>
            <input
              type="number"
              id="number"
              {...register("number", {
                required:"Please enter contact number"
              })} 

              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Enter your email"
            />
            {
              errors?.number && <p className=' text-red-600'>{errors?.number.message}</p>
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
                required:"Please enter password"
              })}

              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Create a password"
            />
            {
              errors?.password && <p className=' text-red-600'>{errors?.password.message}</p>
            }
          </div>
          <div className="grid gap-2">
            <label htmlFor="confirm-password" className="font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required:"Please enter confirm password"
              })}

              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Confirm your password"
            />
             {
              errors?.confirmPassword && <p className=' text-red-600'>{errors?.confirmPassword.message}</p>
            }
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#7226ff] to-[#0002ff] text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:ring-purple-300 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <NavLink to='/signin' className="text-purple-500 hover:underline">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
