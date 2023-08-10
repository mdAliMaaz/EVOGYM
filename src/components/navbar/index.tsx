import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Links from "./Links";
import { SeletedPage } from "@/share/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/share/ActionButton";

type Props = {
  seletedPage: SeletedPage;
  setSeletedPage: (value: SeletedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage, seletedPage, setSeletedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMeduimScreen = useMediaQuery("(min-width:1060px)");
  const [menu, setMenu] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        {/* parent */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* leftside */}
            <img src={Logo} alt='logo' />

            {isAboveMeduimScreen ? (
              <div className={`${flexBetween} w-full`}>
                {/* right side */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Links
                    page='Home'
                    seletedPage={seletedPage}
                    setSeletedPage={setSeletedPage}
                  />
                  <Links
                    page='Benefits'
                    seletedPage={seletedPage}
                    setSeletedPage={setSeletedPage}
                  />
                  <Links
                    page='Our Classes'
                    seletedPage={seletedPage}
                    setSeletedPage={setSeletedPage}
                  />
                  <Links
                    page='Contact Us'
                    seletedPage={seletedPage}
                    setSeletedPage={setSeletedPage}
                  />
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <p>Sign up</p>
                  <ActionButton setSeletedPage={setSeletedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className=' rounded-full bg-secondary-500 p-2'
                onClick={() => setMenu(!menu)}
              >
                <Bars3Icon className=' h-6 w-6 text-white' />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* mobile memu */}

      {!isAboveMeduimScreen && menu && (
        <div className=' fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
          {/* CLoseicon */}
          <div className=' flex  justify-end p-12'>
            <button onClick={() => setMenu(!menu)}>
              <XMarkIcon className=' h-6 w-6 text-gray-400' />
            </button>
          </div>
          {/* menu items */}
          <div className=' ml-[33%] flex flex-col gap-10 text-2xl'>
            <Links
              page='Home'
              seletedPage={seletedPage}
              setSeletedPage={setSeletedPage}
            />
            <Links
              page='Benefits'
              seletedPage={seletedPage}
              setSeletedPage={setSeletedPage}
            />
            <Links
              page='Our Classes'
              seletedPage={seletedPage}
              setSeletedPage={setSeletedPage}
            />
            <Links
              page='Contact Us'
              seletedPage={seletedPage}
              setSeletedPage={setSeletedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
