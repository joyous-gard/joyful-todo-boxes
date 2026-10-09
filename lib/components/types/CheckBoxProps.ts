import {
  FaBan,
  FaBolt,
  FaCheck,
  FaCheckCircle,
  FaCheckDouble,
  FaCheckSquare,
  FaCircle,
  FaClock,
  FaDotCircle,
  FaExclamation,
  FaFlag,
  FaHeart,
  FaMinus,
  FaPaw,
  FaStar,
  FaThumbsUp,
  FaThumbtack,
} from "react-icons/fa";
import type { BoxProps } from "./BoxProps";

export const TickIcons = {
  check: FaCheck,
  circleCheck: FaCheckCircle,
  doubleCheck: FaCheckDouble,
  squareCheck: FaCheckSquare,
  ban: FaBan,
  bolt: FaBolt,
  circle: FaCircle,
  dotCircle: FaDotCircle,
  clock: FaClock,
  flag: FaFlag,
  exclamation: FaExclamation,
  heart: FaHeart,
  minus: FaMinus,
  paw: FaPaw,
  star: FaStar,
  thumbsUp: FaThumbsUp,
  thumbtack: FaThumbtack
} as const;

export type TickIconName = keyof typeof TickIcons;

export type CheckBoxProps = BoxProps & {
  tickIcon?: TickIconName;
};