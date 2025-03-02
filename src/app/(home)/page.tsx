import CihazMotionPage from "@/models/home/cihazlar-paketler/CihazMotionPage";
import Welcome from "@/models/home/home-first/Welcome";
import { HomeNavbar } from "@/models/home/home-navbar/HomeNavbar";

const Page = () => {
  return (
    <main className="scroll-smooth">
      <HomeNavbar />
      <Welcome />
      <CihazMotionPage />
      {/* <BilgiMotionPage /> */}
      <div className="h-[2500px]">h</div>
    </main>
  );
};

export default Page;
