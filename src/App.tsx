import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Beneficts from "@/scenes/beneficts";
import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/contactUs";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Início
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Início);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App bg-gray-50">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Beneficts setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
