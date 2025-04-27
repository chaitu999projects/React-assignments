import React, { Component } from "react";
import logo from "../assets/my_dp.jpg";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
  }
  state = {
    logo_description: "logo",
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    return (
      <div>
        <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg w-full fixed z-10 top-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link to='/' className="flex items-center">
                  <img
                    src={logo}
                    alt={this.state.logo_description}
                    className="h-10 w-10 rounded-full border-2 border-white transform hover:scale-110 transition duration-300"
                  />
                  <Link to='/' className="ml-3 text-white font-bold text-xl hidden sm:block">
                    Chaitanya
                  </Link>
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to='/'
                  // href="#"
                  className="text-white hover:text-slate-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-white hover:bg-opacity-10"
                >
                  Form
                </Link>
                <Link to='/todolist'
                  //href="#"
                  className="text-white hover:text-slate-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-white hover:bg-opacity-10"
                >
                  Todolist
                </Link>
                <Link to='/buttons'
                  className="text-white hover:text-slate-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-white hover:bg-opacity-10"
                >
                  Buttons
                </Link>
                <Link to='/props'
                  //href="#"
                  className="text-white hover:text-slate-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-white hover:bg-opacity-10"
                >
                  Props
                </Link>
                <Link to= '/contact' className="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-300 transform hover:scale-105">
                  Contact
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={this.toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black
                   hover:bg-white hover:bg-opacity-10 focus:outline-none transition duration-300"
                >
                  <svg
                    className={`h-6 w-6 ${
                      this.state.isMenuOpen ? "hidden" : "block"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={`h-6 w-6 ${
                      this.state.isMenuOpen ? "block" : "hidden"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              this.state.isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm">
              <Link to='/'
                //href="#"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-20 transition duration-300"
              >
                Form
              </Link>
              <Link to='/todolist'
                //href="#"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-20 transition duration-300"
              >
                Todolist
              </Link>
              <Link to='/buttons'
                //href="#"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-20 transition duration-300"
              >
                Buttons
              </Link>
              <Link to='/props'
                //href="#"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-20 transition duration-300"
              >
                Props
              </Link>
              <Link to='/contact' className="w-full bg-white text-indigo-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-300 mt-2">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
