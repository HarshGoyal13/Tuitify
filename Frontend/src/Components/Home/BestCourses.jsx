import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { courses as staticCourses } from "../../Data/Course";

const BestCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load only TOP 4 courses
  useEffect(() => {
    setTimeout(() => {
      const bestFour = staticCourses.slice(0, 4);
      setCourses(bestFour);
      setLoading(false);
    }, 600);
  }, []);

  return (
    <div className="robot_font min-h-screen py-16 px-4 sm:px-8">

      {/* 🌟 BEAUTIFUL CENTERED HEADING */}
      <div className="text-center mb-16 relative inline-block w-full">
        <h1
          className="text-4xl sm:text-5xl font-extrabold 
                     text-transparent bg-clip-text 
                     bg-gradient-to-r from-blue-300 to-blue-500
                     relative inline-block"
        >
          <span className="text-white">Our Best</span>  Courses
        </h1>

        {/* Marker Behind Text */}
        <span
          className="absolute left-1/2 top-full mt-1 -translate-x-1/2 
                     w-48 h-4 bg-blue-400/30 
                     rounded-full blur-md"
        ></span>
      </div>

      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center h-52">
          <ClipLoader size={45} color="#38bdf8" />
        </div>
      )}

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {!loading &&
          courses.map((course) => {
            const price = course.price || 0;
            const discount = course.discount || 0;
            const discountAmount = Math.round(price * (discount / 100));
            const finalPrice = Math.round(price - discountAmount);

            return (
              <Link
                to={`/course/${course.id}`}
                key={course.id}
                className="block"
              >
                <div
                  className="backdrop-blur-sm bg-white/5 border border-white/10 
                             rounded-xl overflow-hidden shadow-lg 
                             transition-all duration-300 
                             hover:scale-[1.05] hover:shadow-xl 
                             hover:bg-white/10 max-w-md mx-auto"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <h2 className="text-xl font-bold text-white">
                      {course.name}
                    </h2>

                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="mt-4 flex items-center gap-3 flex-wrap">
                      <p className="text-xl font-bold text-blue-300">
                        ₹{finalPrice}
                      </p>

                      <p className="text-sm text-gray-500 line-through">
                        ₹{price}
                      </p>

                      {discount > 0 && (
                        <p className="text-sm text-green-400 font-semibold">
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
    </div>
  );
};

export default BestCourses;
