"use client";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Image from "next/image";
import { useAuth } from "../../AuthContext";
import { useRouter } from "next/navigation";

interface CreateAccountFormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

const CreateAccount: React.FC = () => {
    const { register } = useAuth();
    const router = useRouter();
    const [success, setSuccess] = useState(false);

    const initialValues: CreateAccountFormValues = {
        email: "",
        password: "",
        confirmPassword: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
        .email("Invalid email address")
        .required("Cannot be empty"),
        password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Cannot be empty"),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Cannot be empty"),
    });

    const handleSubmit = async (
        values: CreateAccountFormValues,
        { setSubmitting }: FormikHelpers<CreateAccountFormValues>
    ) => {
        try {
        await register(values.email, values.password);
        setSuccess(true);
        setTimeout(() => {
            router.push("/");
        }, 2000); // Redirect after 2 seconds
        } catch (error) {
        console.error(error);
        } finally {
        setSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="flex justify-center py-8">
            <Image
            src="/assets/group-logo.png"
            alt="Logo"
            width={182.5}
            height={40}
            />
        </div>
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg">
            <div className="px-6 pt-6 pb-4">
            <h2 className="text-2xl font-extrabold text-left text-gray-900 mb-3">
                Create account
            </h2>
            <p className="text-left text-gray-600 mb-3">
                Add your details below to create an account
            </p>
            </div>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
            {({ isSubmitting, errors, touched }) => (
                <Form className="px-6">
                <div className="flex flex-col items-center space-y-6">
                    <div className="w-full space-y-6">
                    <div className="relative flex flex-col space-y-2">
                        <label
                        htmlFor="email"
                        className={`text-xs font-normal leading-4 text-left ${
                            errors.email && touched.email
                            ? "text-red-500"
                            : "text-gray-700"
                        }`}
                        >
                        Email address
                        </label>
                        <div className="relative">
                        <Field
                            name="email"
                            type="email"
                            className={`block w-full h-12 pl-10 pr-12 py-3 text-gray-900 placeholder-gray-500 border rounded-md ${
                            errors.email && touched.email
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-[#633CFF] focus:border-[#633CFF] sm:text-sm`}
                            placeholder="e.g. alex@email.com"
                            style={{ paddingLeft: "39px" }}
                        />
                        <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                        <ErrorMessage name="email">
                            {(msg) => (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm">
                                {msg}
                            </div>
                            )}
                        </ErrorMessage>
                        </div>
                    </div>
                    <div className="relative flex flex-col space-y-2">
                        <label
                        htmlFor="password"
                        className={`text-xs font-normal leading-4 text-left ${
                            errors.password && touched.password
                            ? "text-red-500"
                            : "text-gray-700"
                        }`}
                        >
                        Password
                        </label>
                        <div className="relative">
                        <Field
                            name="password"
                            type="password"
                            className={`block w-full h-12 pl-10 pr-12 py-3 text-gray-900 placeholder-gray-500 border rounded-md ${
                            errors.password && touched.password
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-[#633CFF] focus:border-[#633CFF] sm:text-sm`}
                            placeholder="Enter your password"
                            style={{ paddingLeft: "39px" }}
                        />
                        <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                        <ErrorMessage name="password">
                            {(msg) => (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm">
                                {msg}
                            </div>
                            )}
                        </ErrorMessage>
                        </div>
                    </div>
                    <div className="relative flex flex-col space-y-2">
                        <label
                        htmlFor="confirmPassword"
                        className={`text-xs font-normal leading-4 text-left ${
                            errors.confirmPassword && touched.confirmPassword
                            ? "text-red-500"
                            : "text-gray-700"
                        }`}
                        >
                        Confirm Password
                        </label>
                        <div className="relative">
                        <Field
                            name="confirmPassword"
                            type="password"
                            className={`block w-full h-12 pl-10 pr-12 py-3 text-gray-900 placeholder-gray-500 border rounded-md ${
                            errors.confirmPassword && touched.confirmPassword
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-[#633CFF] focus:border-[#633CFF] sm:text-sm`}
                            placeholder="Confirm your password"
                            style={{ paddingLeft: "39px" }}
                        />
                        <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                        <ErrorMessage name="confirmPassword">
                            {(msg) => (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm">
                                {msg}
                            </div>
                            )}
                        </ErrorMessage>
                        </div>
                    </div>
                    </div>
                    <button
                    type="submit"
                    className="w-full h-12 px-4 py-3 text-white bg-[#633CFF] rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BE9EFF]"
                    disabled={isSubmitting}
                    >
                    {isSubmitting ? "Creating account..." : "Create account"}
                    </button>
                </div>
                {success && (
                    <p className="py-6 text-center text-green-500">
                    Account created successfully! Redirecting...
                    </p>
                )}
                <p className="py-6 text-center text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#633CFF] font-medium">
                    Login
                    </a>
                </p>
                </Form>
            )}
            </Formik>
        </div>
        </div>
    );
};

export default CreateAccount;
