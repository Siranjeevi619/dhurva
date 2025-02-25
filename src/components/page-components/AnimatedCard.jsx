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
