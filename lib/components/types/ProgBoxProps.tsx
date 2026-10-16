import type { JSX, SVGProps } from "react";
import type { BoxProps } from "./BoxProps";

type TickProps = Pick<
  SVGProps<SVGElement>,
  | "fill"
  | "stroke"
  | "strokeWidth"
  | "strokeLinecap"
  | "strokeLinejoin"
  | "clipPath"
  | "className"
  | "style"
  | "opacity"
>;

type TickComponent = (props: TickProps) => JSX.Element;

export const TickStyles = {
  gernand: {
    tickInProgress: (props) => (
      <polygon points="0,24 0,0 24,0" stroke="none" {...props} />
    ),
    tickDone: (props) => (
      <polygon points="24,0 24,24 0,24" stroke="none" {...props} />
    ),
  },
  strikesAndSpares: {
    tickInProgress: (props) => (
      <line x1="3" y1="21" x2="21" y2="3" strokeLinecap="butt" {...props} />
    ),
    tickDone: (props) => (
      <line x1="21" y1="21" x2="3" y2="3" strokeLinecap="butt" {...props} />
    ),
  },
} satisfies Record<
  string,
  {
    tickInProgress: TickComponent;
    tickDone: TickComponent;
  }
>;

export type TickStyleName = keyof typeof TickStyles;

export type TickParts = {
  tickInProgress: SVGProps<SVGElement>;
  tickDone: SVGProps<SVGElement>;
};

export type ProgBoxProps = BoxProps & {
  tickStyle?: TickStyleName;
};
