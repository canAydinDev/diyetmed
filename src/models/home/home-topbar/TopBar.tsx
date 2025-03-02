import LinksComponent from "./LinksComponent";
import LogoComponent from "./LogoComponent";
import { PhoneNumber } from "./PhoneNumber";

function TopBar() {
  return (
    <div className="flex flex-row items-center justify-center md:mx-10 md:my-1 mt-1 ">
      <div className="hidden md:flex flex-2 ">
        <LinksComponent />
      </div>
      <div className="flex md:flex-6 items-center md:justify-center justify-center w-full text-center">
        <LogoComponent />
      </div>
      <div className="hidden md:flex flex-2">
        <PhoneNumber />
      </div>
    </div>
  );
}

export default TopBar;
