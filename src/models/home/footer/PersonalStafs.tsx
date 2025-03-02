"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

function PersonalStafs() {
  return (
    <div className="text-slate-900 flex flex-col justify-center items-center ">
      <motion.a
        variants={fadeIn("right", 0.9)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        whileHover={"whileHover"}
        href="#"
        className="  text-muted-foreground"
      >
        diyetmed@gmail.com
      </motion.a>
      <motion.a
        variants={fadeIn("right", 0.9)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        whileHover={"whileHover"}
        href="https://nextjs-portfolio-livid-rho.vercel.app/"
        className=" text-muted-foreground"
      >
        +90 546 935 9788
      </motion.a>
    </div>
  );
}

export default PersonalStafs;
