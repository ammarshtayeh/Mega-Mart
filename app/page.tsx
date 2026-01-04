import Header from "./components/Header";
import Slider from "./components/Slider";
import CategorySection from "./components/CategorySection";
import DisplayCards from "@/app/components/DisplayCards";
import TopElectronicsBrands from "./components/TopElectronicsBrands";
import DailyEssentials from "./components/DailyEssentials";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header  />
      <Slider  />

      <DisplayCards />
      <CategorySection />
        <TopElectronicsBrands loading={true}/>
        <DailyEssentials loading={true} />
<Footer/>
    </main>
  );
}
