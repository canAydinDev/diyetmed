import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function CihazMobilHomePage() {
  const cihazlar = [
    {
      url: "/images/cihazlar-3.png",
      name: "Vacu Active",
      desc: `Vacuactiv, vakum, kızılötesi, ozon terapisi ...`,
    },
    {
      url: "/images/cihazlar-2.png",
      name: "Rollshape",
      desc: `Rollshape, Uzakdoğu masaj tekniklerini modern teknolojiyle buluşturan ...`,
    },
    {
      url: "/images/cihazlar-1.png",
      name: "Perfecto",
      desc: `Tartı Perfecto, Japon teknolojisiyle vücut kompozisyonunuzu ...`,
    },
  ];

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="w-full h-[400px]"
    >
      {cihazlar.map((cihaz, i) => {
        const { url, name, desc } = cihaz;
        return (
          <SwiperSlide key={i} className="mt-20 h-[350px]">
            <div className="grid grid-cols-12 items-center gap-8 px-4 md:px-8 lg:px-12">
              <div className="col-span-12 md:col-span-5 w-full max-w-[300px] mx-auto">
                <div className="flex flex-col justify-center text-center items-center">
                  <div className="text-lg font-semibold mb-2">{name}</div>
                  <Image
                    src={url}
                    width={300}
                    height={300}
                    alt={name}
                    className="rounded-full"
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-7 md:border-l md:border-gray-600 md:pl-6 mt-6 md:mt-0">
                <p className="md:text-lg text-center md:text-left">{desc}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default CihazMobilHomePage;
