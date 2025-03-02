"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

function PolicyForms() {
  return (
    <div className="flex-col justify-center items-center text-center  mb-5">
      <motion.div
        variants={fadeIn("up", 0.9)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <p className="text-gray-600 text-sm text-center">
          Cansu Arslanbaş | Mersin | Uzman Diyetisyen
        </p>
        <p className="text-muted-foreground"> © 2025 All rights reserved.</p>
      </motion.div>
    </div>
  );
}

export default PolicyForms;
