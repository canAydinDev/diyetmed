import { FaWhatsapp } from "react-icons/fa";

export const PhoneNumber = () => {
  return (
    <div className="flex hover:cursor-pointer ">
      <div className="flex text-center text-nowrap text-xl font-semibold justify-center items-center gap-2 ">
        <FaWhatsapp size={46} style={{ color: "#77a72b" }} />
        <div>
          <p className="text-[#77a72b]">+90 546 935 97 88</p>
        </div>
      </div>
    </div>
  );
};
