import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      errors: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
      },
      isSubmitted: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      errors: {
        ...this.state.errors,
        [name]: "", // Clear error when user types
      },
    });
  };

  validateForm = () => {
    const { firstName, lastName, emailAddress, phoneNumber } = this.state;
    let isValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
    };

    if (firstName.length < 3) {
      newErrors.firstName = "First name must be at least 3 characters";
      isValid = false;
    }

    if (lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address";
      isValid = false;
    }

    if (!/^\d{10,15}$/.test(phoneNumber)) {
      newErrors.phoneNumber =
        "Please enter a valid phone number (10-15 digits)";
      isValid = false;
    }

    this.setState({ errors: newErrors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      // Form is valid, proceed with submission
      this.setState({ isSubmitted: true });
      console.log("Form submitted:", this.state);
      // Here you would typically send data to an API
      alert("Form submitted successfully!");
    }
  };

  render() {
    const {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      errors,
      isSubmitted,
    } = this.state;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Contact Information
            </h2>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Thank you!
                </h3>
                <p className="text-gray-600">
                  Your information has been submitted successfully.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={this.handleSubmit}>
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      onChange={this.handleChange}
                      name="firstName"
                      value={firstName}
                      placeholder="Enter First Name"
                      className={`w-full px-5 py-3 bg-gray-50 rounded-lg border ${
                        errors.firstName ? "border-red-500" : "border-gray-200"
                      } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 transition-colors duration-200 ease-in-out`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="text"
                      onChange={this.handleChange}
                      name="lastName"
                      value={lastName}
                      placeholder="Enter Last Name"
                      className={`w-full px-5 py-3 bg-gray-50 rounded-lg border ${
                        errors.lastName ? "border-red-500" : "border-gray-200"
                      } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 transition-colors duration-200 ease-in-out`}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="email"
                      onChange={this.handleChange}
                      name="emailAddress"
                      value={emailAddress}
                      placeholder="Enter Email"
                      className={`w-full px-5 py-3 bg-gray-50 rounded-lg border ${
                        errors.emailAddress
                          ? "border-red-500"
                          : "border-gray-200"
                      } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 transition-colors duration-200 ease-in-out`}
                    />
                  </div>
                  {errors.emailAddress && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.emailAddress}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="tel"
                      onChange={this.handleChange}
                      name="phoneNumber"
                      value={phoneNumber}
                      placeholder="Enter Phone Number"
                      className={`w-full px-5 py-3 bg-gray-50 rounded-lg border ${
                        errors.phoneNumber
                          ? "border-red-500"
                          : "border-gray-200"
                      } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 transition-colors duration-200 ease-in-out`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="relative w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
