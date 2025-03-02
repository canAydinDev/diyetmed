import React from "react";

interface DidcardProps {
  title: string;
  description: string;
}

const DidCards = ({ title, description }: DidcardProps) => {
  return (
    <div className="flex flex-col leading-7 m-5 justify-center items-center ">
      <h2 className="text-[min(5vw)] md:text-[30px] p-3">{title}</h2>
      <p className="text-[min(3vw)] md:text-[16px] text-muted-foreground  p-1">
        {description}
      </p>
    </div>
  );
};

export default DidCards;
