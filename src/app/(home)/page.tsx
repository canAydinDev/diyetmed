import CihazMotionPage from "@/models/home/cihazlar-paketler/CihazMotionPage";
import DidYouKnowPage from "@/models/home/did-you-know/didYouKnowPage";
import Welcome from "@/models/home/home-first/Welcome";
import { HomeNavbar } from "@/models/home/home-navbar/HomeNavbar";
import NasilmiPage from "@/models/home/nasil-mi/nasilmiPage";

const Page = () => {
  return (
    <main className="scroll-smooth">
      <HomeNavbar />
      <Welcome />

      <NasilmiPage />
      <CihazMotionPage />
      <DidYouKnowPage />
    </main>
  );
};

export default Page;
