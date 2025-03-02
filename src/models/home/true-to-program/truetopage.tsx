import Image from "next/image";
import React from "react";

const TrueToPage = () => {
  return (
    <section className="relative flex ">
      <div className="grid grid-cols-6 md:flex-row ">
        <div className="relative col-span-6 md:col-span-3 justify-center items-center text-center">
          <div className=" absolute inset-0 -z-10 w-full h-full   ">
            <Image
              src="/images/Introducing+Green+Square-02.png"
              alt="Header 3-01"
              height={1000}
              width={1000}
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
          <div className="mx-auto  px-10 py-20 space-y-4">
            <h3 className="font-semibold text-xl ">True To You Program</h3>
            <p className=" text-md leading-7 md:h-48 lg:h-100 overflow-hidden">
              Prioritize your well being without obsessing about weight loss
              through this 12-week self-care based nutrition program that
              promotes true wellness. You will learn to prioritize your
              well-being by trusting your body and silencing your inner food
              police that seeks to keep you trapped in the diet cycle. You will
              create goals and habits around behaviors that promote self-care
              and well-being while honoring your body, your personal
              experiences, and your values.
            </p>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <Image
            src="/images/Spaghetti2-02.png"
            alt="Header 3-01"
            height={1000}
            width={1000}
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
};

export default TrueToPage;
