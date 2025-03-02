"use client";
import { fadeIn } from "@/models/home/home-yorumlar/variants";

import { motion } from "framer-motion";
import BilgiHomePage from "./BilgiHomePage";

function BilgiMotionPage() {
  return (
    <section id="biliyor-musunuz">
      <motion.section
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <BilgiHomePage />
      </motion.section>
    </section>
  );
}

export default BilgiMotionPage;
