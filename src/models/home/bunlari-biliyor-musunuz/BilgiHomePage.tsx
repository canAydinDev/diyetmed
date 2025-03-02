import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function BilgiHomePage() {
  const reviews = [
    {
      authorName: "Sık sık diyet yapmak,",
      comment:
        "vücudundan memnun olmama, depresyon, düşük özsaygı ve aşırı yeme isteğinin artmasıyla ilişkilidir.",
    },
    {
      authorName: "Sürekli kilo alıp vermek (yo-yo diyeti),",
      comment:
        " vücudunuzu zorlar ve metabolizmanızı yavaşlatır. Bu, özellikle karın bölgesinde yağlanma gibi sağlık sorunlarına yol açabilir. Yo-yo diyeti, kısa vadeli kilo kayıplarına yol açsa da, uzun vadede kilo vermeyi zorlaştırır ve bedensel sağlığınıza zarar verebilir.",
    },
    {
      authorName: "Yo-Yo diyeti yapan kişiler,",
      comment:
        "genellikle vücutlarını tekrar tekrar diyetle değiştirirken, kilolarını geri alırlar. Bu durum, metabolizmanın hızını yavaşlatır ve kişiyi daha fazla kilo almaya eğilimli hale getirir.",
    },
    {
      authorName:
        "Katı diyetler ve sürdürülebilir olmayan beslenme alışkanlıkları, ",
      comment:
        " metabolizmayı yavaşlatabilir ve uzun vadede kilo kontrolünü zorlaştırabilir.",
    },
    {
      authorName: "Sağlıklı beslenmek,",
      comment:
        " yalnızca kilo vermek değil, bedenine iyi bakmak ve uzun vadede sağlığını korumaktır.",
    },
  ];

  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {reviews.map((review, i) => {
        const { comment, authorName } = review;

        return (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-12">
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="text-[16px] uppercase font-semibold tracking-widest">
                    {authorName}
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-gray-600 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="xl:text-lg text-center md:text-left">
                  {comment}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default BilgiHomePage;
