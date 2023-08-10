import { SeletedPage } from "@/share/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  seletedPage: SeletedPage;
  setSeletedPage: (value: SeletedPage) => void;
};

const Links = ({ page, seletedPage, setSeletedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SeletedPage;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSeletedPage(lowerCasePage)}
      className={`${seletedPage === lowerCasePage ? "text-primary-500" : ""}
       transition duration-500 hover:text-primary-300
      `}
    >
      {page}
    </AnchorLink>
  );
};

export default Links;
