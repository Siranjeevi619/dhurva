
import React from "react";
import "../../assets/style/AnimatedCard.css";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const AnimatedCard = ({ passDetails }) => {
  const handleButtonClick = () => {
    Swal.fire({
      title: "Payment Link Coming Soon!",
      text: "The payment link for this pass will be available soon. Stay Tuned.",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <motion.div
      className="relative flex justify-center group"
      whileHover={{
        boxShadow: "0 0 15px rgba(249, 115, 22, 0.6)",
        transition: { duration: 0.3 },
      }}
    >
      <div className="card relative z-10 w-96 mx-auto transform transition-all duration-300 hover:scale-105 rounded-xl overflow-hidden shadow-lg border-2 border-orange-200 hover:border-orange-300">
        <div className="bg-orange-100 rounded-t-xl py-4">
          <h3 className="text-center text-xl sm:text-2xl font-bold dm-sans text-orange-700 transition-colors">
            {passDetails?.title || "No Title"}
          </h3>
        </div>

        {/* White Body */}
        <div className="bg-white px-4 sm:px-8 py-6 sm:py-8 h-full flex flex-col transition-colors">
          <div className="mb-4 sm:mb-6 text-center transform transition-all group-hover:scale-105">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
              ${passDetails?.price || "N/A"}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">One-Time Payment</p>
          </div>

          <div className="mt-3 sm:mt-4 text-sm sm:text-md text-gray-600 flex-grow overflow-auto">
            <ul className="space-y-2 sm:space-y-3">
              {passDetails?.benefits?.length > 0 ? (
                passDetails.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 sm:gap-3 opacity-0 animate-slide-up justify-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="break-words open-sans leading-relaxed text-sm sm:text-base text-center">
                      {benefit}
                    </span>
                  </li>
                ))
              ) : (
                <li>No benefits available</li>
              )}
            </ul>
          </div>

          <div className="flex justify-center mb-6 mt-6 sm:mt-8">
            <Button
              className="bg-gradient-to-r from-orange-400 to-orange-300 open-sans p-3 text-white hover:from-orange-500 hover:to-orange-400 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold hover:shadow-lg font-sans transition-all duration-300 flex items-center gap-2 hover:gap-3 text-sm sm:text-base"
              onClick={handleButtonClick}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
=======
import React from "react";
import { motion } from "framer-motion";
import "../../assets/style/AnimatedCard.css";
import "../../assets/fonts/opensans.css";
import "../../assets/fonts/dmsans.css";
import { Check, RocketIcon } from "lucide-react";
import { Button } from "../ui/button";

const AnimatedCard = ({ passDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex justify-center px-4 sm:px-0"
    >
      <div className="card w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative z-10">
        <div className="bg p-6 rounded-lg hover:text-black shadow-lg">
          <h3 className="text-center text-2xl sm:text-3xl powergrok font-semibold text-black">
            {passDetails.title}
          </h3>
          <p className="text-xl sm:text-2xl text-center font-medium mt-2">
            {passDetails.price}
          </p>

          <ul className="mt-4 space-y-3 text-sm sm:text-md text-black">
            {passDetails.benefits.map((benefit, index) => (
              <li key={index}>
                <span className="flex items-center gap-3">
                  <Check className="flex-shrink-0 text-green-400" />
                  <span className="text-left">{benefit}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center  mb-2">
            <Button
              className="mt-5 text-white hover:text-black px-6 py-2 font-medium rounded-full hover:scale-105 transition-all flex items-center gap-2"
              style={{
                backgroundColor: passDetails.color,
                hover: { backgroundColor: passDetails.color },
              }}
            >
              Visit <RocketIcon size={18} />
            </Button>
          </div>
        </div>

        <div
          className="blob absolute -top-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 z-0"
          style={{
            backgroundColor: passDetails.color,
            boxShadow: `0 0 40px 20px ${passDetails.color}`,
            filter: `blur(12px) drop-shadow(0 0 20px ${passDetails.color})`,
          }}
        ></div>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
