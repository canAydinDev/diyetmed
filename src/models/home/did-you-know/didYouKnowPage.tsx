import React from "react";
import DidCards from "./didCards";

const DidYouKnowPage = () => {
  const didCardList = [
    {
      title: "Sık sık diyet yapmak,",
      description:
        "vücudundan memnun olmama, depresyon, düşük özsaygı ve aşırı yeme isteğinin artmasıyla ilişkilidir.",
    },
    {
      title: "Sürekli kilo alıp vermek (yo-yo diyeti),",
      description:
        " vücudunuzu zorlar ve metabolizmanızı yavaşlatır. Bu, özellikle karın bölgesinde yağlanma gibi sağlık sorunlarına yol açabilir. Yo-yo diyeti, kısa vadeli kilo kayıplarına yol açsa da, uzun vadede kilo vermeyi zorlaştırır ve bedensel sağlığınıza zarar verebilir.",
    },
    {
      title: "Yo-Yo diyeti yapan kişiler,",
      description:
        "genellikle vücutlarını tekrar tekrar diyetle değiştirirken, kilolarını geri alırlar. Bu durum, metabolizmanın hızını yavaşlatır ve kişiyi daha fazla kilo almaya eğilimli hale getirir.",
    },
    {
      title:
        "Katı diyetler ve sürdürülebilir olmayan beslenme alışkanlıkları, ",
      description:
        " metabolizmayı yavaşlatabilir ve uzun vadede kilo kontrolünü zorlaştırabilir.",
    },
    {
      title: "Sağlıklı beslenmek,",
      description:
        " yalnızca kilo vermek değil, bedenine iyi bakmak ve uzun vadede sağlığını korumaktır.",
    },
  ];
  return (
    <section className=" mb-10 flex flex-col  justify-start items-center">
      <div className="flex text-center justify-center items-center ">
        <h2 className="text-[min(10vw)] md:text-[100px]  p-5">Did you know</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-start text-center mx-5 ">
        {didCardList.map((card) => {
          return (
            <DidCards
              title={card.title}
              description={card.description}
              key={card.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default DidYouKnowPage;
