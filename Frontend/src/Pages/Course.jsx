import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import FAQ from "../Components/FAQ";
import { Link } from "react-router-dom";
import { useSEO } from "../Hook/UseSeo";

// ⭐ Import static courses
import { courses as staticCourses } from "../Data/Course";

const Courses = () => {
  useSEO({
    title: "Courses | Tuitify",
    description:
      "Browse high-quality programming and tech courses at Tuitify. Explore beginner to advanced courses in web development, MERN, Python, DSA, and more.",
  });

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // ⛔ No API — load static courses
  useEffect(() => {
    setTimeout(() => {
      setCourses(staticCourses); // direct import
      setLoading(false);
    }, 700); // small delay just for loader animation
  }, []);

  return (
    <>
      <div className="robot_font min-h-screen py-12 px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-12">
          Explore Our <span className="text-blue-400">Courses</span>
        </h1>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center items-center h-52">
            <ClipLoader size={45} color="#facc15" />
          </div>
        )}

        {/* Empty */}
        {!loading && courses.length === 0 && (
          <p className="text-center text-gray-300 text-lg">
            No courses available at the moment.
          </p>
        )}

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {!loading &&
            courses.map((course) => {
              const price = course.price || 0;
              const discount = course.discount || 0;
              const discountAmount = Math.round(price * (discount / 100));
              const finalPrice = Math.round(price - discountAmount);

              return (
                <Link
                  to={`/course/${course.id}`} // ⭐ static ID
                  key={course.id}
                  className="block"
                >
                  <div
                    className="bg-gray-800 border border-gray-700 rounded-lg 
                              shadow-md overflow-hidden transition-all duration-300 
                              max-w-md mx-auto hover:scale-[1.03]"
                  >
                    <div className="h-58 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-4">
                      <h2 className="text-lg font-bold text-white">
                        {course.name}
                      </h2>

                      <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                        {course.description}
                      </p>

                      <div className="mt-3 flex items-center gap-2 flex-wrap">
                        <p className="text-lg font-bold text-yellow-400">
                          ₹{finalPrice}
                        </p>

                        <p className="text-xs text-gray-400 line-through">
                          ₹{price}
                        </p>

                        {discount > 0 && (
                          <p className="text-xs text-green-400 font-semibold">
                            {discount}% OFF
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>

        <FAQ />
      </div>
    </>
  );
};

export default Courses;
