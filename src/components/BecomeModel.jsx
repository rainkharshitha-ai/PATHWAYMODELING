import React from "react";
import { Link } from "react-router-dom";   // ✅ ADD THIS
import ModelImg from "../images/modeling-banner.jpg";


const BecomeModel = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="relative h-[70vh]">
        <img
          src={ModelImg}
          alt="Become a Model"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            Become a Model
          </h1>
          <p className="mt-3 text-lg md:text-xl max-w-2xl">
            Turn your confidence into a career. Your journey starts here.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="container my-5">
        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-md-6 mb-4">
            <h2 className="text-3xl font-semibold mb-3">
              Who Can Apply?
            </h2>

            <ul className="space-y-2 text-lg">
            <li>✔ Open to ages 16 and above</li>
            <li>✔ Strong passion for modeling</li>
            <li>✔ Confidence and commitment</li>
           <li>✔ No prior experience required</li>
           </ul>


            <p className="mt-4 text-gray-600">
              We provide professional grooming, runway training,
              portfolio shoots, and real industry exposure.
            </p>

            {/* ✅ APPLY BUTTON WITH LINK */}
            <Link to="/apply">
              <button className="mt-4 px-6 py-3 rounded-full bg-black text-white hover:bg-yellow-600 transition">
                Apply Now
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src={ModelImg}
              alt="Model"
              className="rounded-2xl shadow-lg mx-auto max-w-full"
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default BecomeModel;
