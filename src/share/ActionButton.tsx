import AnchorLink from "react-anchor-link-smooth-scroll";
import { SeletedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSeletedPage: (value: SeletedPage) => void;
};

const ActionButton = ({ children, setSeletedPage }: Props) => {
  return (
    <AnchorLink
      className=' rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer'
      onClick={() => setSeletedPage(SeletedPage.ContactUs)}
      href={`${SeletedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
