import React from "react";

const NasilmiPage = () => {
  return (
    <section
      id="nasilmi"
      className="mt-10 md:mt-0 flex justify-center items-center mx-auto "
    >
      <div className="grid grid-cols-12 md:mt-16 justify-center items-center md:w-full ">
        <div className="col-span-12 md:col-span-4 grid justify-center">
          <iframe
            width="460"
            height="350"
            src="https://www.youtube.com/embed/wpz2IlOX2AY"
            title="diyetmed tanitim videosu"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-span-12 md:col-span-8 mt-10 md:mt-0 justify-center space-y-4 md:space-y-8 px-5 md:pr-10 text-center md:text-start">
          <h2 className="text-2xl font-semibold">💚 Diyetmed’le Bir Gün! 💚</h2>
          <p>
            Sağlıklı ve sürdürülebilir kilo kaybı için düzenli beslenme planı ve
            fiziksel aktivite olmazsa olmazdır. Tek başına mucizevi bir besin ya
            da cihaz yoktur. Ancak doğru stratejilerle hedefinize ulaşmak çok
            daha kolay ve hızlı olabilir. Mersin Yenişehir’de bulunan Diyetmed
            olarak, gelişmiş teknolojiye sahip Vacu Activ ve Roll Shape
            cihazlarımızla kilo verme sürecinizi destekliyoruz. Bu cihazlar,
            özellikle yoğun tempoda çalışan ve spora zaman ayıramayan bireyler
            için büyük bir avantaj sağlar.
          </p>
          <p>
            Haftada sadece 3 seans ile bile fiziksel aktivitenin tamamını
            üstlenerek, yağ yakımını hızlandırır, sıkılaşmayı destekler ve
            metabolizmayı canlandırır. Diyet sürecinizin temel taşı, kişiye özel
            hazırlanan sağlıklı ve dengeli beslenme programına uyum sağlamaktır.
            Cihazlarımızla elde ettiğiniz sonuçlar, bu beslenme programı ile
            birleştiğinde çok daha kısa sürede etkili ve tatmin edici sonuçlar
            almanızı sağlar.
          </p>
          <p>
            🌿 Size düşen tek şey, kişiye özel beslenme programınıza uymak ve
            normalden çok daha hızlı aldığınız sonuçların keyfini çıkarmak! 🎯
            💻 Online diyet hizmetimizden yararlanmak için profilimdeki ve web
            sitemdeki iletişim bilgilerinden bize ulaşabilirsiniz! 📩 💚
            Sağlıklı, bilimsel ve sürdürülebilir bir değişim için Diyetmed
            yanınızda! 💚
          </p>
        </div>
      </div>
    </section>
  );
};

export default NasilmiPage;
