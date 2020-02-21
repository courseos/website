import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Layout from "../components/layout";
import SEO from "../components/seo";

import logo from "../images/logo.svg";
import logoSolid from "../images/logo-solid.svg";
import customize from "../images/customize.svg";
import zeroFees from "../images/zero-fees.svg";
import audience from "../images/audience.svg";

const PRICE = 49;

function IndexPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      {/* <!--Nav--> */}
      <nav id="header" className="w-full z-30 text-white py-1 lg:py-6">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
          <div className="pl-4 flex items-center">
            <a
              className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <img src={logo} />
            </a>
          </div>

          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-white border-white hover:opacity-0.9 appearance-none focus:outline-none"
              onClick={() => setMenuOpen(open => !open)}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
              menuOpen ? "hidden" : ""
            } lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20`}
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {/* <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-white font-bold no-underline"
                  href="#"
                >
                  Active
                </a>
              </li> */}
              <li className="mr-3">
                <AnchorLink
                  className="inline-block text-white no-underline hover:opacity-0.7 hover:text-underline py-2 px-4"
                  href="#features"
                >
                  Features
                </AnchorLink>
              </li>
              <li className="mr-3">
                <AnchorLink
                  className="inline-block text-white no-underline hover:opacity-0.7 hover:text-underline py-2 px-4"
                  href="#learn"
                >
                  Learn
                </AnchorLink>
              </li>
            </ul>
            <AnchorLink
              id="navAction"
              className="mx-auto hidden lg:block lg:mx-0 hover:underline bg-white text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow hover:shadow-lg"
              href="#pricing"
            >
              Buy Now (${PRICE})
            </AnchorLink>
          </div>
        </div>
      </nav>

      <div className="container mx-auto">
        <div className="text-center px-3 py-16 lg:px-0">
          <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight text-white">
            Build, host, and sell your online course!
          </h1>
          <p className="leading-normal text-white text-base md:text-xl lg:text-2xl mb-8">
            CourseOS is a fully-customizable, self-hosted online course
            platform.
          </p>

          <AnchorLink
            href="#pricing"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
          >
            Buy Now (${PRICE})
          </AnchorLink>
          <AnchorLink
            href="#features"
            className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-white font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
          >
            Learn More
          </AnchorLink>
        </div>

        {/* <div className="flex items-center w-full mx-auto content-end">
          <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"></div>
        </div> */}
      </div>

      {/* <section className="bg-white border-b py-12 ">
        <div className="container mx-auto flex flex-wrap items-center justify-between pb-12">
          <h2 className="w-full my-2 text-xl font-black leading-tight text-center text-gray-800 lg:mt-8">
            Our Customers / Featured in
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-1 flex-wrap max-w-4xl mx-auto items-center justify-between text-xl text-gray-500 font-bold opacity-75">
            <span className="w-1/2 p-4 md:w-auto flex items-center">
              <svg
                className="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 0H6L0 3v6l4-1v12h12V8l4 1V3l-6-3h-1a3 3 0 0 1-6 0z" />
              </svg>
              TeeShirtz
            </span>

            <span className="w-1/2 p-4 md:w-auto flex items-center">
              <svg
                className="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zM1.85 15.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z" />
              </svg>
              Mic.Check
            </span>

            <span className="w-1/2 p-4 md:w-auto flex items-center">
              <svg
                className="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4 2.75V20l-4-4-4 4v-8.25a6.97 6.97 0 0 0 8 0z" />
              </svg>
              BadgeLife.io
            </span>

            <span className="w-1/2 p-4 md:w-auto flex items-center">
              <svg
                className="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M15.3 14.89l2.77 2.77a1 1 0 0 1 0 1.41 1 1 0 0 1-1.41 0l-2.59-2.58A5.99 5.99 0 0 1 11 18V9.04a1 1 0 0 0-2 0V18a5.98 5.98 0 0 1-3.07-1.51l-2.59 2.58a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41l2.77-2.77A5.95 5.95 0 0 1 4.07 13H1a1 1 0 1 1 0-2h3V8.41L.93 5.34a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0l2.1 2.1h11.12l2.1-2.1a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41L16 8.41V11h3a1 1 0 1 1 0 2h-3.07c-.1.67-.32 1.31-.63 1.89zM15 5H5a5 5 0 1 1 10 0z" />
              </svg>
              Bugz 4 Life
            </span>
          </div>
        </div>
      </section> */}

      <section className="bg-gray-100 border-b py-8" id="features">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
            Features
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap mb-8">
            <div className="w-5/6 sm:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-6">
                Fully Customizable
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img src={customize} />
            </div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row mb-8">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img src={zeroFees} />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6 flex flex-col justify-center">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  No Extra Fees
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-6">
                Own Your Audience
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img src={audience} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b py-8" id="learn">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
            Learn
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                  GETTING STARTED
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6 mb-6">
                  Getting started with CourseOS
                </div>
                <p className="text-gray-600 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow px-6">
              <div className="flex items-center justify-start">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-extrabold rounded my-6 py-4 px-8 shadow-lg">
                  Action
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                  GETTING STARTED
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6 mb-6">
                  Hosting your CourseOS course
                </div>
                <p className="text-gray-600 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow px-6">
              <div className="flex items-center justify-start">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-extrabold rounded my-6 py-4 px-8 shadow-lg">
                  Action
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                  COMPARISON
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6 mb-6">
                  CourseOS vs. Podia
                </div>
                <p className=" text-gray-600 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow px-6">
              <div className="flex items-center justify-start">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-extrabold rounded my-6 py-4 px-8 shadow-lg">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8" id="pricing">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2
            id="#pricing"
            className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800"
          >
            Pricing
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  Basic
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4"></li>
                  <li className="border-b py-4">Manage your content</li>
                  <li className="border-b py-4">Fully-customizable</li>
                  <li className="border-b py-4">Free hosting</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  Open Source
                </div>
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline bg-gray-800 text-white font-bold rounded my-6 py-4 px-8 shadow-lg flex justify-center">
                    <svg
                      className="mr-4"
                      width="30"
                      height="30"
                      viewBox="0 0 1024 1024"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                        transform="scale(64)"
                        fill="#FFFFFF"
                      />
                    </svg>
                    Github
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 gradient shadow hover:shadow-lg z-10">
              <div className="flex-1 rounded-t rounded-b-none overflow-hidden">
                <div className="w-full p-8 text-5xl font-black text-center text-white">
                  Pro
                </div>
                <ul className="w-full text-center text-lg text-white font-bold">
                  <li className="py-4">Built-in Payments</li>
                  <li className="py-4">User Authentication</li>
                  <li className="py-4">Coupons + Discounts</li>
                  <li className="py-4">Unlimited Support</li>
                </ul>
              </div>
              <div className="flex-none mt-auto rounded-b rounded-t-none overflow-hidden p-6">
                <div className="w-full pt-6 text-4xl font-bold text-center text-white">
                  $49 <span className="text-base">/ per course</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  Addons
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4">Custom Themes</li>
                  <li className="border-b py-4">Admin Panel</li>
                  <li className="border-b py-4">1-click Course Import</li>
                  <li className="border-b py-4">Visual Course Builder</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  $10+ <span className="text-base">/ per addon</span>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    disabled
                    className="mx-auto lg:mx-0 bg-gray-400 text-white font-bold rounded my-6 py-4 px-8 shadow-lg"
                  >
                    Coming soon!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient w-full mx-auto text-center py-12">
        <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-white">
          Build Your Course
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        {/* <h3 className="my-4 text-3xl font-bold text-white">
        </h3> */}
        <div className="mt-16 mb-8">
          <AnchorLink
            href="#pricing"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded py-4 px-8 shadow-lg"
          >
            Buy Now (${PRICE})
          </AnchorLink>
        </div>
      </section>

      {/* <!--Footer--> */}
      <footer className="bg-white ">
        <div className="container mx-auto pt-8 px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 mr-16">
              <AnchorLink
                className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                <img src={logoSolid} />
              </AnchorLink>
            </div>

            <div className="flex-1">
              <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                Links
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Help
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                Legal
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Terms
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                Social
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                Company
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Official Blog
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}

export default IndexPage;
