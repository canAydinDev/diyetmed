"use client";
import { fadeIn } from "@/models/home/home-yorumlar/variants";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CihazHomePage from "./CihazHomePage";
import CihazMobilHomePage from "./CihazlarMobilHomePage";

function CihazMotionPage() {
  return (
    <section id="cihazlar">
      <motion.section
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        {/* Masaüstü görünümü */}
        <div className="hidden sm:block">
          <CihazHomePage />
        </div>
        {/* Mobil görünümü */}
        <div className="block sm:hidden">
          <CihazMobilHomePage />
        </div>
      </motion.section>

      <div className="flex justify-center items-center mt-20">
        <Button
          variant="my_green"
          className="uppercase animate-bounce"
          size="lg"
        >
          <Link href="/paketler">Paketler</Link>
        </Button>
      </div>
    </section>
  );
}

export default CihazMotionPage;
