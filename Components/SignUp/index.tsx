import React, { useState } from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import LoginSvg from "../LoginSvg";
import { RegistraionSVG4 } from "../RegistraionSVG";

// Validation schema for the sign-up form
const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);
  const router = useRouter();

  const handleSubmit = (values) => {
    console.log(values); // Handle form submission here
  };
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="w-full md:w-1/2 bg-blue-50 flex items-center justify-center relative">
          <div className="absolute top-60 left-4 text-lg font-bold text-orange-400">
            <LoginSvg />
          </div>
        </div>
        <div className="absolute z-10 inset-0 flex items-center justify-center p-4 md:p-0">
          <div className="max-w-md h-[96%] flex flex-col overflow-scroll w-full p-6 md:p-8 rounded-3xl shadow-wrapShadow border bg-white">
            <div className="flex justify-between">
              <h1 className="text-[20px] md:text-[30px] font-medium text-black">
                Customer Sign Up
              </h1>
              <div className="w-1/3">
                <span className="text-sm text-[#8D8D8D] hover:text-gray-800">
                  Have an Account?{" "}
                </span>
                <h1
                  onClick={() => router.push("/login")}
                  className="text-blue-500 text-sm cursor-pointer"
                >
                  Sign in
                </h1>
              </div>
            </div>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                gender: "",
                state: "",
                city: "",
                country: "",
              }}
              validationSchema={ValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="mt-8">
                  <div className="mb-6">
                    <label
                      htmlFor="firstName"
                      className="block text-sm md:text-base"
                    >
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="First Name"
                    />
                    {errors.firstName && touched.firstName && (
                      <div className="text-red-500 text-xs mt-1">
                        {String(errors.firstName)}
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="lastName"
                      className="block text-sm md:text-base"
                    >
                      Last Name
                    </label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Last Name"
                    />
                    {errors.lastName && touched.lastName && (
                      <div className="text-red-500 text-xs mt-1">
                        {String(errors.lastName)}
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm md:text-base"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Email"
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500 text-xs mt-1">
                        {String(errors.email)}
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="gender"
                      className="block text-sm md:text-base"
                    >
                      Gender
                    </label>
                    <Field
                      as="select"
                      id="gender"
                      name="gender"
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Field>
                    {errors.gender && touched.gender && (
                      <div className="text-red-500 text-xs mt-1">
                        {String(errors.gender)}
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="state"
                      className="block text-sm md:text-base"
                    >
                      State
                    </label>
                    <Field
                      type="text"
                      id="state"
                      name="state"
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="State"
                    />
                    {errors.state && touched.state && (
                      <div className="text-red-500 text-xs mt-1">
                        {String(errors.state)}
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="city"
                      className="block text-sm md:text-base"
                    >
                      City
                    </label>
                    <Field
                      type="text"
                      id="city"
                      name="city"
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="City"
                    />
                    {errors.city && touched.city && (
                      <div className="text-red-500 text-xs mt-1">
                        {String(errors.city)}
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="country"
                      className="block text-sm md:text-base"
                    >
                      Country
                    </label>
                    <Field
                      type="text"
                      id="country"
                      name="country"
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Country"
                    />
                    {errors.country && touched.country && (
                      <div className="text-red-500 text-xs mt-1">
                        {String(errors.country)}
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                    >
                      Sign up
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="w-1/2 bg-white hidden md:flex items-center justify-center relative">
          <RegistraionSVG4 />
        </div>
      </div>
    </>
  );
};

export default SignUp;
