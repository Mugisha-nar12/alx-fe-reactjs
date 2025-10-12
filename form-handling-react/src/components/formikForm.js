import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="w-full max-w-lg p-10 space-y-8 bg-white rounded-2xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Create an Account (Formik)
          </h1>
          <p className="mt-2 text-md text-gray-600">
            Using Formik and Yup for validation
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
                  name="username"
                  placeholder="Username"
                  className="block w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-gray-100 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className="mt-2 text-sm text-red-600"
                />
              </div>
              <div className="relative">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="block w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-gray-100 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="mt-2 text-sm text-red-600"
                />
              </div>
              <div className="relative">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="block w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-gray-100 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="mt-2 text-sm text-red-600"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg hover:from-purple-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 transform transition-transform duration-200 hover:scale-105"
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

export default FormikForm;
