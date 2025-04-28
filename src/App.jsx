import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  const savedContact = JSON.parse(localStorage.getItem("contact"));
  return (
    <div>
      {savedContact ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Contact Saved</h1>
          <p>Your contact information saved successfully</p>
          <div>
            <p>
              <strong>Firstname:</strong> {savedContact.firstname}
            </p>
            <p>
              <strong>Lastname:</strong> {savedContact.lastname}
            </p>
            <p>
              <strong>Category:</strong> {savedContact.category}
            </p>
            <p>
              <strong>Phone:</strong> {savedContact.phone}
            </p>
          </div>
        </div>
      ) : (
        <Contact />
      )}
    </div>
  );
}

export default App;
