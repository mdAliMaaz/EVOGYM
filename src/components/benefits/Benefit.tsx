import { SeletedPage } from "@/share/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVarient = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  title: string;
  description: string;
  icon: JSX.Element;
  setSeletedPage: (value: SeletedPage) => void;
};

const Benefit = ({ title, icon, description, setSeletedPage }: Props) => {
  return (
    <motion.div
      variants={childVarient}
      className=' mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'
    >
      <div className=' mb-4 flex justify-center'>
        <div className=' rounded-full bottom-2 border-gray-100 bg-primary-100 p-4'>
          {icon}
        </div>
      </div>
      <h4 className=' font-bold'>{title}</h4>
      <p className=' my-3'>{description}</p>
      <AnchorLink
        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
        onClick={() => setSeletedPage(SeletedPage.ContactUs)}
        href={`#${SeletedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
