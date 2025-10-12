import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulate API call
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Your Account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Get started with your free account
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              <div className="relative">
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="block w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-gray-100 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="mt-2 text-sm text-red-600"
                />
              </div>
              <div className="relative">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  className="block w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-gray-100 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-2 text-sm text-red-600"
                />
              </div>
              <div className="relative">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="block w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-gray-100 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="mt-2 text-sm text-red-600"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg hover:from-indigo-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transform transition-transform duration-200 hover:scale-105"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
