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
          className="object-cover "
          style={{ objectPosition: "center" }}
        />
      </div>

      <div className="relative grid grid-cols-12 mt-20    sm:h-full md:mx-40   ">
        <div className="  col-span-12 ml-10   min-w-[20rem]  md:min-w-1/2   flex relative ">
          <div className="">
            <Image
              src="/images/foto-2.jpg"
              alt="profile picture"
              width={1200}
              height={1000}
            />
          </div>

          <div className="overflow-hidden bg-white  space-y-3 md:space-y-6 p-4 lg:h-[60px] md:p-4   md:min-w-[350px] lg:w-5/6 xl:w-2/3 h-[300px]   md:min-h-[390px] justify-between items-center  text-sm leading-6 md:text-lg -ml-[2.5rem] mt-20 md:mt-80 ">
            <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="  text-sm md:text-lg lg:text-xl "
            >
              Merhaba! Ben Uzman Diyetisyen Cansu Arslanbaş.
            </motion.h2>

            <motion.p
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="  text-xs  leading-6 md:text-sm lg:text-lg font-light hidden sm:block"
            >
              Beslenme ve diyetetik alanında doktora eğitimime devam ediyor,
              bilimsel bilgiyi klinik deneyim ile birleştirerek bireysel
              beslenme danışmanlığı sunuyorum. Sağlıklı yaşam yolculuğunuzda
              sürdürülebilir beslenme planları, kişiye özel diyetler ile
              yanınızdayım. Diyetmed ile doğru adımları atarak yaşam kalitenizi
              artırabilir, kendinizi daha sağlıklı ve enerjik hissedebilirsiniz!
            </motion.p>
            <motion.p
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="  text-xs  leading-4  font-light sm:hidden"
            >
              Beslenme ve diyetetik alanında doktora eğitimime devam ediyor,
              bilimsel bilgiyi klinik deneyim ile birleştirerek bireysel
              beslenme danışmanlığı sunuyorum.Diyetmed ile doğru adımları atarak
              yaşam kalitenizi artırabilir, kendinizi daha sağlıklı ve enerjik
              hissedebilirsiniz!
            </motion.p>
            <div className=" md:py-5 ">
              <Button
                variant="my_green"
                className="uppercase animate-bounce  "
                size="sm"
              >
                <Link href="#nasilmi">Nasil mi? &gt;&gt;</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className=" mt-10 col-span-12 text-center justify-center items-center bg-[#e8f1e7] md:bg-opacity-0   ">
          <div className="  mb-10 mx-3 md:mx-20 lg:mx-40 space-y-2  md:space-y-10 ">
            <motion.h3
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-md sm:text-lg md:text-2xl leading-10 "
            >
              Vücudunuzun nasıl göründüğüyle sürekli meşgul olmak stresli ve
              yorucu olabilir.
            </motion.h3>
            <motion.p
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="  text-muted-foreground mx-3 md:mx-10 text-sm md:text-lg leading-7 "
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
