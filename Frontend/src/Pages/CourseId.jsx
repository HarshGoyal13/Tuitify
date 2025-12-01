import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import { courses } from "../Data/Course";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [openModule, setOpenModule] = useState(null);

  useEffect(() => {
    const selectedCourse = courses.find((c) => c.id === id);
    setCourse(selectedCourse);
  }, [id]);

  if (!course)
    return (
      <div className="text-white p-10 flex justify-center items-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-400 mr-3"></div>
        <span className="text-xl">Loading course details...</span>
      </div>
    );

  const price = course.price;
  const discountAmount = Math.round((price * course.discount) / 100);
  const finalPrice = price - discountAmount;

  const modules = course.modules;
  const courseIncludes = course.includes;

  return (
    <>
      {/* ------- SEO -------- */}
      <Helmet>
        <title>{course?.name} | Tuitify</title>
        <meta name="description" content={course?.description} />
      </Helmet>

      <div className="robot_font text-white min-h-screen px-4 sm:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h1 className="text-5xl font-extrabold mb-5">
                {course.name}
              </h1>
              <p className="text-gray-300 text-lg border-l-4 border-yellow-500 pl-4 bg-gray-800/50 rounded-md">
                {course.description}
              </p>
            </section>

         

            <section className="p-6 bg-gray-800 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">
                About This Course
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {course.about}
              </p>
            </section>

            {/* COURSE INCLUDES */}
            <section>
              <h2 className="text-3xl font-bold mb-6">What You Will Get</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courseIncludes.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-gray-200 text-lg"
                  >
                    <FaCheckCircle className="text-yellow-400 mt-1" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* MODULES */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>

              {modules.map((m, index) => (
                <div
                  key={index}
                  onClick={() => setOpenModule(openModule === index ? null : index)}
                  className={`p-5 rounded-xl cursor-pointer transition-all mb-6 ${
                    openModule === index
                      ? "bg-gray-700 shadow-xl"
                      : "bg-gray-800 hover:bg-gray-700/70"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-bold">
                      <span className="text-yellow-400 mr-3 font-mono">
                        Module {index + 1}.
                      </span>
                      {m.title}
                    </p>

                    {openModule === index ? (
                      <FaChevronUp className="text-yellow-400 text-2xl" />
                    ) : (
                      <FaChevronDown className="text-yellow-400 text-2xl" />
                    )}
                  </div>

                  {openModule === index && (
                    <p className="mt-4 pt-4 border-t border-gray-600 text-gray-300">
                      {m.content}
                    </p>
                  )}
                </div>
              ))}
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1 sticky top-12">
            <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              <img
                src={course.image}
                className="w-full h-56 object-cover"
                alt={course.name}
              />

              <div className="p-8">
                <h2 className="text-3xl font-bold">{course.name}</h2>

                <div className="mt-6 border-t border-gray-700 pt-4">
                  <p className="text-gray-400 text-sm">Current Price</p>

                  <div className="flex gap-3 items-end">
                    <p className="text-4xl font-extrabold text-yellow-400">
                      ₹{finalPrice}
                    </p>
                    <p className="line-through text-gray-500 text-lg">
                      ₹{price}
                    </p>
                  </div>

                  <p className="text-green-400 mt-2 text-md font-bold bg-green-900/50 w-fit px-3 py-1 rounded-full">
                    SAVE {course.discount}%
                  </p>
                </div>

                {/* UPDATED BUTTON */}
                <button
                  onClick={() => navigate("/contact")}
                  className="mt-8 w-full bg-yellow-500 text-black font-extrabold text-lg py-4 rounded-xl hover:bg-yellow-400 transition"
                >
                  Start Learning Now
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CourseDetails;
