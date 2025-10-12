import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
