
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/page-components/Navbar";
import PassCard from "@/components/page-components/PassCard";
import FooterSection from "@/components/sections/footer/FooterSection";
import RegistrationPage from "../Registration/RegistrationPage";
import "../../assets/fonts/powergrotesk.css";
import "../../assets/fonts/dmsans.css";
import AnimatedCard from "@/components/page-components/AnimatedCard";

const passes = [
  {
    id: 1,
    title: "Standard Pass",
    price: 200,
    benefits: [
      "Day 1 on 15/03/2024",
      "Technical and Non-Technical Events",
      "Get Certificates",
    ],
    date: "15/03/2024",
  },
  {
    id: 2,
    title: "Elite Pass",
    price: 300,
    benefits: [
      "Day 1 on 15/03/2024",
      "One Workshop / Hackathon / Ideathon",
      "Get Certificates",
    ],
    date: "15/03/2024",
  },
  {
    id: 3,
    title: "Pro Pass",
    price: 400,
    benefits: [
      "Unlimited Technical Events + One Workshop / Hackathon / Ideathon",
      "Get Certificates",
      "Live Video",
      "Event Photos (via Google Drive)",
    ],
    date: "15/03/2024",
  },
  {
    id: 4,
    title: "Cultural Pass",
    price: 200,
    benefits: [
      "Day 2 on 16/03/2024",
      "Unlimited Cultural Events",
      "Get Certificates",
    ],
    date: "16/03/2024",
  },
  {
    id: 5,
    title: "Pro Plus Pass",
    price: 500,
    benefits: [
      "For Day 1(15/03/2024) & Day 2(16/03/2024)",
      "Unlimited Technical Events + One Workshop / Hackathon / Ideathon + Unlimited Cultural Events",
      "Get Certificates",
      "Meet Resource Person",
      "Live Video",
      "Event Photos (via Google Drive)",
    ],
    date: "15/03/2024 & 16/03/2024",
  },
];

const PassPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dm-sans">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center sm:mt-24 mt-20"
      >
        <h1 className="text-5xl powergrok tracking-wide">Exclusive Passes</h1>
        <p className="text-gray-800 text-lg mt-2">
          Unlock premium content with our exclusive memberships
        </p>
      </motion.div>

      <div className="flex flex-col items-center mt-2 px-6 mb-6">
        <div className="flex-wrap mt-20 px-6 relative z-10">
          {passes.map((pass) => (
            <AnimatedCard key={pass.id} passDetails={pass} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PassPage;
=======
import React, { useEffect } from "react";
import { motion } from "framer-motion";

import "../../assets/fonts/powergrotesk.css";
import "../../assets/fonts/dmsans.css";
import AnimatedCard from "@/components/page-components/AnimatedCard";

const passes = [
  {
    id: 1,
    title: "Standard Pass",
    color: "#1D8ECD",
    price: 200,
    benefits: [
      "Day 1 on 15/03/2024",
      "Technical and Non-Technical Events",
      "Get Certificates",
    ],
    date: "15/03/2024",
  },
  {
    id: 2,
    title: "Elite Pass",
    price: 300,
    color: "#E5272C",
    benefits: [
      "Day 1 on 15/03/2024",
      "One Workshop / Hackathon / Ideathon",
      "Get Certificates",
    ],
    date: "15/03/2024",
  },
  {
    id: 3,
    title: "Pro Pass",
    color: "#1FAB4A",
    price: 400,
    benefits: [
      "Unlimited Technical Events + One Workshop / Hackathon / Ideathon",
      "Get Certificates",
    ],
    date: "15/03/2024",
  },
  {
    id: 4,
    title: "Cultural Pass",
    color: "#FFA500",
    price: 200,
    benefits: [
      "Day 2 on 16/03/2024",
      "Unlimited Cultural Events",
      "Get Certificates",
    ],
    date: "16/03/2024",
  },
  {
    id: 5,
    title: "Pro Plus Pass",
    price: 500,
    color: "#8B00F7",
    benefits: [
      "For Day 1(15/03/2024) & Day 2(16/03/2024)",
      "Unlimited Technical Events + One Workshop / Hackathon / Ideathon + Unlimited Cultural Events",
      "Get Certificates",
    ],
    date: "15/03/2024 & 16/03/2024",
  },
];

const PassPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dm-sans">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center sm:mt-24 mt-20"
      >
        <h1 className="text-5xl powergrok tracking-wide">Exclusive Passes</h1>
        <p className="text-gray-800 text-lg mt-2">
          Unlock premium content with our exclusive memberships
        </p>
      </motion.div>

      <div className="flex flex-col items-center mt-2 px-6 mb-6">
        <div className="flex flex-wrap justify-center gap-10 mt-20 ms-3 sm:ms-0 relative z-10">
          {passes.map((pass) => (
            <AnimatedCard
              key={pass.id}
              passDetails={pass}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PassPage;
