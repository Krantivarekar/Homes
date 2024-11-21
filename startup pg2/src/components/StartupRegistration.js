import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResearchRegistration = () => {
  const { register, handleSubmit } = useForm();
  const [fundingProvided, setFundingProvided] = useState(""); // State for funding question
  const navigate = useNavigate(); // For navigation

  const onSubmit = async (data) => {
    // Generate a 6-character alphanumeric ID
    const generateRandomId = () => {
      return Math.random().toString(36).substring(2, 8).toUpperCase();
    };

    const registrationId = generateRandomId();
    const registrationData = { ...data, registrationId };

    try {
      // Send the registration data to the backend
      const response = await axios.post("http://localhost:5000/api/register-research", registrationData);
      console.log(response.data);
      
      // Display success popup
      Swal.fire({
        title: "Registration Successful!",
        text: `Your registration ID is: ${registrationId}`,
        icon: "success",
        confirmButtonText: "Proceed",
      }).then(() => {
        navigate("/CommonPage");
      });
    } catch (error) {
      console.error("Error in registration:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an issue with the registration. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Research Registration Form
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        {/* Contact Info */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Contact Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Name of the Researcher *</label>
              <input
                type="text"
                {...register("researcherName", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter researcher's name"
              />
            </div>
            <div>
              <label className="block font-semibold">Email *</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="block font-semibold">Contact Number *</label>
              <input
                type="tel"
                {...register("contactNumber", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter contact number"
              />
            </div>
            <div>
              <label className="block font-semibold">City *</label>
              <input
                type="text"
                {...register("city", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter city"
              />
            </div>
            <div>
              <label className="block font-semibold">State *</label>
              <input
                type="text"
                {...register("state", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter state"
              />
            </div>
            <div>
              <label className="block font-semibold">Portfolio Link</label>
              <input
                type="url"
                {...register("portfolioLink")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter portfolio link"
              />
            </div>
            <div>
              <label className="block font-semibold">LinkedIn Profile</label>
              <input
                type="url"
                {...register("linkedinProfile")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter LinkedIn profile link"
              />
            </div>
          </div>
        </div>

        {/* Research Info */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-green-600">Research Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Title of the Research *</label>
              <input
                type="text"
                {...register("researchTitle", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter research title"
              />
            </div>
            <div>
              <label className="block font-semibold">Research Type *</label>
              <select
                {...register("researchType", { required: true })}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">Select Research Type</option>
                <option>Basic Research</option>
                <option>Applied Research</option>
                <option>Exploratory Research</option>
                <option>Descriptive Research</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold">Funding Status *</label>
              <select
                {...register("fundingStatus", { required: true })}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">Select Funding Status</option>
                <option>Self-Funded</option>
                <option>Government Funded</option>
                <option>Private Funded</option>
                <option>Crowdfunding</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block font-semibold">Abstract *</label>
              <textarea
                {...register("abstract", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter abstract of the research"
                rows="4"
              ></textarea>
            </div>
            <div>
              <label className="block font-semibold">Research Start Date *</label>
              <input
                type="date"
                {...register("startDate", { required: true })}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold">Expected End Date *</label>
              <input
                type="date"
                {...register("endDate", { required: true })}
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>
        </div>

        {/* Funding Info */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-yellow-600">Funding</h2>
          {/* Funding Provided Earlier */}
          <div>
            <label className="block font-semibold">Funding Provided Earlier?</label>
            <select
              {...register("fundingProvided")}
              onChange={(e) => setFundingProvided(e.target.value)}
              className="w-full border rounded px-4 py-2"
            >
              <option value="">Select Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Conditional Rendering of Funding Status and Investor Name */}
          {fundingProvided === "Yes" && (
            <>
              <div>
                <label className="block font-semibold">Investor Name</label>
                <input
                  type="text"
                  {...register("investorName")}
                  className="w-full border rounded px-4 py-2"
                  placeholder="Enter investor name"
                />
              </div>
            </>
          )}
        </div>

        {/* Team Info */}
        <div className="bg-teal-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-teal-600">Team Info</h2>
          <div>
            <label className="block font-semibold">Team Size *</label>
            <input
              type="number"
              {...register("teamSize", { required: true })}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter team size"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResearchRegistration;
