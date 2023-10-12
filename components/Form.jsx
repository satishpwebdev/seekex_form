import React, { useState } from "react";
import axios from "axios";

const Form = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      dob: "",
      avatar: "",
      country: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleAvatarChange = (e) => {
      const file = e.target.files[0];
      setFormData({ ...formData, avatar: file.name });
   };

   const testData = {
      taskName: "Satish",
      desc: "dvsvs",
      remindAt: "2023-10-18",
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const resp = await axios.post("https://taskbe.cyclic.cloud/tasks", testData);
         const response = await resp.data;
         console.log("res", response);
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div className="bg-texture min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center text-black justify-center font-arone">
         <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4">Create a Person</h2>
            <form onSubmit={handleSubmit}>
               <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">
                     Name
                  </label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
                     required
                  />
               </div>

               <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">
                     Email
                  </label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label htmlFor="dob" className="block text-gray-700">
                     Date of Birth
                  </label>
                  <input
                     type="date"
                     id="dob"
                     name="dob"
                     value={formData.dob}
                     onChange={handleChange}
                     className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label htmlFor="avatar" className="block text-gray-700">
                     Avatar
                  </label>
                  <input
                     type="file"
                     id="avatar"
                     name="avatar"
                     onChange={handleAvatarChange}
                     accept="image/*"
                     className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
                  />
               </div>
               <div className="mb-4">
                  <label htmlFor="country" className="block text-gray-700">
                     Country
                  </label>
                  <select
                     id="country"
                     name="country"
                     value={formData.country}
                     onChange={handleChange}
                     className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
                     required
                  >
                     <option value="Select Country" disabled>
                        Select Country
                     </option>
                     <option value="USA">USA</option>
                     <option value="Canada">Canada</option>
                     <option value="UK">UK</option>
                     <option value="India">India</option>
                  </select>
               </div>
               <div className="text-center">
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Form;
