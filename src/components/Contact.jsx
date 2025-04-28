import React from "react";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const category = document.getElementById("category").value;
    const phone = document.getElementById("phone").value;
    const newContact = { firstname, lastname, category, phone };
    const existingContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    existingContacts.push(newContact);

    localStorage.setItem("contacts", JSON.stringify(existingContacts));

    window.location.reload();
  };

  return (

    
    <div className="flex justify-center items-center min-h-screen bg-[#f3f4f6] p-4">

      <div className="w-full max-w-md bg-[#fefefe] rounded-2xl shadow p-6 space-y-6">
        <div className="text-2xl font-bold text-center">
          Contact Information
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="firstname" className="text-sm font-medium">
                Firstname
              </label>
              <input
                id="firstname"
                placeholder="Enter first name"
                className="border rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="lastname" className="text-sm font-medium">
                Lastname
              </label>
              <input
                id="lastname"
                placeholder="Enter last name"
                className="border rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <select id="category" className="border rounded-lg p-2">
                <option value="" disabled selected>
                  Select a category
                </option>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
                <option value="relatives">Relatives</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                className="border rounded-lg p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
