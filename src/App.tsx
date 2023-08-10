import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { SeletedPage } from "@/share/types";
import Home from "@/components/home";
import Benefites from "@/components/benefits";
import Classes from "./components/classes";
import ContactUs from "@/components/contactus";
import Footer from "./components/footer";
const App = () => {
  const [seletedPage, setSeletedPage] = useState<SeletedPage>(SeletedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSeletedPage(SeletedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* NAVBAR */}
      <Navbar
        isTopOfPage={isTopOfPage}
        seletedPage={seletedPage}
        setSeletedPage={setSeletedPage}
      />
      {/* HOME */}
      <Home setSeletedPage={setSeletedPage} />
      {/* BENEFITS */}
      <Benefites setSeletedPage={setSeletedPage} />
      {/* CLASSES */}
      <Classes setSeletedPage={setSeletedPage} />
      {/* CONTACT US */}
      <ContactUs setSeletedPage={setSeletedPage} />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
