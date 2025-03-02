"use client";
import { fadeIn } from "@/models/home/home-yorumlar/variants";

import { motion } from "framer-motion";
import CihazHomePage from "./CihazHomePage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function CihazMotionPage() {
  return (
    <section id="cihazlar">
      <motion.section
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <CihazHomePage />
      </motion.section>
      <div className="flex flex-co justify-center items-center mt-20">
        <Button
          variant="my_green"
          className="uppercase animate-bounce  "
          size="lg"
        >
          <Link href="/cihazlar">Paketler</Link>
        </Button>
      </div>
    </section>
  );
}

export default CihazMotionPage;
