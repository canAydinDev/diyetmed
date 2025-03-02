"use client";

import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Welcome = () => {
  return (
    <section id="welcome" className="relative  w-full min-h-screen flex   ">
      <div className="absolute inset-0 -z-10 h-4/5 sm:h-full w-full  ">
        <Image
          src="/images/Header+3-01.png"
          alt="Header 3-01"
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>

      <div className="relative grid grid-cols-12 mt-20  h-[700px] sm:h-full md:mx-40 ">
        <div className="  col-span-12 ml-10  min-w-[16rem] md:min-w-1/2   flex relative  ">
          <div className="">
            <Image
              src="/images/foto-2.jpg"
              alt="profile picture"
              width={1200}
              height={1000}
            />
          </div>
          <div></div>
          <div className=" bg-white  space-y-3 md:space-y-6 p-4 md:p-12 min-w-[210px]  md:min-w-[350px] lg:w-3/4 xl:w-2/3 h-[240px] md:min-h-[500px] lg:min-h-[350px] justify-between items-center  text-sm leading-6 md:text-lg -ml-[2.5rem] mt-20 mr-5 md:mt-80">
            <motion.h2
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="  text-sm md:text-2xl "
            >
              Hey! Ben Cansu.
            </motion.h2>

            <motion.p
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="  text-xs  leading-6 md:text-xl font-light"
            >
              Kronik diyet yapma, yeme bozuklukları ve beden algısı ile ilgili
              zorluklar yaşayan kadın ve erkeklerin yiyeceklerle ve bedenleriyle
              barışmalarına yardımcı oluyorum.
            </motion.p>
            <div className="md:mt-10  md:py-5">
              <Button variant="my_green" className="uppercase animate-bounce  ">
                <Link href="#cihazlar">Nasil mi? &gt;&gt;</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className=" mt-10 col-span-12 text-center justify-center items-center  ">
          <div className="  mb-10 sm:mx-10 md:mx-28 lg:mx-56  space-y-10 ">
            <motion.h3
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-2xl leading-10 "
            >
              Vücudunuzun nasıl göründüğüyle sürekli meşgul olmak stresli ve
              yorucu olabilir.
            </motion.h3>
            <motion.p
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="  text-muted-foreground  mx-10 text-lg leading-7 "
            >
              Uzun yıllar boyunca, bedenimle ilgili nasıl hissetmem gerektiği
              başkaları tarafından şekillendirildi. Çoğumuz gibi ben de, “ideal”
              olarak sunulan kalıplara uymanın sağlıklı olmaktan çok kabul
              görmekle eşdeğer olduğunu sandım. Daha az yemem, daha küçük
              görünmem, daha fazla kontrol sağlamam gerektiği söylendi. Ancak
              zamanla fark ettim ki, kendimizi sürekli değiştirmeye çalışmak,
              bedenimizle bir mücadeleye girmek sadece tükenmişlik yaratıyor.
              Oysa önemli olan, bedenimize karşı savaş açmak değil, ona iyi
              bakmayı öğrenmek ve sağlığımıza yatırım yapmak.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
