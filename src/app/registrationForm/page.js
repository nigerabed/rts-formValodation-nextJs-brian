"use client"

import { useEffect } from "react";
import { userRegistration } from "../actions/formRegistration";
import { useActionState } from "react"

export default function RagistrationForm() {

 const [formState, formAction] = useActionState(userRegistration);

 useEffect(()=>{
  console.log("formState",formState);
  
 },[formState])

  return (
    <>
      <h1 className="text-[2em] font-bold text-center m-[2em]">
        Hotel Booking
      </h1>
      <form
        action={formAction}
        className="flex justify-center items-center flex-col w-[40%]"
      >
        <label
          htmlFor="name"
          className="w-[100%] text-gray-700 font-medium mb-2 flex justify-between"
        >
          Name
          <input
            type="text"
            id="name"
            name="name"
            className="w-[20em] ml-[2em] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            
            // required
          />
        </label>
          <span className="text-red-700 mb-[1em] text-[.6em] font-bold">{formState?.name?._errors}</span>
        <label
          htmlFor="name"
          className="w-[100%] text-gray-700 font-medium mb-2 flex justify-between"
        >
          Email
          <input
            type="email"
            id="email"
            name="email"
            className="w-[20em] ml-[2em]  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          
            // required
          />
        </label>
        <span className="text-red-700 mb-[1em] text-[.6em] font-bold">{formState?.email?._errors[0]}</span>
        <label
          htmlFor="country"
          className="w-[100%] text-gray-700 font-medium mb-2 flex justify-between"
        >
          Room type
          <select
            id="country"
            name="room_type"
           
            className="w-[20em] ml-[2em] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            // required
          >
            <option value="">room for peaple</option>
            <option value="normal">Normal</option>
            <option value="luxary">Luxery</option>
            <option value="seaview">Sea view</option>
          </select>
        </label>
        <span className="text-red-700 mb-[1em] text-[.6em] font-bold">{formState?.room_type?._errors[0]}</span>

        <label
          htmlFor="name"
          className="w-[100%] text-gray-700 font-medium mb-2 flex justify-between"
        >
          Number of guests
          <input
            type="number"
            id="number"
            name="guest"
           
            className="w-[20em] ml-[2em] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=" Number of guests"
            // required
          />
        </label>
        <label
          htmlFor="dob"
          className="w-[100%] flex text-gray-700 font-medium mb-2 justify-between"
        >
          Arrival date
          <input
            type="date"
            id="dob"
            name="arrival_date"
            className="w-[25em] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            // required
          />
        </label>
        <span className="text-red-700 mb-[1em] text-[.6em] font-bold">{formState?.arrival_date?._errors[0].message}</span>
        <label
          htmlFor="dob"
          className="w-[100%] text-gray-700 font-medium mb-2 flex justify-between"
        >
          Check out date
          <input
            type="date"
            id="dob"
            name="check_out_date"
            className="w-[25em] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            // required
          />
        </label>
        <span className="text-red-700 mb-[1em] text-[.7em] font-bold ">{formState?.check_out_date?._errors[0].message}</span>
        <button
          type="submit"
          className="w-[10em] mt-[2em] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Submit
        </button>
      </form>
    </>
  );
}
