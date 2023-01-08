import { useState, useEffect } from "react";
import Home from "@/scenes/home";
import Navbar from "@/scenes/navbar";
import HomeTest from "./scenes/homeTest";
import Beneficts from "@/scenes/beneficts";
import { SelectedPage } from "@/shared/types";
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/contactUs";
import Footer from "./scenes/footer";
import useScrollLock from "@/hooks/useScrollLock";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [locked, setLocked] = useScrollLock(false, "root");
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Início
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const showModal = () => {
    setIsShowModal(!isShowModal);
    setLocked(!locked);
  };

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
      <HomeTest
        showModal={showModal}
        isShowModal={isShowModal}
        setSelectedPage={setSelectedPage}
      />
      <Beneficts setSelectedPage={setSelectedPage} />
      {/* <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} /> */}
    </div>
  );
}

export default App;
