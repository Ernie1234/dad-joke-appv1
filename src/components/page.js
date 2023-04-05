import { BiLaptop } from "react-icons/bi";
import { GiFirePunch, GiSpookyHouse } from "react-icons/gi";
import { ImShuffle } from "react-icons/im";
import { SiDarkreader } from "react-icons/si";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { TbChristmasTree } from "react-icons/tb";
import { VscSymbolMisc } from "react-icons/vsc";

export const page = [
  {
    title: "any joke",
    path: "any",
    icon: <ImShuffle size={45} color="#7e7e7e" />,
  },
  {
    title: "programming",
    path: "programming",
    icon: <BiLaptop size={45} color="#7e7e7e" />,
  },
  {
    title: "Misc",
    path: "misc",
    icon: <VscSymbolMisc size={45} color="#7e7e7e" />,
  },
  {
    title: "Dark",
    path: "dark",
    icon: <SiDarkreader size={45} color="#7e7e7e" />,
  },
  {
    title: "pun",
    path: "pun",
    icon: <GiFirePunch size={45} color="#7e7e7e" />,
  },
  {
    title: "spooky",
    path: "spooky",
    icon: <GiSpookyHouse size={45} color="#7e7e7e" />,
  },
  {
    title: "christmas",
    path: "christmas",
    icon: <TbChristmasTree size={45} color="#7e7e7e" />,
  },
];

export const group = [
  {
    title: "single",
    path: "single",
    icon: <RiCheckboxMultipleBlankLine size={45} color="#7e7e7e" />,
  },
  {
    title: "twopart",
    path: "twopart",
    icon: <RiCheckboxMultipleLine size={45} color="#7e7e7e" />,
  },
];
